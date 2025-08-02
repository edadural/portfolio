"use client";
import React, { useEffect, useState } from "react";

const navItems = [
  { title: "Home", href: "#hero" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
];

export default function Header() {
  const [activeHref, setActiveHref] = useState("#hero");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHref(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", handleHashChange);

    // İlk render'da kontrol et
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50 pointer-events-none">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-md pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          const baseClasses =
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200";
          const activeClasses = "bg-white text-gray-900";
          const inactiveClasses =
            "text-white hover:bg-white/20 hover:text-white";

          return (
            <a
              key={item.href}
              href={item.href}
              className={`${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
