import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Hero Background without blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center text-white px-4">
        {/* Optional: subtle text background for readability */}
        <div className="inline-block bg-black/40 px-6 py-4 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-poppins"
          >
            Your Ideal Sewer Solutions Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-inter"
          >
            Professional biodigester installation, sewer system design, and sanitation solutions for residential and commercial properties
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              variant="default"
              onClick={scrollToContact}
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="default"
              onClick={scrollToServices}
              className="text-lg px-8 py-4 bg-white text-primary rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Our Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
