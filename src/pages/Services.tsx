import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  CheckCircle,
  Clock,
  FileText,
  Sparkles
} from "lucide-react";

const servicesData = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Overseas Education",
    subtitle: "Complete University & Course Guidance",
    description: "Expert guidance for university selection, course matching, and complete admission support across 8 countries.",
    gradient: "from-primary to-primary/80",
    process: [
      "Student profile analysis & goal assessment",
      "Country shortlisting based on preferences",
      "University mapping & ranking analysis",
      "Course alignment with career objectives",
      "Eligibility validation & gap analysis",
      "Application roadmap & timeline planning",
    ],
    deliverables: [
      "Personalized country & university list",
      "Course recommendations with rationale",
      "Complete application checklist",
      "Deadline tracker & timeline",
    ],
    timeline: "2-4 weeks for initial consultation & shortlisting",
  },
  {
    id: "scholarship",
    icon: Award,
    title: "Scholarship Guidance",
    subtitle: "Financial Aid & Merit Awards",
    description: "Discover merit-based, government, and university scholarships. We help you secure financial aid for your education.",
    gradient: "from-accent to-accent/80",
    process: [
      "Eligibility screening for available scholarships",
      "Scholarship discovery & matching",
      "Document preparation & SOP guidance",
      "Application submission support",
      "Follow-ups & status tracking",
    ],
    deliverables: [
      "List of applicable scholarships",
      "Application requirements checklist",
      "Essay & SOP templates",
      "Submission tracking sheet",
    ],
    timeline: "Varies by scholarship deadline",
  },
  {
    id: "visa",
    icon: FileCheck,
    title: "Visa Assistance",
    subtitle: "End-to-End Visa Support",
    description: "Comprehensive visa support including documentation review, mock interviews, and application filing.",
    gradient: "from-teal to-teal/80",
    process: [
      "Offer letter verification & assessment",
      "Financial documentation guidance",
      "Visa application form preparation",
      "Document compilation & review",
      "Mock interview sessions",
      "Application filing & tracking",
    ],
    deliverables: [
      "Complete document checklist",
      "Mock interview feedback",
      "Visa application review",
      "Post-decision guidance",
    ],
    timeline: "4-8 weeks depending on country",
    disclaimer: "Visa decisions are at the discretion of immigration authorities. We provide process-driven support, not guaranteed outcomes.",
  },
  {
    id: "language",
    icon: Languages,
    title: "Language Training",
    subtitle: "IELTS, German, Japanese & More",
    description: "Comprehensive language preparation with academic, professional, and exam-focused modules.",
    gradient: "from-success to-success/80",
    languages: [
      { name: "IELTS", type: "English Proficiency" },
      { name: "German", type: "A1 to C1 Levels" },
      { name: "Japanese", type: "JLPT Preparation" },
      { name: "LangCert", type: "English Certification" },
    ],
    modules: [
      "Academic language skills",
      "Professional communication",
      "Exam-focused preparation",
      "Speaking & writing practice",
    ],
    timeline: "8-16 weeks depending on target level",
  },
  {
    id: "placement-opportunities",
    icon: Briefcase,
    title: "Placement Opportunities",
    subtitle: "Jobs & Internships",
    description: "Access domestic jobs and international internships aligned with your career goals and education.",
    gradient: "from-primary to-primary/80",
    process: [
      "Skill assessment & gap analysis",
      "Career alignment with industry trends",
      "Employer & company mapping",
      "Internship & job targeting",
      "Application support & tracking",
    ],
    deliverables: [
      "Career pathway document",
      "Target employer list",
      "Application strategy",
      "Interview preparation guide",
    ],
    timeline: "Ongoing support during and after studies",
  },
  {
    id: "soft-skills",
    icon: Users,
    title: "Soft Skill Training",
    subtitle: "Professional Development",
    description: "Build essential soft skills including public speaking, corporate etiquette, and leadership for global careers.",
    gradient: "from-accent to-accent/80",
    skills: [
      "Public Speaking & Presentation",
      "Corporate Etiquette & Professionalism",
      "Leadership & Team Management",
      "Cross-cultural Communication",
      "Time Management & Productivity",
      "Networking & Relationship Building",
    ],
    timeline: "4-8 weeks program duration",
  },
  {
    id: "placement-assistance",
    icon: Target,
    title: "Placement Assistance",
    subtitle: "Career Launch Support",
    description: "Complete job search support including resume building, interview preparation, and strategic job search.",
    gradient: "from-teal to-teal/80",
    process: [
      "Resume building & optimization",
      "LinkedIn profile enhancement",
      "Interview preparation & mock sessions",
      "Job search strategy development",
      "Salary negotiation guidance",
    ],
    deliverables: [
      "ATS-optimized resume",
      "Cover letter templates",
      "Interview preparation kit",
      "Job search action plan",
    ],
    timeline: "Ongoing until placement",
  },
  {
    id: "post-admission",
    icon: Home,
    title: "Post-Admission Services",
    subtitle: "Settlement Support",
    description: "Smooth transition support including accommodation help, country registration, and local orientation.",
    gradient: "from-success to-success/80",
    services: [
      "Accommodation search & booking assistance",
      "Airport pickup coordination",
      "Bank account opening guidance",
      "Local registration support",
      "SIM card & utilities setup",
      "Orientation to local area",
    ],
    timeline: "Pre-departure to first month abroad",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Education & Career Solutions
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                From university selection to global placement — we provide comprehensive, transparent, and process-driven support at every step of your journey.
              </p>
            </motion.div>
          </div>
          
          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {servicesData.map((service, index) => (
                <motion.div 
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="scroll-mt-24"
                >
                  <div className={`premium-card overflow-hidden ${index % 2 === 0 ? '' : 'bg-secondary/20'}`}>
                    <div className="p-8 md:p-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                            {service.title}
                          </h2>
                          <p className="text-muted-foreground">{service.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                        {service.description}
                      </p>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Process / Skills / Languages */}
                        {service.process && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Clock className="w-5 h-5 text-accent" />
                              Step-by-Step Process
                            </h3>
                            <ul className="space-y-3">
                              {service.process.map((step, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-xs font-bold text-accent">{i + 1}</span>
                                  </div>
                                  <span className="text-muted-foreground text-sm">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.languages && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Languages className="w-5 h-5 text-accent" />
                              Languages Offered
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {service.languages.map((lang, i) => (
                                <div key={i} className="p-4 rounded-xl bg-secondary/50">
                                  <div className="font-semibold text-foreground">{lang.name}</div>
                                  <div className="text-sm text-muted-foreground">{lang.type}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.skills && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Users className="w-5 h-5 text-accent" />
                              Skills Covered
                            </h3>
                            <ul className="space-y-2">
                              {service.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                  <span className="text-muted-foreground text-sm">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.services && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <Home className="w-5 h-5 text-accent" />
                              What's Included
                            </h3>
                            <ul className="space-y-2">
                              {service.services.map((s, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                  <span className="text-muted-foreground text-sm">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Deliverables */}
                        {service.deliverables && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-teal" />
                              Deliverables
                            </h3>
                            <ul className="space-y-2">
                              {service.deliverables.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                  <span className="text-muted-foreground text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Modules for language */}
                        {service.modules && (
                          <div className="bg-background rounded-2xl p-6 border border-border">
                            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-teal" />
                              Training Modules
                            </h3>
                            <ul className="space-y-2">
                              {service.modules.map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                                  <span className="text-muted-foreground text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Timeline & CTA */}
                      <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        {service.timeline && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="text-sm"><strong>Timeline:</strong> {service.timeline}</span>
                          </div>
                        )}
                        <Link to="/enquiry">
                          <Button size="lg" className="font-semibold">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Disclaimer */}
                      {service.disclaimer && (
                        <p className="mt-6 text-sm text-muted-foreground/70 italic border-l-2 border-accent/30 pl-4">
                          {service.disclaimer}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a free consultation with our expert counselors and get personalized guidance.
              </p>
              <Link to="/enquiry">
                <Button size="lg" className="font-semibold h-14 px-8 text-base">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
