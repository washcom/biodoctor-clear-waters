import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const mailtoLink = `mailto:logics@biodoctor.co.ke?subject=Quote Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + "\n\nPhone: " + formData.phone + "\nEmail: " + formData.email)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Quote Request Sent!",
      description: "Your email client has opened to send the request.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">
            Request a Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Get in touch with us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info + Map */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-poppins">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">0722 983 598</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">logics@biodoctor.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-muted-foreground">
                      Biashara Centre, Kasarani, Nairobi, Kenya<br />
                      P.O Box 68035-00200
                    </p>
                    <p className="font-medium mt-2">Branch Offices</p>
                    <p className="text-muted-foreground">
                      Kericho / Eldoret / Kisii / Mombasa / Nanyuki
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Biodoctor Head Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19999.999999!2d36.897!3d-1.247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11bbd1234567%3A0xabcdef123456789!2sBiashara%20Centre%2C%20Kasarani%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999"
                width="100%"
                height="300"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-6 rounded-lg bg-secondary shadow-md">
              <h4 className="font-semibold mb-2 font-poppins">Office Hours</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="0722 983 598"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-teal-500 text-white transition-all duration-300" size="lg">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
