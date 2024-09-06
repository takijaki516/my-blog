import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function Profile() {
  return (
    <section className="relative z-10 w-full bg-background pb-10">
      <div className="container grid gap-20 md:grid-cols-2">
        <Card className="">
          <CardHeader>Hello</CardHeader>
          <CardContent>Content</CardContent>
        </Card>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">languages</div>

            <div className="flex flex-wrap gap-2">
              <Badge
                className="flex h-fit items-center gap-1 text-sm"
                variant={"secondary"}
              >
                <img
                  src="/skill-logo/javascript-logo.svg"
                  className="h-5 w-5"
                />
                JavaScript
              </Badge>

              <Badge
                className="flex h-fit items-center gap-1 text-sm"
                variant={"secondary"}
              >
                <img
                  src="/skill-logo/typescript-logo.svg"
                  className="h-5 w-5"
                />
                TypeScript
              </Badge>

              <Badge
                className="flex h-fit items-center gap-1 text-sm"
                variant={"secondary"}
              >
                <img src="/skill-logo/python-logo.svg" className="h-5 w-5" />
                Python
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">frameworks</div>

            <div className="flex gap-2">
              <Badge
                className="flex h-fit items-center gap-1 text-sm"
                variant={"secondary"}
              >
                <img src="/skill-logo/next-logo.svg" className="h-5 w-5" />
                Next.js
              </Badge>

              <Badge
                className="flex h-fit items-center gap-1 text-sm"
                variant={"secondary"}
              >
                <img src="/skill-logo/tailwind-logo.svg" className="h-5 w-5" />
                tailwindcss
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
