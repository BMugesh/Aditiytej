import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Search,
  MapPin,
  GraduationCap,
  ArrowRight,
  Star,
  Building,
  ChevronRight,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

// Real university data
const universitiesData = [
  // United States
  { id: "mit", name: "Massachusetts Institute of Technology", country: "us", countryName: "United States", location: "Cambridge, MA", ranking: 1, courses: ["Computer Science", "Engineering", "Physics", "AI/ML"], type: "Private Research", logo: "MIT" },
  { id: "stanford", name: "Stanford University", country: "us", countryName: "United States", location: "Stanford, CA", ranking: 3, courses: ["Computer Science", "Business", "Medicine", "Law"], type: "Private Research", logo: "Stanford" },
  { id: "harvard", name: "Harvard University", country: "us", countryName: "United States", location: "Cambridge, MA", ranking: 4, courses: ["Law", "Business", "Medicine", "Public Policy"], type: "Private Research", logo: "Harvard" },
  { id: "caltech", name: "California Institute of Technology", country: "us", countryName: "United States", location: "Pasadena, CA", ranking: 6, courses: ["Physics", "Engineering", "Chemistry", "Computer Science"], type: "Private Research", logo: "Caltech" },
  { id: "ucberkeley", name: "UC Berkeley", country: "us", countryName: "United States", location: "Berkeley, CA", ranking: 10, courses: ["Engineering", "Business", "Computer Science", "Data Science"], type: "Public Research", logo: "UCB" },
  { id: "ucla", name: "University of California, Los Angeles", country: "us", countryName: "United States", location: "Los Angeles, CA", ranking: 15, courses: ["Film", "Business", "Engineering", "Medicine"], type: "Public Research", logo: "UCLA" },
  { id: "columbia", name: "Columbia University", country: "us", countryName: "United States", location: "New York, NY", ranking: 12, courses: ["Journalism", "Law", "Business", "Arts"], type: "Private Research", logo: "Columbia" },
  { id: "nyu", name: "New York University", country: "us", countryName: "United States", location: "New York, NY", ranking: 25, courses: ["Business", "Arts", "Film", "Media"], type: "Private Research", logo: "NYU" },
  
  // United Kingdom
  { id: "oxford", name: "University of Oxford", country: "uk", countryName: "United Kingdom", location: "Oxford, England", ranking: 1, courses: ["PPE", "Law", "Medicine", "Computer Science"], type: "Public Research", logo: "Oxford" },
  { id: "cambridge", name: "University of Cambridge", country: "uk", countryName: "United Kingdom", location: "Cambridge, England", ranking: 2, courses: ["Engineering", "Natural Sciences", "Mathematics", "Economics"], type: "Public Research", logo: "Cambridge" },
  { id: "imperial", name: "Imperial College London", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 6, courses: ["Engineering", "Medicine", "Business", "Science"], type: "Public Research", logo: "Imperial" },
  { id: "lse", name: "London School of Economics", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 8, courses: ["Economics", "Politics", "Law", "Finance"], type: "Public Research", logo: "LSE" },
  { id: "ucl", name: "University College London", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 9, courses: ["Architecture", "Medicine", "Law", "Engineering"], type: "Public Research", logo: "UCL" },
  { id: "edinburgh", name: "University of Edinburgh", country: "uk", countryName: "United Kingdom", location: "Edinburgh, Scotland", ranking: 15, courses: ["Medicine", "AI", "Informatics", "Business"], type: "Public Research", logo: "Edinburgh" },
  { id: "manchester", name: "University of Manchester", country: "uk", countryName: "United Kingdom", location: "Manchester, England", ranking: 28, courses: ["Engineering", "Business", "Computer Science", "Medicine"], type: "Public Research", logo: "Manchester" },
  { id: "warwick", name: "University of Warwick", country: "uk", countryName: "United Kingdom", location: "Coventry, England", ranking: 64, courses: ["Business", "Economics", "Engineering", "Computer Science"], type: "Public Research", logo: "Warwick" },
  
  // Canada
  { id: "toronto", name: "University of Toronto", country: "canada", countryName: "Canada", location: "Toronto, Ontario", ranking: 21, courses: ["Computer Science", "Engineering", "Business", "Medicine"], type: "Public Research", logo: "UofT" },
  { id: "ubc", name: "University of British Columbia", country: "canada", countryName: "Canada", location: "Vancouver, BC", ranking: 34, courses: ["Engineering", "Forestry", "Business", "Computer Science"], type: "Public Research", logo: "UBC" },
  { id: "mcgill", name: "McGill University", country: "canada", countryName: "Canada", location: "Montreal, Quebec", ranking: 30, courses: ["Medicine", "Law", "Engineering", "Music"], type: "Public Research", logo: "McGill" },
  { id: "waterloo", name: "University of Waterloo", country: "canada", countryName: "Canada", location: "Waterloo, Ontario", ranking: 112, courses: ["Computer Science", "Engineering", "Mathematics", "Actuarial Science"], type: "Public Research", logo: "Waterloo" },
  { id: "alberta", name: "University of Alberta", country: "canada", countryName: "Canada", location: "Edmonton, Alberta", ranking: 111, courses: ["Engineering", "AI", "Business", "Health Sciences"], type: "Public Research", logo: "Alberta" },
  
  // Germany
  { id: "tumunich", name: "Technical University of Munich", country: "germany", countryName: "Germany", location: "Munich, Bavaria", ranking: 37, courses: ["Engineering", "Computer Science", "Physics", "Architecture"], type: "Public Research", logo: "TUM" },
  { id: "lmu", name: "LMU Munich", country: "germany", countryName: "Germany", location: "Munich, Bavaria", ranking: 59, courses: ["Medicine", "Law", "Business", "Psychology"], type: "Public Research", logo: "LMU" },
  { id: "heidelberg", name: "Heidelberg University", country: "germany", countryName: "Germany", location: "Heidelberg", ranking: 65, courses: ["Medicine", "Natural Sciences", "Law", "Philosophy"], type: "Public Research", logo: "Heidelberg" },
  { id: "rwth", name: "RWTH Aachen University", country: "germany", countryName: "Germany", location: "Aachen", ranking: 90, courses: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"], type: "Public Research", logo: "RWTH" },
  { id: "tuberlin", name: "Technical University of Berlin", country: "germany", countryName: "Germany", location: "Berlin", ranking: 106, courses: ["Engineering", "Computer Science", "Architecture", "Economics"], type: "Public Research", logo: "TUB" },
  
  // Australia
  { id: "melbourne", name: "University of Melbourne", country: "australia", countryName: "Australia", location: "Melbourne, Victoria", ranking: 14, courses: ["Medicine", "Law", "Engineering", "Business"], type: "Public Research", logo: "Melbourne" },
  { id: "sydney", name: "University of Sydney", country: "australia", countryName: "Australia", location: "Sydney, NSW", ranking: 19, courses: ["Medicine", "Law", "Engineering", "Arts"], type: "Public Research", logo: "Sydney" },
  { id: "anu", name: "Australian National University", country: "australia", countryName: "Australia", location: "Canberra, ACT", ranking: 30, courses: ["International Relations", "Science", "Law", "Engineering"], type: "Public Research", logo: "ANU" },
  { id: "unsw", name: "UNSW Sydney", country: "australia", countryName: "Australia", location: "Sydney, NSW", ranking: 19, courses: ["Engineering", "Business", "Law", "Design"], type: "Public Research", logo: "UNSW" },
  { id: "monash", name: "Monash University", country: "australia", countryName: "Australia", location: "Melbourne, Victoria", ranking: 42, courses: ["Pharmacy", "Engineering", "Business", "IT"], type: "Public Research", logo: "Monash" },
  
  // New Zealand
  { id: "auckland", name: "University of Auckland", country: "newzealand", countryName: "New Zealand", location: "Auckland", ranking: 68, courses: ["Engineering", "Business", "Medicine", "Arts"], type: "Public Research", logo: "Auckland" },
  { id: "otago", name: "University of Otago", country: "newzealand", countryName: "New Zealand", location: "Dunedin", ranking: 206, courses: ["Medicine", "Dentistry", "Science", "Business"], type: "Public Research", logo: "Otago" },
  { id: "victoria", name: "Victoria University of Wellington", country: "newzealand", countryName: "New Zealand", location: "Wellington", ranking: 241, courses: ["Law", "International Relations", "Design", "Film"], type: "Public Research", logo: "VUW" },
  
  // Austria
  { id: "vienna", name: "University of Vienna", country: "austria", countryName: "Austria", location: "Vienna", ranking: 137, courses: ["Law", "Medicine", "Psychology", "Business"], type: "Public Research", logo: "Vienna" },
  { id: "tuvienna", name: "TU Vienna", country: "austria", countryName: "Austria", location: "Vienna", ranking: 186, courses: ["Engineering", "Architecture", "Computer Science", "Physics"], type: "Public Research", logo: "TUW" },
  { id: "innsbruck", name: "University of Innsbruck", country: "austria", countryName: "Austria", location: "Innsbruck", ranking: 266, courses: ["Sports Science", "Tourism", "Law", "Economics"], type: "Public Research", logo: "Innsbruck" },
  
  // Poland
  { id: "warsaw", name: "University of Warsaw", country: "poland", countryName: "Poland", location: "Warsaw", ranking: 262, courses: ["Law", "Economics", "Psychology", "International Relations"], type: "Public Research", logo: "UW" },
  { id: "jagiellonian", name: "Jagiellonian University", country: "poland", countryName: "Poland", location: "Krakow", ranking: 293, courses: ["Medicine", "Law", "Arts", "Science"], type: "Public Research", logo: "JU" },
  { id: "warsawtech", name: "Warsaw University of Technology", country: "poland", countryName: "Poland", location: "Warsaw", ranking: 511, courses: ["Engineering", "Architecture", "Computer Science", "Electronics"], type: "Public Research", logo: "WUT" },
];

const countries = [
  { id: "all", name: "All Countries", flag: "🌍" },
  { id: "us", name: "United States", flag: "🇺🇸" },
  { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { id: "canada", name: "Canada", flag: "🇨🇦" },
  { id: "germany", name: "Germany", flag: "🇩🇪" },
  { id: "australia", name: "Australia", flag: "🇦🇺" },
  { id: "newzealand", name: "New Zealand", flag: "🇳🇿" },
  { id: "austria", name: "Austria", flag: "🇦🇹" },
  { id: "poland", name: "Poland", flag: "🇵🇱" },
];

const UniversitiesPage = () => {
  const [searchParams] = useSearchParams();
  const initialCountry = searchParams.get("country") || "all";
  const [activeCountry, setActiveCountry] = useState(initialCountry);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUniversities = universitiesData.filter(uni => {
    const matchesCountry = activeCountry === "all" || uni.country === activeCountry;
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         uni.courses.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCountry && matchesSearch;
  });

  const getCountryFlag = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    return country?.flag || "🌍";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-10"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                University Explorer
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Find Your Dream University
              </h1>
              <p className="text-lg text-white/60">
                Explore 40+ top universities across 8 countries
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-10"
            >
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="Search universities or courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-5 h-14 text-base bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:bg-white/15 focus:border-white/30"
                />
              </div>
            </motion.div>

            {/* Country Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {countries.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCountry(c.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    activeCountry === c.id
                      ? "bg-accent text-white shadow-accent"
                      : "bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/10"
                  )}
                >
                  <span className="text-lg">{c.flag}</span>
                  <span className="hidden sm:inline">{c.name}</span>
                </button>
              ))}
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

        {/* Universities Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filteredUniversities.length}</span> universities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredUniversities.map((uni, index) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <div className="university-card group h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-border">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 text-white font-bold text-xs">
                          {uni.logo}
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                          <Star className="w-3 h-3 fill-accent" />
                          #{uni.ranking}
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {uni.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-lg">{getCountryFlag(uni.country)}</span>
                        <span>{uni.location}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">{uni.type}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {uni.courses.slice(0, 3).map((course, i) => (
                          <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground">
                            {course}
                          </span>
                        ))}
                        {uni.courses.length > 3 && (
                          <span className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground">
                            +{uni.courses.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="mt-auto">
                        <Link to={`/universities/${uni.id}`}>
                          <Button variant="outline" size="sm" className="w-full group/btn">
                            Check Eligibility
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredUniversities.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-muted-foreground/30" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No universities found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our expert counselors can help you find the perfect university match based on your profile and goals.
              </p>
              <Link to="/enquiry">
                <Button size="lg" className="font-semibold">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
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

export default UniversitiesPage;
