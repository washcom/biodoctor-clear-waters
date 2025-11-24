import { Shield, Award, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "Fully licensed professionals with industry certifications"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium materials and workmanship guaranteed"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced engineers and installation specialists"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Biodoctor Solutions Ltd
          </h2>
          <p className="text-lg text-muted-foreground">
            We are a leading provider of innovative sewer and sanitation solutions, committed to delivering 
            environmentally sustainable and cost-effective systems for homes, businesses, and institutions across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-secondary shadow-soft hover:shadow-medium transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
