import React from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
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
    { image: project1, title: "Residential Biodigester Installation", location: "Karen, Nairobi", description: "Complete biodigester system for 5-bedroom home", verified: true },
    { image: project2, title: "Commercial Sewer Design", location: "Westlands, Nairobi", description: "Comprehensive sewer system for office complex", verified: true },
    { image: project3, title: "Noblegate", location: "Nairobi", description: "High-capacity grease trap installation", verified: true },
    { image: project4, title: "Kileleshwa", location: "Ngong, Nairobi", description: "Eco-friendly septic system for 500 students", verified: true },
    { image: project5, title: "Hotel Sanitation Upgrade", location: "Mombasa", description: "Modern wastewater management system for hotel", verified: true },
    { image: project6, title: "KMTC Bungoma", location: "Bungoma", description: "Large-scale sewer network for factory", verified: true },
    { image: project7, title: "Saint Mercy", location: "Kericho", description: "Biodigester system serving local community", verified: true },
    { image: project8, title: "M-GAS Kibra", location: "Nairobi", description: "Safe and compliant waste management system", verified: true },
    { image: project9, title: "Rocky Resort", location: "Ruiru", description: "Efficient sewer system for 200 residents", verified: true },
    { image: project10, title: "Saint Johns Malaa", location: "Nanyuki", description: "Biodigester system for farm waste", verified: true },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of sustainable sanitation and wastewater solutions delivered across Kenya
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                {/* Location */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold leading-snug tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  {/* Star Rating - Always 5 Stars */}
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mt-2">
                    {project.description}
                  </p>
                </div>

                {/* Verified Badge at Footer Right */}
                {project.verified && (
                  <div className="mt-4 flex justify-end">
                    <span className="flex items-center gap-1 text-primary bg-primary/10 px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                      <BadgeCheck className="w-4 h-4" />
                      Verified
                    </span>
                  </div>
                )}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
