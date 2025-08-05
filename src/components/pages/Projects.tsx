"use client";
import { useState } from "react";
import movieMate from "@/assets/images/movieMate.png";
import aora from "@/assets/images/aora.png";
import dietTrack from "@/assets/images/dietTrack.png";
import rn from "@/assets/images/rn.png";
import mediaApp from "@/assets/images/media-app.png";
import posApp from "@/assets/images/pos-app.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Mobile App",
    year: "2025",
    title: "MovieMate",
    results: [
      {
        title:
          "Designed smooth and responsive UI with React Native, Expo, and TailwindCSS.",
      },
      {
        title:
          "Built trending system using Appwrite to track and display popular movies.",
      },
      {
        title:
          "Integrated TMDB API to enable real-time movie search and dynamic content.",
      },
    ],
    link: "https://github.com/edadural/rn_movie_app",
    image: movieMate,
  },
  {
    company: "Mobile App",
    year: "2025",
    title: "Aora",
    results: [
      {
        title:
          "Developed using React Native, JavaScript, Appwrite, and NativeWind for a mobile-first video platform.",
      },
      {
        title: "Built real-time video sharing and dynamic feed system.",
      },
      {
        title:
          "Enhanced user experience with animated transitions via Animatable.",
      },
    ],
    link: "https://github.com/edadural/react_native_course",
    image: aora,
  },
  {
    company: "Web App",
    year: "2024",
    title: "DietTrack",
    results: [
      {
        title:
          "Built using React, Node.js, and JavaScript with full CRUD functionality for meal tracking.",
      },
      {
        title:
          "Created admin dashboards and calendar-based appointment management.",
      },
      {
        title:
          "Implemented responsive web design with modern CSS and component architecture.",
      },
    ],
    link: "https://github.com/edadural/DietTrack",
    image: dietTrack,
  },
  {
    company: "Mobile App",
    year: "2024",
    title: "RN",
    results: [
      {
        title:
          "Developed multiple React Native apps including a number guessing game, authentication token manager, and restaurant menu display.",
      },
      {
        title:
          "Utilized JavaScript, Expo, and NativeWind for interactive mobile UI design.",
      },
      {
        title:
          "Practiced secure login handling, navigation flow, and dynamic list rendering.",
      },
    ],
    link: "https://github.com/edadural/rn",
    image: rn,
  },
  {
    company: "Web App",
    year: "2023",
    title: "Media App",
    results: [
      {
        title:
          "Developed with React, JavaScript, and Appwrite for real-time post and profile management.",
      },
      {
        title: "Enabled user login, image uploads, and saved posts feature.",
      },
      {
        title:
          "Designed dark mode layout with responsive, accessible components.",
      },
    ],
    link: "https://github.com/edadural/media-app",
    liveLink: "https://media-app-swart.vercel.app/",
    image: mediaApp,
  },
  {
    company: "Web App",
    year: "2023",
    title: "POS App",
    results: [
      {
        title:
          "Developed using the MERN stack: MongoDB, Express.js, React, and Node.js.",
      },
      {
        title:
          "Created a functional POS interface with cart, billing, and analytics screens.",
      },
      {
        title:
          "Optimized for desktop use with responsive UI and modular design.",
      },
    ],
    link: "https://github.com/edadural/pos-application",
    liveLink: "https://edadural-pos-app.onrender.com/",
    image: posApp,
  },
];
function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="pb-16 lg:py-24" id="projects">
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
                    src={project.image}
                    alt={project.title}
                    className="transition-transform duration-500 hover:scale-105 mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none cursor-pointer"
                    onClick={() => setModalImage(project.image.src)}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/10 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Full screen"
            className="max-w-5xl max-h-[90vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
