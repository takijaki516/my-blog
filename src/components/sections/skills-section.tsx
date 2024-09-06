import { Icon, SkillCard } from "../skill-card";
import { JavaScriptIcon } from "../skill-logos/javascript-logo";
import { PythonLogo } from "../skill-logos/python-logo";
import { TypeScriptIcon } from "../skill-logos/typescript-logo";

export function SkillSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h2 className="text-4xl">Skills</h2>

      <div className="grid w-full grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative flex aspect-square w-full flex-col items-center justify-center border border-black/[0.2] dark:border-white/[0.2]"
          >
            <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

            <SkillCard text={skill.title} icon={skill.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    title: "JavaScript",
    link: "https://react.dev/",
    icon: <JavaScriptIcon />,
  },
  {
    title: "TypeScript",
    link: "https://nextjs.org",
    icon: <TypeScriptIcon />,
  },
  {
    title: "Python",
    link: "https://tailwindcss.com",
    icon: <PythonLogo />,
  },
];
