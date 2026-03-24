import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import IndustryCard from "../components/common/IndustryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const industries = [
  {
    title: "Healthcare",
    description:
      "Advanced healthcare solutions designed to enhance patient outcomes, optimize operations, and accelerate digital transformation.",
    image: "./Core industries section/7.webp",
    backContent: {
      title: "Healthcare",
      points: [
        "Patient care management solutions",
        "Healthcare IT and system integration",
        "Compliance and regulatory support",
        "Operational efficiency optimization",
      ],
    },
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies that strengthen brand visibility, generate qualified leads, and deliver measurable results.",
    image: "./Core industries section/3.webp",

    backContent: {
      title: "Digital Marketing",
      points: [
        "Brand strategy and positioning",
        "Social media marketing",
        "Search engine optimization (SEO)",
        "Paid advertising and performance analytics",
      ],
    },
  },
  {
    title: "Media & Entertainment",
    description:
      "Strategic creativity and digital innovation to elevate audience engagement and drive sustainable growth.",
    image: "./Core industries section/2.webp",
    backContent: {
      title: "Media & Entertainment",
      points: [
        "Event planning and management",
        "Party planning and execution",
        "Artist and talent coordination",
        "Event promotion and audience engagement",
      ],
    },
  },
  {
    title: "Networking",
    description:
      "Secure and scalable infrastructure enabling seamless connectivity, high performance, and long-term reliability.",
    image: "./Core industries section/5.webp",
    backContent: {
      title: "Networking",
      points: [
        "Strategic partnership development",
        "Corporate relationship building",
        "Industry collaboration opportunities",
        "Investor and stakeholder connections",
      ],
    },
  },
];

const CoreIndustries = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className=" text-foreground mb-4">Core Industries</h1>
          <p className="text-p text-muted-foreground max-w-2xl mx-auto"> Delivering Excellence Across Industries Through Tailored, Innovative Solutions</p>
        </motion.div>

        {/* ===== Industry Cards Grid ===== */}
        <Swiper
        
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
   
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <IndustryCard industry={industry} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CoreIndustries;
