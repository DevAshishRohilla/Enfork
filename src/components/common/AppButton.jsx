import React from "react";
import { Button } from "../ui/button";

const AppButton = ({
  label,
  onClick,
  className = "",
  isBlack = false,
  icon = false,
}) => {
  return (
    <>
      {isBlack ? (
        <Button
          size="lg"
          variant="outline"
          onClick={onClick}
          className={`text-p2 cursor-pointer font-semibold rounded-full bg-black text-foreground !px-7 py-2 hover:bg-white/10 transition-colors ${className}`}
        >
          {label}
          {icon && (
            <img
              className="w-[10px]"
              src="./Enfork icons/arrow up.png"
              alt="icon"
            />
          )}
        </Button>
      ) : (
        <Button
          size="lg"
          onClick={onClick}
          className={`text-p2  cursor-pointer font-semibold rounded-full text-foreground !px-7 py-2 hover:bg-white/20 ${className}`}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default AppButton;
