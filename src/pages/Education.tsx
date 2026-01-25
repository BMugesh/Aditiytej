import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Calendar,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const countriesData = [
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    overview: "Home to world-renowned universities and diverse academic programs. The US offers unparalleled research opportunities and a multicultural environment.",
    educationSystem: [
      "4-year Bachelor's degrees",
      "1-2 year Master's programs",
      "Research-focused PhD programs",
      "Community college pathway options",
    ],
    admissionCycles: "Fall (Sep), Spring (Jan), Summer (May)",
    workRights: "OPT: 12 months (36 months for STEM)",
    postStudyWork: "H-1B visa sponsorship opportunity",
    avgCost: { tuition: "$20,000 - $60,000/year", living: "$12,000 - $20,000/year" },
    popularFields: ["Computer Science", "Business/MBA", "Engineering", "Data Science", "Healthcare"],
    topUniversities: ["MIT", "Stanford", "Harvard", "Caltech", "UC Berkeley"],
    requirements: ["SAT/GRE/GMAT", "TOEFL/IELTS", "SOP", "LORs", "Transcripts"],
    color: "from-blue-600 to-red-600",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    overview: "Prestigious education with shorter program durations. The UK offers a rich academic heritage and excellent career prospects.",
    educationSystem: [
      "3-year Bachelor's degrees",
      "1-year Master's programs",
      "Foundation programs available",
      "Integrated Master's options",
    ],
    admissionCycles: "Fall (Sep) primary intake",
    workRights: "Graduate Route: 2 years (3 years PhD)",
    postStudyWork: "Skilled Worker visa opportunity",
    avgCost: { tuition: "£15,000 - £35,000/year", living: "£12,000 - £15,000/year" },
    popularFields: ["Business", "Law", "Medicine", "Arts", "Engineering"],
    topUniversities: ["Oxford", "Cambridge", "Imperial College", "LSE", "UCL"],
    requirements: ["IELTS/PTE", "SOP", "LORs", "Transcripts", "Portfolio (arts)"],
    color: "from-blue-700 to-red-700",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    overview: "Excellent quality of life with immigration-friendly policies. Canada offers affordable education and clear pathways to permanent residency.",
    educationSystem: [
      "3-4 year Bachelor's degrees",
      "1-2 year Master's programs",
      "Co-op programs available",
      "College diploma options",
    ],
    admissionCycles: "Fall (Sep), Winter (Jan), Summer (May)",
    workRights: "PGWP: Up to 3 years",
    postStudyWork: "Express Entry pathway to PR",
    avgCost: { tuition: "CAD $15,000 - $35,000/year", living: "CAD $10,000 - $15,000/year" },
    popularFields: ["Technology", "Healthcare", "Engineering", "Business", "Environmental Science"],
    topUniversities: ["University of Toronto", "UBC", "McGill", "Waterloo", "Alberta"],
    requirements: ["IELTS/TOEFL", "SOP", "LORs", "Transcripts", "GRE (some programs)"],
    color: "from-red-600 to-red-700",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    overview: "Tuition-free public universities with strong research focus. Germany offers excellent engineering and technical education with industry connections.",
    educationSystem: [
      "3-4 year Bachelor's degrees",
      "2-year Master's programs",
      "Free tuition at public universities",
      "Research-intensive programs",
    ],
    admissionCycles: "Winter (Oct), Summer (Apr)",
    workRights: "18-month job seeker visa",
    postStudyWork: "EU Blue Card opportunity",
    avgCost: { tuition: "€0 - €3,000/year (public)", living: "€10,000 - €12,000/year" },
    popularFields: ["Engineering", "Automotive", "Research", "Technology", "Renewable Energy"],
    topUniversities: ["TU Munich", "LMU Munich", "Heidelberg", "RWTH Aachen", "TU Berlin"],
    requirements: ["German proficiency (some programs)", "APS certificate (India)", "Blocked account", "TestAS/TestDaF"],
    color: "from-yellow-500 to-red-600",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    overview: "High-quality education with excellent quality of life. Australia offers a welcoming environment and strong post-study work rights.",
    educationSystem: [
      "3-year Bachelor's degrees",
      "1-2 year Master's programs",
      "Pathway programs available",
      "Vocational education options",
    ],
    admissionCycles: "Feb & Jul intakes",
    workRights: "Post-Study Work Visa: 2-4 years",
    postStudyWork: "Skilled migration pathway",
    avgCost: { tuition: "AUD $20,000 - $45,000/year", living: "AUD $21,000/year" },
    popularFields: ["Business", "IT", "Healthcare", "Engineering", "Hospitality"],
    topUniversities: ["Melbourne", "Sydney", "ANU", "UNSW", "Monash"],
    requirements: ["IELTS/PTE", "SOP", "LORs", "Transcripts", "Health insurance"],
    color: "from-blue-600 to-yellow-500",
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    overview: "Safe, scenic country with practical, industry-focused education. New Zealand offers excellent work-life balance and immigration options.",
    educationSystem: [
      "3-year Bachelor's degrees",
      "1-2 year Master's programs",
      "Strong practical focus",
      "Research opportunities",
    ],
    admissionCycles: "Feb & Jul intakes",
    workRights: "Post-Study Work Visa: 1-3 years",
    postStudyWork: "Skilled Migrant Category",
    avgCost: { tuition: "NZD $22,000 - $35,000/year", living: "NZD $15,000 - $20,000/year" },
    popularFields: ["Agriculture", "Tourism", "IT", "Environmental Science", "Film & Media"],
    topUniversities: ["Auckland", "Otago", "Victoria Wellington", "Canterbury", "Massey"],
    requirements: ["IELTS", "SOP", "LORs", "Transcripts", "Health & character checks"],
    color: "from-black to-blue-600",
  },
  {
    id: "austria",
    name: "Austria",
    flag: "🇦🇹",
    overview: "Rich cultural heritage with affordable, high-quality education. Austria offers excellent programs in music, arts, and business.",
    educationSystem: [
      "3-year Bachelor's degrees",
      "2-year Master's programs",
      "Low tuition fees",
      "Strong arts & music programs",
    ],
    admissionCycles: "Winter (Oct), Summer (Mar)",
    workRights: "Red-White-Red Card",
    postStudyWork: "EU work permit pathway",
    avgCost: { tuition: "€0 - €1,500/year", living: "€10,000 - €14,000/year" },
    popularFields: ["Music", "Arts", "Business", "Tourism", "Environmental Studies"],
    topUniversities: ["Vienna", "TU Vienna", "Innsbruck", "Graz", "Salzburg"],
    requirements: ["German proficiency", "SOP", "Transcripts", "Portfolio (arts)", "Entrance exams"],
    color: "from-red-600 to-red-700",
  },
  {
    id: "poland",
    name: "Poland",
    flag: "🇵🇱",
    overview: "Affordable education in the heart of Europe. Poland offers quality medical and engineering programs at competitive costs.",
    educationSystem: [
      "3-year Bachelor's degrees",
      "2-year Master's programs",
      "English-taught programs",
      "Strong medical education",
    ],
    admissionCycles: "Oct & Feb intakes",
    workRights: "Temporary residence permit",
    postStudyWork: "9-month job search period",
    avgCost: { tuition: "€2,000 - €6,000/year", living: "€6,000 - €9,000/year" },
    popularFields: ["Medicine", "Engineering", "IT", "Business", "Pharmacy"],
    topUniversities: ["Warsaw", "Jagiellonian", "Warsaw Tech", "Wroclaw", "AGH"],
    requirements: ["IELTS/TOEFL", "SOP", "Transcripts", "Entrance exam (medicine)", "Health certificate"],
    color: "from-red-600 to-white",
  },
];

