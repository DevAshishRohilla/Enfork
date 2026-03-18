import React from "react";
import "./curveImageButoon.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function CurveImageButton() {
  return (
    <div className="curve-image-button bg-transparent">
      <div className="top-curve bg-black"></div>
      <div className="curve-container flex justify-center items-center bg-black">
        <Link
          to="/blogs"
          className="  w-9 h-9  flex items-center justify-center 
             rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
        >
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </Link>
      </div>
      <div className="bottom-curve bg-black"></div>
    </div>
  );
}

export default CurveImageButton;
