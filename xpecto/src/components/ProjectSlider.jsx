import React, { useState, useEffect } from "react";
import "./ProjectSlider.css";

const projects = [
  {
    title: "Enterprise/ Corporate",
    desc: `Xpecto® empowers enterprises with comprehensive software solutions, enabling large-scale data management, workflow optimization, and enhanced security for seamless integration, scalability, and a competitive edge.`,
    image: "/assets/flags/india.png",
  },
  {
    title: "Medium Business",
    desc: `Xpecto® supports medium-sized businesses with bespoke software solutions that seamlessly integrate existing systems, streamline operations, automate processes, and enhance data management for cost-effective scaling.`,
    image: "/assets/flags/ff4.png",
  },
];

const ProjectSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const interval = setInterval(next, 5000); // auto-slide every 5s
    return () => clearInterval(interval);     // cleanup
  }, []);

  const { title, desc, image } = projects[index];

  return (
    <section className="project-slider">
      <p className="subtitle">OUR PROJECTS</p>
      <h2 className="heading">
        We Provide Solutions To <br /> Big & Small Organizations For Work
      </h2>

      <div className="slider-full">
        <img src={image} alt={title} className="full-bg-image" />

        <div className="overlay-card">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <button className="nav-arrow left" onClick={prev}>←</button>
        <button className="nav-arrow right" onClick={next}>→</button>
      </div>
    </section>
  );
};

export default ProjectSlider;
