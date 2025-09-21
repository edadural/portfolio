"use client";
import { useState } from "react";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "@/lib/data";

function Projects() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    projectIndex: number | null;
    imageIndex: number | null;
  }>({
    isOpen: false,
    projectIndex: null,
    imageIndex: null,
  });

  const openModal = (projIndex: number, imgIndex: number) => {
    setModalState({
      isOpen: true,
      projectIndex: projIndex,
      imageIndex: imgIndex,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      projectIndex: null,
      imageIndex: null,
    });
  };

  const nextImage = () => {
    setModalState((prevState) => {
      if (prevState.projectIndex === null || prevState.imageIndex === null) {
        return prevState;
      }

      const currentProjectImages =
        portfolioProjects[prevState.projectIndex].images;
      const nextImgIndex =
        (prevState.imageIndex + 1) % currentProjectImages.length;

      return {
        ...prevState,
        imageIndex: nextImgIndex,
      };
    });
  };

  const prevImage = () => {
    setModalState((prevState) => {
      if (prevState.projectIndex === null || prevState.imageIndex === null) {
        return prevState;
      }

      const currentProjectImages =
        portfolioProjects[prevState.projectIndex].images;
      const prevImgIndex =
        (prevState.imageIndex - 1 + currentProjectImages.length) %
        currentProjectImages.length;

      return {
        ...prevState,
        imageIndex: prevImgIndex,
      };
    });
  };

  return (
    <section className="pb-16 lg:py-24 sm:pt-10" id="projects">
      <div id="projects-observe-anchor" className="h-[1px] -mt-32"></div>
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
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 gap-12">
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
                        <CheckIcon className="size-4 md:size-5 shrink-0 align-middle mt-0.5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition duration-300 hover:bg-white/70"
                    >
                      <span>Github Repo</span>
                      <ArrowUpRightIcon className="size-5 ml-2" />
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-white/15 border-2 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition duration-300 hover:bg-white/5"
                      >
                        <span>Live Site</span>
                        <ArrowUpRightIcon className="size-5 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    className="transition-transform duration-500 hover:scale-105 mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none cursor-pointer"
                    onClick={() => openModal(projectIndex, 0)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {modalState.isOpen &&
        modalState.projectIndex !== null &&
        modalState.imageIndex !== null && (
          <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={
                    portfolioProjects[modalState.projectIndex].images[
                      modalState.imageIndex
                    ].src
                  }
                  alt={
                    portfolioProjects[modalState.projectIndex].title +
                    " " +
                    (modalState.imageIndex + 1)
                  }
                  className="max-h-[90vh] max-w-full rounded-xl shadow-lg object-contain"
                />
              </div>
              {portfolioProjects[modalState.projectIndex].images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white rounded-full bg-black/50 hover:bg-black/70 transition"
                    aria-label="Önceki Resim"
                  >
                    <ArrowRightIcon className="rotate-180 size-10 bg-white/50 rounded-full" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white rounded-full bg-black/50 hover:bg-black/70 transition"
                    aria-label="Sonraki Resim"
                  >
                    <ArrowRightIcon className="size-10 bg-white/50 rounded-full" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
    </section>
  );
}

export default Projects;
