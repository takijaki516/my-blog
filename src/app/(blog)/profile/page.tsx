/* eslint-disable @next/next/no-img-element */
import { SkillBadge } from "@/components/skill-badge";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="container flex min-h-screen flex-col space-y-8 py-12">
      <div className="py-4">
        <h1 className="bg-gradient-to-r from-foreground bg-clip-text pb-8 text-4xl font-bold text-transparent">
          성장하고 싶은 개발자입니다!
        </h1>

        <h2 className="pb-4 text-xl font-light">
          세상에 긍적적인 영향을 주는 소프트웨어를 만들고 싶습니다! <br />
        </h2>
      </div>

      <Separator />

      <div className="flex flex-col space-y-3 pt-4">
        <div className="text-xl font-semibold">tech stack</div>

        <div>
          <div className="pb-2">Language</div>
          <div className="flex items-center space-x-3">
            <SkillBadge>
              <img
                alt="typescript logo"
                src="/skill-logo/typescript-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Typescript
            </SkillBadge>
            <SkillBadge>
              <img
                alt="react logo"
                src="/skill-logo/javascript-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Javascript
            </SkillBadge>
            <SkillBadge>
              <img
                alt="python logo"
                src="/skill-logo/python-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Python
            </SkillBadge>
          </div>
        </div>

        <div>
          <div className="pb-2">Library/Framework</div>

          <div className="flex items-center space-x-3">
            <SkillBadge>
              <img
                alt="react logo"
                src="/skill-logo/react-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              React
            </SkillBadge>
            <SkillBadge>
              <img
                alt="Next.js logo"
                src="/skill-logo/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Next.js
            </SkillBadge>

            <SkillBadge>
              <img
                alt="nest.js logo"
                src="/skill-logo/nestjs-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Nest.js
            </SkillBadge>
          </div>
        </div>
      </div>
    </main>
  );
}
