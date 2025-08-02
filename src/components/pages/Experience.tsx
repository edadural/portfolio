import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";

const experienceList = [
  {
    company: "Açık Atölye",
    role: "Software Developer (React | Next.js | NestJS)",
    period: "08.2024 - 02.2025",
    description:
      "Worked on multiple full-stack projects, contributing to both frontend and backend development. Focused on modular and scalable code structures.",
  },
  {
    company: "Yazılım Vadisi Internship Program",
    role: "Internship",
    period: "07.2024 - 08.2024",
    description:
      "Worked as part of a team to design a form application using Figma and developed it using Angular.",
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "02.2024 - 07.2024",
    description:
      "Developed the user interface for a platform where students follow internship and job opportunities.",
  },
  {
    company: "Ottonom",
    role: "Software Development Internship",
    period: "10.2023 - 01.2024",
    description:
      "Contributed to Odoo ERP development and worked on personal projects using React, React Native, Node.js, and Firebase.",
  },
  {
    company: "Açık Atölye",
    role: "Internship",
    period: "08.2022 - 09.2022",
    description:
      "Conducted research and workshops using Django, Kubernetes, and AWS. Created a personal website and a tic-tac-toe game.",
  },
];

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          description="Learn about my past roles and contributions to various projects."
        />

        <div className="relative mt-16 border-l border-white/20 md:pl-10 sm:pl-5">
          {experienceList.map(({ company, role, period, description }, idx) => (
            <div key={idx} className="relative mb-12 sm:mb-20">
              {/* Timeline dot */}
              <div className="absolute w-2 h-2 rounded-full bg-white border-2 border-white/20 md:-left-11 md:top-4 sm:-left-6 sm:-top-7" />

              {/* Timeline date */}
              <div className="absolute w-40 text-sm text-white/50 text-right md:-left-56 md:top-3 sm:-left-10 sm:-top-9">
                {period}
              </div>

              {/* Experience card */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white">{role}</h3>
                <p className="text-sm text-white/40 font-semibold mb-2">
                  {company}
                </p>
                <p className="text-sm text-white/60">{description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
