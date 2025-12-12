import React from "react";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/noblegate.jpeg";
import project4 from "@/assets/kile.jpeg";
import project5 from "@/assets/kiserian.jpeg";
import project6 from "@/assets/kmtcBungoma.jpeg";
import project7 from "@/assets/mercy.jpeg";
import project8 from "@/assets/mgaskibra.jpeg";
import project9 from "@/assets/rockyresort.jpeg";
import project10 from "@/assets/saintjohnsmalaa.jpeg";

const Portfolio = () => {
  const projects = [
    { image: project1, title: "Residential Biodigester Installation", location: "Karen, Nairobi", description: "Complete biodigester system for 5-bedroom home" },
    { image: project2, title: "Commercial Sewer Design", location: "Westlands, Nairobi", description: "Comprehensive sewer system for office complex" },
    { image: project3, title: "Noblegate", location: "Nairobi", description: "High-capacity grease trap installation" },
    { image: project4, title: "Kileleshwa", location: "Ngong, Nairobi", description: "Eco-friendly septic system for 500 students" },
    { image: project5,title: "Hotel Sanitation Upgrade", location: "Mombasa", description: "Modern wastewater management system for hotel" },
    { image: project6,title: "Kmtc Bungoma", location: "Bungoma", description: "Large-scale sewer network for factory" },
    { image: project7,title: "Saint mercy", location: "Kericho", description: "Biodigester system serving local community" },
    { image: project8,title: "M-GAS kibra", location: "Nairobi", description: "Safe and compliant waste management system" },
    { image: project9,title: "Rocky-Resort", location: "Ruiru", description: "Efficient sewer system for 200 residents" },
    { image: project10,title: "saint johns malaa", location: "Nanyuki", description: "Biodigester system for farm waste" },
    { image: project2,title: "Shopping Mall Sanitation", location: "Thika", description: "High-capacity wastewater solution" },
    { image: project1,title: "Office Complex Grease Trap", location: "Kitengela", description: "Preventive grease trap installation" },
  ];

  // Motion variants for cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 50, scale: 0.95 },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            View our portfolio of successfully completed installations and designs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group rounded-lg shadow-soft overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden aspect-[4/3] rounded-t-lg"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6 bg-card rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{project.location}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
