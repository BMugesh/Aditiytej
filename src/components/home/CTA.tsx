import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your <span className="text-gradient">Global Journey</span>?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors. Get personalized guidance on universities, scholarships, and career pathways.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/enquiry">
              <Button variant="hero" size="xl" className="group pulse-glow">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:info@adityatej.com" className="hover:text-accent transition-colors">
                info@adityatej.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span>WhatsApp Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
