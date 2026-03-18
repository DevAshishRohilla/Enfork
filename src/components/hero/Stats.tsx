import React from "react";

function Stats() {
  return (
    <>
      <div className="w-2/3 flex flex-wrap justify-between md:gap-6 md:justify-end text-center">
        <div className="hidden md:block w-[2px] bg-white/20"></div>

        {/* Stat 1 */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-foreground font-semibold text-start">
            Years
            <br />
            Experience
          </p>
          <h3 className="text-3xl md:text-5xl text-white/50  font-semibold">
            10<span className="text-lg align-top">+</span>
          </h3>
        </div>

        <div className="hidden md:block w-[2px] bg-white/20"></div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-foreground font-semibold text-start">
            Industries <br /> Transformed
          </p>
          <h3 className="text-3xl md:text-5xl  text-white/50  font-semibold">
            9<span className="text-lg align-top">+</span>
          </h3>
        </div>

        <div className="hidden md:block w-[2px] bg-white/20"></div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-foreground font-semibold text-start">
            Clients <br /> Served
          </p>
          <h3 className="text-3xl md:text-5xl  text-white/50  font-semibold text-start">
            200<span className="text-lg align-top">+</span>
          </h3>
        </div>

        <div className="hidden md:block w-[2px] bg-white/20"></div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-foreground font-semibold text-start">
            Projects <br />
            Delivered{" "}
          </p>
          <h3 className="text-3xl md:text-5xl  text-white/50 font-semibold">
            237<span className="text-lg align-top">+</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Stats;
