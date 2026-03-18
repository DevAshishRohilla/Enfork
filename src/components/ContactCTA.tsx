import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import App from "@/App";
import AppButton from "@/components/common/AppButton";

const ContactCTA = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl p-12 lg:p-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Driving Growth Through Strategic Collaboration
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Engage with our leadership team to explore partnership opportunities across our diversified industry ecosystem/network.
            </p>
              <Link to="/contact-us">
                <AppButton label="Get In Touch" isBlack={true} />
              </Link>
          </div>

          <div className="relative h-96">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ transform: 'rotate(2deg)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=60"
                alt="Business collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
