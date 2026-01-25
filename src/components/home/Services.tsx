import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  FileCheck, 
  Languages, 
  Briefcase, 
  Users, 
  Target, 
  Home,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Overseas Education",
    description: "Expert guidance for university selection, course matching, and complete admission support across 8 countries.",
    href: "/services#education",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Discover merit-based, government, and university scholarships to fund your education.",
    href: "/services#scholarship",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "End-to-end visa support including documentation, mock interviews, and filing.",
    href: "/services#visa",
    gradient: "from-teal to-teal/80",
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "IELTS, German, Japanese, and LangCert preparation with exam-focused modules.",
    href: "/services#language",
    gradient: "from-success to-success/80",
  },
  {
    icon: Briefcase,
    title: "Placement Opportunities",
    description: "Access domestic jobs and international internships aligned with your goals.",
    href: "/services#placement-opportunities",
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Users,
    title: "Soft Skill Training",
    description: "Build public speaking, corporate etiquette, and leadership skills.",
    href: "/services#soft-skills",
    gradient: "from-accent to-accent/80",
  },
  {
    icon: Target,
    title: "Placement Assistance",
    description: "Resume building, interview preparation, and strategic job search.",
    href: "/services#placement-assistance",
    gradient: "from-teal to-teal/80",
  },
  {
    icon: Home,
    title: "Post-Admission Services",
    description: "Accommodation help, registration, and local orientation support.",
    href: "/services#post-admission",
    gradient: "from-success to-success/80",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 grid-pattern-light opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-premium mb-4">
            Our Services
          </span>
          <h2 className="text-foreground mb-4">
            Complete Education & Career Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From your first consultation to settling abroad — we provide comprehensive support at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link 
                to={service.href}
                className="service-card group cursor-pointer h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Link */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-semibold">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
