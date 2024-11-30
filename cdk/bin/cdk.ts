#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";

import { StaticWebStack } from "../lib/static-web-stack";

const app = new cdk.App();

console.log(process.env.CDK_DEFAULT_ACCOUNT);
console.log(process.env.CDK_DEFAULT_REGION);

new StaticWebStack(app, "CdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  domainName: "taekgogo.com",
  siteSubDomain: "blog",
});
