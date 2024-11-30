import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import { Construct } from "constructs";
import { join } from "path";

interface StaticWebStackProps extends cdk.StackProps {
  domainName: string;
  siteSubDomain: string;
}

export class StaticWebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StaticWebStackProps) {
    super(scope, id, props);

    const myBlogDomain = `${props.siteSubDomain}.${props.domainName}`;

    const hostedZone = route53.HostedZone.fromLookup(this, "HostedZone", {
      domainName: props.domainName,
    });

    // Create S3 bucket
    const myBlogBucket = new s3.Bucket(this, "MyBlogBucket", {
      bucketName: myBlogDomain,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO: for test change after test to RETAIN
      autoDeleteObjects: true,
    });

    // TLS certificate
    const certificate = new acm.Certificate(this, "MyBlogCertificate", {
      domainName: myBlogDomain,
      validation: acm.CertificateValidation.fromDns(hostedZone),
    });

    // CloudFront distribution
    const distribution = new cloudfront.Distribution(
      this,
      "MyBlogDistribution",
      {
        certificate: certificate,
        defaultRootObject: "index.html",
        domainNames: [myBlogDomain],
        minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
          },
        ],
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(myBlogBucket),
          compress: true,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      },
    );

    // Route53 alias record for the CloudFront distribution
    new route53.ARecord(this, "MyBlogAliasRecord", {
      recordName: myBlogDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
      zone: hostedZone,
    });

    // Deploy site contents to S3 bucket
    // NOTE:
    // BucketDeployment construct automatically creates a CloudFront invalidation
    // when distribution is specified and distributionPaths are provided
    new s3deploy.BucketDeployment(this, "DeployWithInvalidation", {
      sources: [s3deploy.Source.asset(join(__dirname, "..", "..", "out"))],
      destinationBucket: myBlogBucket,
      distribution, // Specifies which distribution to invalidate
      distributionPaths: ["/*"], // Invalidates all paths
    });
  }
}
