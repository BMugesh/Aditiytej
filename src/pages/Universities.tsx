import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  MapPin,
  GraduationCap,
  Globe,
  ArrowRight,
  Star,
  Users,
  Building
} from "lucide-react";
import { cn } from "@/lib/utils";

// Real university data
const universitiesData = [
  // United States
  { id: "mit", name: "Massachusetts Institute of Technology", country: "us", countryName: "United States", location: "Cambridge, MA", ranking: 1, courses: ["Computer Science", "Engineering", "Physics", "AI/ML"], type: "Private Research" },
  { id: "stanford", name: "Stanford University", country: "us", countryName: "United States", location: "Stanford, CA", ranking: 3, courses: ["Computer Science", "Business", "Medicine", "Law"], type: "Private Research" },
  { id: "harvard", name: "Harvard University", country: "us", countryName: "United States", location: "Cambridge, MA", ranking: 4, courses: ["Law", "Business", "Medicine", "Public Policy"], type: "Private Research" },
  { id: "caltech", name: "California Institute of Technology", country: "us", countryName: "United States", location: "Pasadena, CA", ranking: 6, courses: ["Physics", "Engineering", "Chemistry", "Computer Science"], type: "Private Research" },
  { id: "ucberkeley", name: "UC Berkeley", country: "us", countryName: "United States", location: "Berkeley, CA", ranking: 10, courses: ["Engineering", "Business", "Computer Science", "Data Science"], type: "Public Research" },
  { id: "ucla", name: "University of California, Los Angeles", country: "us", countryName: "United States", location: "Los Angeles, CA", ranking: 15, courses: ["Film", "Business", "Engineering", "Medicine"], type: "Public Research" },
  { id: "columbia", name: "Columbia University", country: "us", countryName: "United States", location: "New York, NY", ranking: 12, courses: ["Journalism", "Law", "Business", "Arts"], type: "Private Research" },
  { id: "nyu", name: "New York University", country: "us", countryName: "United States", location: "New York, NY", ranking: 25, courses: ["Business", "Arts", "Film", "Media"], type: "Private Research" },
  
  // United Kingdom
  { id: "oxford", name: "University of Oxford", country: "uk", countryName: "United Kingdom", location: "Oxford, England", ranking: 1, courses: ["PPE", "Law", "Medicine", "Computer Science"], type: "Public Research" },
  { id: "cambridge", name: "University of Cambridge", country: "uk", countryName: "United Kingdom", location: "Cambridge, England", ranking: 2, courses: ["Engineering", "Natural Sciences", "Mathematics", "Economics"], type: "Public Research" },
  { id: "imperial", name: "Imperial College London", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 6, courses: ["Engineering", "Medicine", "Business", "Science"], type: "Public Research" },
  { id: "lse", name: "London School of Economics", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 8, courses: ["Economics", "Politics", "Law", "Finance"], type: "Public Research" },
  { id: "ucl", name: "University College London", country: "uk", countryName: "United Kingdom", location: "London, England", ranking: 9, courses: ["Architecture", "Medicine", "Law", "Engineering"], type: "Public Research" },
  { id: "edinburgh", name: "University of Edinburgh", country: "uk", countryName: "United Kingdom", location: "Edinburgh, Scotland", ranking: 15, courses: ["Medicine", "AI", "Informatics", "Business"], type: "Public Research" },
  { id: "manchester", name: "University of Manchester", country: "uk", countryName: "United Kingdom", location: "Manchester, England", ranking: 28, courses: ["Engineering", "Business", "Computer Science", "Medicine"], type: "Public Research" },
  { id: "warwick", name: "University of Warwick", country: "uk", countryName: "United Kingdom", location: "Coventry, England", ranking: 64, courses: ["Business", "Economics", "Engineering", "Computer Science"], type: "Public Research" },
  
  // Canada
  { id: "toronto", name: "University of Toronto", country: "canada", countryName: "Canada", location: "Toronto, Ontario", ranking: 21, courses: ["Computer Science", "Engineering", "Business", "Medicine"], type: "Public Research" },
  { id: "ubc", name: "University of British Columbia", country: "canada", countryName: "Canada", location: "Vancouver, BC", ranking: 34, courses: ["Engineering", "Forestry", "Business", "Computer Science"], type: "Public Research" },
  { id: "mcgill", name: "McGill University", country: "canada", countryName: "Canada", location: "Montreal, Quebec", ranking: 30, courses: ["Medicine", "Law", "Engineering", "Music"], type: "Public Research" },
  { id: "waterloo", name: "University of Waterloo", country: "canada", countryName: "Canada", location: "Waterloo, Ontario", ranking: 112, courses: ["Computer Science", "Engineering", "Mathematics", "Actuarial Science"], type: "Public Research" },
  { id: "alberta", name: "University of Alberta", country: "canada", countryName: "Canada", location: "Edmonton, Alberta", ranking: 111, courses: ["Engineering", "AI", "Business", "Health Sciences"], type: "Public Research" },
  
  // Germany
  { id: "tumunich", name: "Technical University of Munich", country: "germany", countryName: "Germany", location: "Munich, Bavaria", ranking: 37, courses: ["Engineering", "Computer Science", "Physics", "Architecture"], type: "Public Research" },
  { id: "lmu", name: "LMU Munich", country: "germany", countryName: "Germany", location: "Munich, Bavaria", ranking: 59, courses: ["Medicine", "Law", "Business", "Psychology"], type: "Public Research" },
  { id: "heidelberg", name: "Heidelberg University", country: "germany", countryName: "Germany", location: "Heidelberg", ranking: 65, courses: ["Medicine", "Natural Sciences", "Law", "Philosophy"], type: "Public Research" },
  { id: "rwth", name: "RWTH Aachen University", country: "germany", countryName: "Germany", location: "Aachen", ranking: 90, courses: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"], type: "Public Research" },
  { id: "tuberlin", name: "Technical University of Berlin", country: "germany", countryName: "Germany", location: "Berlin", ranking: 106, courses: ["Engineering", "Computer Science", "Architecture", "Economics"], type: "Public Research" },
  
  // Australia
  { id: "melbourne", name: "University of Melbourne", country: "australia", countryName: "Australia", location: "Melbourne, Victoria", ranking: 14, courses: ["Medicine", "Law", "Engineering", "Business"], type: "Public Research" },
  { id: "sydney", name: "University of Sydney", country: "australia", countryName: "Australia", location: "Sydney, NSW", ranking: 19, courses: ["Medicine", "Law", "Engineering", "Arts"], type: "Public Research" },
  { id: "anu", name: "Australian National University", country: "australia", countryName: "Australia", location: "Canberra, ACT", ranking: 30, courses: ["International Relations", "Science", "Law", "Engineering"], type: "Public Research" },
  { id: "unsw", name: "UNSW Sydney", country: "australia", countryName: "Australia", location: "Sydney, NSW", ranking: 19, courses: ["Engineering", "Business", "Law", "Design"], type: "Public Research" },
  { id: "monash", name: "Monash University", country: "australia", countryName: "Australia", location: "Melbourne, Victoria", ranking: 42, courses: ["Pharmacy", "Engineering", "Business", "IT"], type: "Public Research" },
  
  // New Zealand
  { id: "auckland", name: "University of Auckland", country: "newzealand", countryName: "New Zealand", location: "Auckland", ranking: 68, courses: ["Engineering", "Business", "Medicine", "Arts"], type: "Public Research" },
  { id: "otago", name: "University of Otago", country: "newzealand", countryName: "New Zealand", location: "Dunedin", ranking: 206, courses: ["Medicine", "Dentistry", "Science", "Business"], type: "Public Research" },
  { id: "victoria", name: "Victoria University of Wellington", country: "newzealand", countryName: "New Zealand", location: "Wellington", ranking: 241, courses: ["Law", "International Relations", "Design", "Film"], type: "Public Research" },
  
  // Austria
  { id: "vienna", name: "University of Vienna", country: "austria", countryName: "Austria", location: "Vienna", ranking: 137, courses: ["Law", "Medicine", "Psychology", "Business"], type: "Public Research" },
  { id: "tuvienna", name: "TU Vienna", country: "austria", countryName: "Austria", location: "Vienna", ranking: 186, courses: ["Engineering", "Architecture", "Computer Science", "Physics"], type: "Public Research" },
  { id: "innsbruck", name: "University of Innsbruck", country: "austria", countryName: "Austria", location: "Innsbruck", ranking: 266, courses: ["Sports Science", "Tourism", "Law", "Economics"], type: "Public Research" },
  
  // Poland
  { id: "warsaw", name: "University of Warsaw", country: "poland", countryName: "Poland", location: "Warsaw", ranking: 262, courses: ["Law", "Economics", "Psychology", "International Relations"], type: "Public Research" },
  { id: "jagiellonian", name: "Jagiellonian University", country: "poland", countryName: "Poland", location: "Krakow", ranking: 293, courses: ["Medicine", "Law", "Arts", "Science"], type: "Public Research" },
  { id: "warsawtech", name: "Warsaw University of Technology", country: "poland", countryName: "Poland", location: "Warsaw", ranking: 511, courses: ["Engineering", "Architecture", "Computer Science", "Electronics"], type: "Public Research" },
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
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                University Explorer
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Find Your Dream University
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Explore 40+ top universities across 8 countries
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search universities or courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
              </div>
            </div>

            {/* Country Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {countries.map((c) => (
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
                  <span>{c.flag}</span>
                  <span className="hidden sm:inline">{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-8">
              Showing {filteredUniversities.length} universities
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((uni) => (
                <div key={uni.id} className="university-card group">
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <Building className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        <Star className="w-3 h-3 fill-accent" />
                        #{uni.ranking}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-lg">{getCountryFlag(uni.country)}</span>
                      <span>{uni.location}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-3">{uni.type}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {uni.courses.slice(0, 3).map((course, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground">
                          {course}
                        </span>
                      ))}
                      {uni.courses.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-secondary text-xs text-secondary-foreground">
                          +{uni.courses.length - 3} more
                        </span>
                      )}
                    </div>
                    <Link to={`/universities/${uni.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Check Eligibility
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredUniversities.length === 0 && (
              <div className="text-center py-16">
                <GraduationCap className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No universities found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our expert counselors can help you find the perfect university match.
            </p>
            <Link to="/enquiry">
              <Button variant="hero" size="lg">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversitiesPage;
