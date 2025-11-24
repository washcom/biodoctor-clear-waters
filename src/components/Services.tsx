import { Droplet, PenTool, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sewer and sanitation solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in border-none"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-4">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
