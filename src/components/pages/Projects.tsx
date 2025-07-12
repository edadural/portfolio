import img1 from "@/assets/images/ai-startup-landing-page.png";
import img2 from "@/assets/images/dark-saas-landing-page.png";
import img3 from "@/assets/images/light-saas-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Company 1",
    year: "2023",
    title: "Project 1",
    results: [
      {
        title: "Result 1",
      },
      {
        title: "Result 2",
      },
      {
        title: "Result 3",
      },
    ],
    link: "#",
    image: img1,
  },
  {
    company: "Company 2",
    year: "2023",
    title: "Project 2",
    results: [
      {
        title: "Result 1",
      },
      {
        title: "Result 2",
      },
      {
        title: "Result 3",
      },
    ],
    link: "#",
    image: img2,
  },
  {
    company: "Company 3",
    year: "2023",
    title: "Project 3",
    results: [
      {
        title: "Result 1",
      },
      {
        title: "Result 2",
      },
      {
        title: "Result 3",
      },
    ],
    link: "#",
    image: img3,
  },
];
function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-3xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center mt-8 gap-2">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-5 ml-2" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
