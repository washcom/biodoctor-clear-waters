import { CheckCircle2, Clock, Leaf, DollarSign, Headphones, ThumbsUp } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "Hundreds of successful installations across Kenya"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Projects completed on schedule, every time"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Sustainable systems that protect the environment"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Quality solutions that fit your budget"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service and maintenance"
    },
    {
      icon: ThumbsUp,
      title: "Quality Guarantee",
      description: "Comprehensive warranty on all installations"
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Biodoctor Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, reliability, and innovation to deliver superior sanitation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-lg bg-background shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
