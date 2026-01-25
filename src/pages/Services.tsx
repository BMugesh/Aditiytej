import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  User,
  Building
} from "lucide-react";

const servicesData = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Overseas Education",
    subtitle: "Complete University & Course Guidance",
    description: "Expert guidance for university selection, course matching, and complete admission support across 8 countries.",
    color: "bg-primary",
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
    color: "bg-accent",
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
    color: "bg-teal",
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
    color: "bg-success",
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
    color: "bg-primary",
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
    color: "bg-accent",
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
    color: "bg-teal",
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
    color: "bg-success",
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
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Complete Education & Career Solutions
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                From university selection to global placement — we provide comprehensive, transparent, and process-driven support at every step of your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {servicesData.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div className={`rounded-3xl overflow-hidden border border-border ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}`}>
                    <div className="p-8 md:p-12">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                        <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center shrink-0`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
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
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                                    <span className="text-xs font-semibold text-accent">{i + 1}</span>
                                  </div>
                                  <span className="text-muted-foreground">{step}</span>
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
                            <div className="grid grid-cols-2 gap-4">
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
                                  <CheckCircle className="w-4 h-4 text-success" />
                                  <span className="text-muted-foreground">{skill}</span>
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
                                  <CheckCircle className="w-4 h-4 text-success" />
                                  <span className="text-muted-foreground">{s}</span>
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
                                  <CheckCircle className="w-4 h-4 text-success" />
                                  <span className="text-muted-foreground">{item}</span>
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
                                  <CheckCircle className="w-4 h-4 text-success" />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Timeline & Disclaimer */}
                      <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        {service.timeline && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5 text-accent" />
                            <span><strong>Timeline:</strong> {service.timeline}</span>
                          </div>
                        )}
                        <Link to="/enquiry">
                          <Button variant="accent" size="lg">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert counselors and get personalized guidance.
            </p>
            <Link to="/enquiry">
              <Button variant="hero" size="xl">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
