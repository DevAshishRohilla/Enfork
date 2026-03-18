import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { motion } from "framer-motion";
import AllVentures from "@/components/AllVentures";

const Ventures = () => {
  return (
    <section
      id="ventures"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen">
      
            <div className="relative overflow-hidden section-container rounded-3xl mt-6">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-blend-darken"
                style={{
                  backgroundImage:
                    "url('./brd.webp')",
                }}
              >
                <div className="absolute inset-0 bg-black/80" />
              </div>
      
              {/* Gradient Overlay at Bottom */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/30 via-purple-200/20 to-transparent" />
       */}
              {/* Content */}
              <div className="relative flex flex-col gap-12 justify-between p-6 md:p-12">
                {/* Breadcrumb */}
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
                      <BreadcrumbPage className="text-white">Ventures</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
      
                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                  Our Ventures
                </h1>
              </div>
            </div>

      <AllVentures/>
      
    </section>
  );
};

export default Ventures;
