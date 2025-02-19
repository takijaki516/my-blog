import { Skill } from "../skill";
import { Card, CardContent } from "../ui/card";
import { TooltipProvider } from "../ui/tooltip";

export default function Profile() {
  return (
    <section
      id="profile"
      className="container relative z-10 -mt-20 w-full pb-10"
    >
      <h2 className="pb-4 text-3xl font-bold">Profile</h2>
      <div className="grid gap-20 md:grid-cols-2">
        <Card className="border-border/50 font-semibold text-foreground/80 transition-colors duration-500 ease-in-out hover:text-foreground">
          <CardContent className="p-6">
            새로운 도전을 두려워하지 않고, 지속적인 성장을 추구하는
            개발자입니다.
            <br />
            문제 해결 과정에서 팀원들과의 적극적인 소통을 중요시하며, 효율적인
            코드 작성을 위해 꾸준히 학습하고 있습니다.
          </CardContent>
        </Card>

        <TooltipProvider>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold">languages</div>

              <div className="flex flex-wrap gap-2">
                <Skill name="JavaScript" level="strong" />
                <Skill name="TypeScript" level="strong" />
                <Skill name="Python" level="intermediate" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold">others</div>

              <div className="flex flex-wrap gap-2">
                <Skill name="Next.js" level="strong" />
                <Skill name="tailwindcss" level="strong" />
                <Skill name="PostgreSQL" level="intermediate" />
                <Skill name="docker" level="intermediate" />
                <Skill name="NestJS" level="weak" />
                <Skill name="aws" level="intermediate" />
                <Skill name="cloudflare" level="intermediate" />
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
