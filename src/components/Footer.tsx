import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    try {
      if (import.meta.env.DEV) {
        const { error } = await supabase
          .from("newsletter_subscriptions")
          .insert([{ email }]);

        if (error) {
          console.error("Supabase error:", error);
          setStatus("error");
        } else {
          setStatus("success");
          setEmail("");
        }
      } else {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setStatus("success");
          setEmail("");
        } else {
          console.error("Newsletter error:", await response.json());
          setStatus("error");
        }
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setStatus("error");
    }
  };

  return (
    <footer
      className="relative text-white border-t border-white/10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./footer background.png')" }}
    >
      <div className="section-container">
        <div className="py-24 md:py-12 lg:py-16 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          {/* ====== Left Column: Brand & Subscribe ====== */}
          <div className="w-full lg:w-auto">
            <img
              src="./logo bg 3.png"
              alt="logo"
              className="w-[140px] sm:w-[170px] lg:w-[200px]"
            />

            <h6 className="text-foreground w-full max-w-[280px] sm:max-w-xs lg:w-80 mt-6 lg:mt-10 leading-tight">
              Get the latest inspiration & insights
            </h6>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center py-[0.5px] pr-[0.5px] w-full max-w-md rounded-full overflow-hidden bg-white shadow-sm mt-6 lg:mt-8"
            >
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "submitting"}
                className="flex-1 px-3 sm:px-5 py-2 text-[0.65rem] sm:text-xs font-light text-gray-600 placeholder-gray-400 bg-transparent outline-none w-1/2"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-4 sm:px-6 py-2 bg-[#757575] text-white font-semibold
        text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem]
 rounded-full hover:bg-[#666666] transition-all duration-300 whitespace-nowrap disabled:opacity-60"
              >
                {status === "submitting" ? "..." : "Subscribe"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-green-400 text-sm mt-2">
                Subscribed successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">
                Something went wrong. Please try again.
              </p>
            )}

          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
            {/* ====== Middle Column: Quick Links ====== */}
            <div className="mt-0 lg:mt-6">
              <h4
                className="relative inline-block text-p3 font-semibold text-foreground pb-1
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-1/2 after:h-[2px] after:bg-white/35"
              >
                Quick Link
              </h4>
              <ul className="space-y-2 text-foreground text-p3 my-4">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-all font-light"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="about-us"
                    className="hover:text-white transition-all font-light"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="ventures"
                    className="hover:text-white transition-all font-light"
                  >
                    Our Ventures
                  </a>
                </li>
                <li>
                  <a
                    href="contact-us"
                    className="hover:text-white transition-all font-light"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* ====== Right Column: Get in Touch ====== */}
            <div>
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 lg:p-6 space-y-3 lg:space-y-4 max-w-sm">
                <h4
                  className="relative inline-block text-p3 font-semibold text-foreground pb-1
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:w-1/2 after:h-[2px] after:bg-white/35"
                >
                  Get in Touch
                </h4>
                <div className="flex items-center gap-3 text-foreground text-xs sm:text-sm">
                  <img
                    className="w-[18px] sm:w-[20px] flex-shrink-0"
                    src="./footer icons/Icon_19_.svg"
                    alt="mail"
                  />
                  <span className="break-all">Info@enforkgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-foreground text-xs sm:text-sm">
                  <img
                    className="w-[18px] sm:w-[20px] flex-shrink-0"
                    src="./footer icons/Vector.svg"
                    alt="location"
                  />
                  <span>13 Nerang st, Southport QLD 4215</span>
                </div>
                <div className="flex items-center gap-3 text-foreground text-xs sm:text-sm">
                  <img
                    className="w-[18px] sm:w-[20px] flex-shrink-0"
                    src="./footer icons/Group 1000004278.svg"
                    alt="phone"
                  />
                  <a href="tel:+1800363675">1800 ENFORK</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Bottom Row: Social Media ====== */}
        <div className="flex justify-center md:justify-between pb-6">
          <p className="text-gray-500 text-xs mt-6 lg:mt-8">
            © 2025 Enfork. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="text-p text-foreground">Follow us on.</span>
            <a href="#" className="hover:text-white transition-all">
              <img
                className="w-[14px] sm:w-[16px]"
                src="./footer icons/Group 1762097.svg"
                alt="Instagram"
              />
            </a>

            <a href="#" className="hover:text-white transition-all">
              <img
                className="w-[14px] sm:w-[16px]"
                src="./footer icons/Group 1762099.svg"
                alt="Facebook"
              />
            </a>
            <a href="#" className="hover:text-white transition-all">
              <img
                className="w-[14px] sm:w-[16px]"
                src="./footer icons/Group 1762098.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
