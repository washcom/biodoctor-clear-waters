import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Biodoctor Solutions Ltd</h3>
            <p className="text-sm opacity-90 mb-4">
              Your trusted partner for professional sewer and sanitation solutions. 
              We deliver quality, reliability, and innovation in every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4 text-primary-foreground" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+254 722 983 598</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@biodoctor.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {currentYear} Biodoctor Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
