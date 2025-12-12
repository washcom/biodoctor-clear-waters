import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shield, Award, Users, Target, Eye, ScrollText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const About = () => {
  const mainCards = [
    {
      icon: Target,
      title: "Who We Are",
      description:
        "Biodoctor Solutions Ltd specializes in BIO-DIGESTER installation and onsite wastewater systems using advanced anaerobic technology. With over ten years of experience, we deliver sustainable and affordable sanitation solutions across Kenya.",
      iconBg: "bg-gradient-to-tr from-blue-600 to-blue-400"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To lead in waste management by providing environmentally friendly, efficient, and cost-effective wastewater handling technologies.",
      iconBg: "bg-gradient-to-tr from-purple-600 to-purple-400"
    },
    {
      icon: ScrollText,
      title: "Our Mission",
      description:
        "To build long-term relationships based on integrity, value, professionalism, and customer satisfaction through high-quality wastewater management solutions delivered by qualified experts.",
      iconBg: "bg-gradient-to-tr from-pink-600 to-pink-400"
    },
    {
      icon: Shield,
      title: "Our Policy",
      description:
        "We follow flexible processes that adapt to each client’s needs while delivering efficient, reliable, and trusted sanitation solutions.",
      iconBg: "bg-gradient-to-tr from-green-600 to-green-400"
    }
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "Fully compliant and certified to install advanced BIO-DIGESTER systems.",
      iconBg: "bg-primary"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Long-lasting, eco-friendly, and professionally engineered systems.",
      iconBg: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled engineers and technicians with 10+ years of experience.",
      iconBg: "bg-teal-500"
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // mobile default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Biodoctor Solutions Ltd
          </h2>
          <p className="text-lg text-muted-foreground">
            Providing sustainable, reliable, and efficient wastewater solutions through innovation,
            professionalism, and over a decade of experience.
          </p>
        </div>

        {/* MAIN 4 CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {mainCards.map((item, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full mb-4 text-white ${item.iconBg} shadow-lg`}
                >
                  <item.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* HIGHLIGHT SLIDER */}
        <div className="mt-12">
          <Slider {...sliderSettings}>
            {highlights.map((item, index) => (
              <div key={index} className="px-4">
                <Card className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div
                      className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full mb-4 text-white ${item.iconBg} shadow-lg`}
                    >
                      <item.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default About;
