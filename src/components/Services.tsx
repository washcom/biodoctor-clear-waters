import React from "react";
import { Droplet, PenTool, Wrench, Home, Users, Building, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: "Biodigester Installation",
      description: "Eco-friendly biodigester systems that convert waste into clean water and biogas. Perfect for areas without sewer connections.",
      features: [
        "Residential & commercial installations",
        "Low maintenance systems",
        "Environmentally sustainable",
        "Cost-effective solution"
      ]
    },
    {
      icon: PenTool,
      title: "Sewer System Design",
      description: "Custom sewer system design and engineering for new constructions and property developments.",
      features: [
        "Professional engineering plans",
        "Compliance with building codes",
        "Optimal drainage solutions",
        "Site assessment included"
      ]
    },
    {
      icon: Wrench,
      title: "Grease Trap Systems",
      description: "Commercial grease trap installation and maintenance for restaurants, hotels, and food processing facilities.",
      features: [
        "Health code compliant",
        "Regular maintenance programs",
        "Prevents pipe blockages",
        "Extends plumbing lifespan"
      ]
    }
  ];

  const products = [
    {
      icon: Home,
      name: "Bs3 Conventional",
      capacity: "1-40 users - 1.02M3",
      description: "Can be used by 1 – 5 families of about 6 – 7 people in a block. Ideal for domestic houses, farmhouses, workshops, office block etc. The system is 1.1M in diameter."
    },
    {
      icon: Users,
      name: "Bs3 Average",
      capacity: "1-80 users - 2.33M3",
      description: "Can handle up to a population of 80 people. Ideal for blocks, flats, apartments, hospitals, horticultural farms, restaurants etc. The system is 1.5M in diameter."
    },
    {
      icon: Building,
      name: "Bs3 Moderate",
      capacity: "1-150 users - 4.14M3",
      description: "Can handle waste of up to a population of 150 people (200 traffic). Ideal for schools, factories, hotels, social halls, etc. The system is 2M in diameter."
    },
    {
      icon: Layers,
      name: "Bs3 Populous",
      capacity: "1-400 users - 9.33M3",
      description: "Can handle up to 400 people (600 traffic). Ideal for shopping malls, factories, hotels, hospitals, schools, etc."
    },
    {
      icon: Users,
      name: "Bs3 Mega",
      capacity: "1-600 users - 16.58M3",
      description: "Can handle up to 600 people (800 traffic). Ideal for shopping malls, factories, hotels, hospitals, schools, etc."
    }
  ];

  // Motion Variants
  const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.6 } }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sewer, sanitation, and biodigester solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="shadow-md border-none group hover:shadow-xl">
                <CardHeader className="text-center">
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-primary mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6">BIODOCTOR SEPTIC SANITATION SYSTEM (BS3)</h3>
          <p className="text-base text-muted-foreground mb-8">
            BIODOCTOR SEPTIC SANITATION SYSTEM (BS3) is a complete onsite sewer system, handling both grey and black water. It achieves this through Biodegradation and Displacement Principles. Many countries in Europe, Latin America and India utilize this technology, which treats wastewater in an environmentally friendly manner for irrigation or safe discharge. The system is versatile and works in all types of terrain.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="border border-gray-200 shadow-md hover:shadow-xl">
                  <CardHeader className="text-center">
                    <motion.div
                      className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-primary mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <product.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{product.capacity}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
