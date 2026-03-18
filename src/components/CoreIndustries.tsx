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
      "Delivering innovative healthcare solutions that improve patient outcomes, streamline operations, and support digital transformation across healthcare organizations.",
    image: "./Core industries section/7.webp",
    backContent: {
      title: "Healthcare",
      points: [
        "EPatient care management solutions",
        "Healthcare IT and system integration",
        "Compliance and regulatory support",
        "Operational efficiency optimization",
      ],
    },
  },
  {
    title: "Digital Marketing",
    description:
      "Providing data-driven digital marketing strategies that increase brand visibility, generate leads, and deliver measurable business growth.",
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
      "Empowering media brands with creative strategy, production expertise, and digital solutions to enhance engagement and drive growth.",
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
      "Your brand is the story people share about you when you're not in the room.",
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
          <p className="text-p text-muted-foreground max-w-2xl mx-auto"> Delivering excellence across multiple sectors with innovative solutions tailored to your needs</p>
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
