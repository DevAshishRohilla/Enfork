import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="section-container relative z-10">

        {/* ===== Breadcrumb ===== */}
        <div className="mb-8 md:mb-12">
          <Breadcrumb>
            <BreadcrumbList className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 inline-flex">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-white/60" />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  About
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* ===== Section Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-h3 sm:text-h2 font-light text-white mb-3">
            Let’s know about us
          </h2>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
