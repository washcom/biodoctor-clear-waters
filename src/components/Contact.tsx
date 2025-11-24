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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Request a Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@biodoctor.co.ke</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-secondary">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-soft animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
                  placeholder="+254 700 000 000"
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
              <Button type="submit" className="w-full" size="lg">
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
