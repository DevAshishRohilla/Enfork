import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const CARD_HEIGHT = 600;

const IndustryCard = ({ industry, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasBg, setHasBg] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col justify-between group relative"
      style={{ height: CARD_HEIGHT }}
    >
      <motion.div
        className="relative w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          transformStyle: "preserve-3d",
          height: CARD_HEIGHT,
        }}
      >
        {/* Front side */}
        <div
          className="backface-hidden p-6 md:p-4 rounded-2xl industry-card-height"
          onMouseEnter={() => setHasBg(false)}
          onMouseLeave={() => setHasBg(true)}
          style={{
            backfaceVisibility: "hidden",
            backgroundSize: "110%",
            background: hasBg
              ? "url('./Core industries section/card bg.png') center"
              : "#1b1b1b",
            height: CARD_HEIGHT,
            // ✅ Make front card a flex column
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Card Header */}
          <div className="flex items-start justify-between mb-2 relative">
            <h3 className="text-foreground font-light leading-snug">
              {industry.title}
            </h3>
            <button
              onClick={handleFlip}
              className="absolute right-0 w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer"
              aria-label="Flip card"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
          </div>

          {/* ✅ This div grows to fill space, pushing image to bottom */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            {/* Description */}
            <p className="text-foreground font-light leading-relaxed mb-6 mt-20">
              {industry.description}
            </p>

            {/* ✅ Image pinned to bottom with mt-auto */}
            <div
              className="relative w-full h-[200px] rounded-xl overflow-hidden"
              style={{ marginTop: "auto" }}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Back side */}
        <div
          className="absolute inset-0 backface-hidden p-6 md:p-4
                     backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.3)]
                     hover:border-white/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                     transition-all duration-300 rounded-2xl overflow-hidden bg-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundImage: "url('./Core industries section/back bg.png')",
            height: CARD_HEIGHT,
          }}
        >
          <div className="flex flex-col group relative">
            {/* Back Header */}
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-foreground font-light leading-snug pr-2">
                {industry.backContent?.title || "Learn More"}
              </h3>
              <button
                onClick={handleFlip}
                className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer"
                aria-label="Flip back"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>
            </div>

            {/* Back Content */}
            <div className="flex flex-col space-y-4">
              {industry.backContent?.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground font-light leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IndustryCard;