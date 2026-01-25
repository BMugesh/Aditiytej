import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  FileCheck, 
  Languages, 
  Briefcase, 
  Users, 
  Target, 
  Home,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Overseas Education",
    description: "Expert guidance for university selection, course matching, and complete admission support across 8 countries.",
    color: "bg-primary",
    href: "/services#education",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Discover merit-based, government, and university scholarships. We help you secure financial aid.",
    color: "bg-accent",
    href: "/services#scholarship",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    description: "End-to-end visa support including documentation, mock interviews, and application filing.",
    color: "bg-teal",
    href: "/services#visa",
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "IELTS, German, Japanese, and LangCert preparation with exam-focused modules.",
    color: "bg-success",
    href: "/services#language",
  },
  {
    icon: Briefcase,
    title: "Placement Opportunities",
    description: "Access domestic jobs and international internships aligned with your career goals.",
    color: "bg-primary",
    href: "/services#placement-opportunities",
  },
  {
    icon: Users,
    title: "Soft Skill Training",
    description: "Build public speaking, corporate etiquette, and leadership skills for global careers.",
    color: "bg-accent",
    href: "/services#soft-skills",
  },
  {
    icon: Target,
    title: "Placement Assistance",
    description: "Resume building, interview preparation, and strategic job search support.",
    color: "bg-teal",
    href: "/services#placement-assistance",
  },
  {
    icon: Home,
    title: "Post-Admission Services",
    description: "Accommodation help, country registration, and local orientation for smooth transition.",
    color: "bg-success",
    href: "/services#post-admission",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Education & Career Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From your first consultation to settling abroad — we provide comprehensive support at every step of your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.href}
              className="service-card group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Explore Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
