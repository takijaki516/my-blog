import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="space-y-6 text-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground md:text-6xl">
            Not Found
          </h1>
        </div>

        <div>
          <Button
            asChild
            variant="ghost"
            className="group gap-2 text-lg text-primary"
          >
            <Link href="/">
              <Home className="h-5 w-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
