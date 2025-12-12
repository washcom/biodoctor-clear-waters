import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Hero Background with Parallax & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-primary/60 backdrop-blur-sm" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in font-poppins">
          Your Ideal Sewer Solutions Partner
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-inter animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Professional biodigester installation, sewer system design, and sanitation solutions for residential and commercial properties
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Request a Quote */}
          <Button 
            size="lg" 
            variant="default"
            onClick={scrollToContact}
            className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-teal-500 hover:to-blue-600 text-white rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </Button>

          {/* Our Services */}
          <Button
            size="lg"
            variant="default"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-4 bg-white text-primary rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
