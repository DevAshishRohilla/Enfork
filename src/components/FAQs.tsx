import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import AppButton from "@/components/common/AppButton";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who are we?",
    answer:
      "We are a multi-industry ecosystem operating across healthcare, media and entertainment, digital marketing, and business networking, creating strategic connections that drive innovation, collaboration, and sustainable business growth.",
  },
  {
    question: "How does the ecosystem work?",
    answer:
      "Our ecosystem integrates diverse industries into one collaborative network. By combining expertise, resources, and partnerships, we create cross-industry opportunities that accelerate growth, innovation, and long-term value.",
  },
  {
    question: "What industries do you operate in?",
    answer:
      "We operate in healthcare, media and entertainment, digital marketing, and business networking, delivering specialized solutions while enabling strong inter-industry collaboration.",
  },
  {
    question: "How can you partner with us?",
    answer:
      "Businesses can engage with us through strategic partnerships, service collaborations, investment opportunities, or networking initiatives designed to foster long-term success and scalable growth.",
  },
];

const QuestionIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle cx="20" cy="20" r="20" fill="#404040" />
    <text
      x="20"
      y="28"
      textAnchor="middle"
      fill="white"
      fontSize="24"
      fontWeight="bold"
    >
      ?
    </text>
  </svg>
);

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="section-container">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <h1 className="font-light leading-tight text-foreground tracking-wide mb-6 sm:mb-8 lg:mb-12">
                FAQs
              </h1>

              <p className="text-foreground max-w-md">
                Find quick answers about our brands, services, and how we can
                help you succeed. Clear, simple, and always at your fingertips.
              </p>

              <div className="space-y-2">
                <p className="text-foreground font-light">
                  Still Have Questions?
                  <br />
                  We're here to assist you — with clarity, confidence, and care.
                </p>
              </div>

              <AppButton label="Contact us" isBlack={true} icon={true} />
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-3 sm:space-y-4 mt-0 ">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-700 pb-3 sm:pb-4"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-start gap-3 sm:gap-4 text-left group"
                  >
                    <img
                      src="./Enfork icons/icons8-question-100.png"
                      alt="question"
                      className="w-[32px] sm:w-[36px] lg:w-[40px] flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h6 className="text-foreground font-normal group-hover:text-gray-300 transition-colors duration-200">
                        {item.question}
                      </h6>
                      {openIndex === index && (
                        <p className=" text-foreground mt-3 sm:mt-4 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                          {item.answer}
                        </p>
                      )}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 mt-1 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 sm:mt-0">
          {/* ====== CTA Card ====== */}
          <div className=" sm:hidden w-full md:w-1/3 flex justify-center md:mt-0 h-[250px] sm:h-[220px]  md:h-[300px] lg:h-[20] z-[5]">
            <motion.img
              src="/CTA image.png"
              alt="Man making call gesture"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" "
            />
          </div>
          <div
            style={{ backgroundImage: "url('./talk oppurnity bg.png')" }}
            className="relative shadow-2xl bg-center  rounded-2xl flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-8 md:px-16 py-8 md:py-0  sm:min-h-[300px] md:h-[300px]  sm:mt-40 md:mt-48 lg:mt-64 "
          >
            {/* Backgroudn images */}
             <div className=" absolute -top-64 -lg:top-64 -left-10 -lg:left-32 w-[150px] lg:w-[350px]">
            <motion.img
              src="./Enfork page bg elemts/FAQ bg ui.png"
              alt="background-images"
              className="w-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div> 
            <div className="absolute -bottom-24 lg:top-40 -right-20 lg:-right-40 w-[150px] lg:w-[350px]">
            <motion.img
              src="./Enfork page bg elemts/bg object 9.png"
              alt="background-images"
              className="w-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
            {/* ===== Left Content ===== */}
            <div className=" relative z-10 w-full md:w-2/3 text-foreground">
              <h3 className="text-h3">Let’s Build Something That Performs.</h3>
              <p className="text-xs sm:text-sm md:text-base max-w-[800px] leading-relaxed mt-2 mb-4">
                Partner with Enfork Group to create marketing strategies built for measurable growth and real results.
              </p>

              <Link to="/contact-us">
                <AppButton label="Request a Strategy Call" isBlack={true} />
              </Link>
            </div>

            {/* ===== Right Side: Man Image ===== */}
            <div className="hidden md:block relative w-full md:w-1/3 flex justify-center md:justify-end -mt-16 md:mt-0 h-[180px] sm:h-[220px]  md:h-[300px] lg:h-[20] z-[5]">
              <motion.img
                src="/faq.webp"
                alt="Man making call gesture"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute object-cover bottom-0 right-0 w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] h-auto z-20 drop-shadow-2xl  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