const EducationPage = () => {
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get("country") || "us";
  const [activeCountry, setActiveCountry] = useState(initialCountry);

  const country = countriesData.find(c => c.id === activeCountry) || countriesData[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Study Abroad
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Explore Education Destinations
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Comprehensive guides for each country — education systems, costs, and opportunities.
              </p>
            </div>

            {/* Country Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {countriesData.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCountry(c.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCountry === c.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20"
                  )}
                >
                  <span className="text-lg">{c.flag}</span>
                  <span className="hidden sm:inline">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Country Details */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {/* Country Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h2 className="text-3xl font-bold text-foreground">{country.name}</h2>
                <p className="text-muted-foreground">{country.overview}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Education System */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Education System</h3>
                </div>
                <ul className="space-y-2">
                  {country.educationSystem.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Admission Cycles */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-foreground">Admission Cycles</h3>
                </div>
                <p className="text-muted-foreground">{country.admissionCycles}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <h4 className="font-medium text-foreground">Work Rights</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{country.workRights}</p>
                  <p className="text-sm text-muted-foreground mt-1">{country.postStudyWork}</p>
                </div>
              </div>

              {/* Cost Overview */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-success" />
                  <h3 className="font-semibold text-foreground">Cost Overview</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Tuition (per year)</p>
                    <p className="font-semibold text-foreground">{country.avgCost.tuition}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Living Expenses</p>
                    <p className="font-semibold text-foreground">{country.avgCost.living}</p>
                  </div>
                </div>
              </div>

              {/* Popular Fields */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Popular Fields</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {country.popularFields.map((field, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground">
                      {field}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Universities */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Top Universities</h3>
                </div>
                <ul className="space-y-2">
                  {country.topUniversities.map((uni, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{uni}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-teal" />
                  <h3 className="font-semibold text-foreground">Key Requirements</h3>
                </div>
                <ul className="space-y-2">
                  {country.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want to explore universities in {country.name}?
              </p>
              <Link to={`/universities?country=${country.id}`}>
                <Button variant="accent" size="lg">
                  View Universities
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;
