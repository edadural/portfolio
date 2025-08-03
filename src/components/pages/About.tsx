import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import AppwriteIcon from "@/assets/icons/appwrite.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ExpoIcon from "@/assets/icons/expo.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import NestjsIcon from "@/assets/icons/nestjs.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import PostgresIcon from "@/assets/icons/postgresql.svg";
import ReactNativeIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import VscodeIcon from "@/assets/icons/vscode.svg";
import { CardHeader } from "../CardHeader";
import { ToolboxItems } from "../ToolboxItems";

const toolboxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "React Native", iconType: ReactNativeIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "NestJS", iconType: NestjsIcon },
  { title: "Appwrite", iconType: AppwriteIcon },
  { title: "MongoDB", iconType: MongoIcon },
  { title: "PostgreSQL", iconType: PostgresIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Expo", iconType: ExpoIcon },
  { title: "Figma", iconType: FigmaIcon },
  { title: "VS Code", iconType: VscodeIcon },
];

export default function About() {
  return (
    <div className="py-20" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Behind My Digital Work"
          description="Get to know my journey, what drives my work, and how I build impactful digital experiences."
        />

        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="Skills"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />

            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:80s] hover:[animation-play-state:paused]"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
