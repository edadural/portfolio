import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "../TechIcon";
import { CardHeader } from "../CardHeader";
import { ToolboxItems } from "../ToolboxItems";

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Chrome", iconType: ChromIcon },
  { title: "Github", iconType: GithubIcon },
];

export default function About() {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />

            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:30s] hover:[animation-play-state:paused]"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
