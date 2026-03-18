import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CurveImageButton from "@/components/common/CurveImageButton";
const projects = [
  {
    id: 1,
    title: "Sunlife Homes",
    category: ["Branding", "Marketing"],
    image: "/CaseStudy images/Subtract-1.png",
    logo: "/images/sunlife-logo.png",
    description:
      "Crafted a sleek and modern logo for Sunlife Homes that reflects their commitment to excellence in the real estate housing industry.",
    metrics: [
      { label: "Traffic", value: "+65%" },
      { label: "Engagement", value: "+80%" },
    ],
  },
  {
    id: 2,
    title: "HRT College",
    category: ["Facebook Ads", "Google Ads"],
    image: "/CaseStudy images/Subtract.png",
    logo: "/images/hrt-logo.png",
    description:
      "We launched targeted Google and Facebook Ads to boost enrollment and brand visibility for HRT College.",
    metrics: [
      { label: "Traffic", value: "+25%" },
      { label: "Inquiries", value: "+40%" },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 text-white">
      <div className="section-container">
        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <h1 className="font-light tracking-tight">Our Projects</h1>
          <p className="text-foreground md:mt-0 max-w-xs leading-relaxed">
            Read how we've helped some of the biggest brands transform their
            business
          </p>
        </div>

        {/* ===== Projects Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] sm:h-[280px] lg:h-[300px] object-cover rounded-2xl transition-transform duration-500 "
                />

                <div className=" absolute bottom-0 right-0">
                  <CurveImageButton />
                </div>
              </div>

              {/* Project Details */}
              <div className="mt-4 sm:mt-5">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 sm:px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className=" mb-2">{project.title}</h3>

                {/* Description */}
                <p className=" leading-relaxed mb-4 max-w-lg">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-0">
                  <div className="flex items-center gap-4 sm:gap-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <p className="text-base sm:text-lg font-semibold">
                          {metric.value}
                        </p>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-p2 font-light hover:text-white flex items-center gap-1 transition-all"
                  >
                    Read More{" "}
                    <img
                      src="./Enfork icons/arrrow right.png"
                      alt="arrow-right"
                      className="w-[14px] sm:w-[16px] ml-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
