import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Clock, DollarSign } from "lucide-react";

const countries = [
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    universities: 120,
    programs: "STEM, MBA, Liberal Arts",
    workRights: "OPT: 1-3 years",
    avgCost: "$20K-$60K/year",
    color: "from-blue-600 to-red-600",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: 85,
    programs: "Business, Law, Medicine",
    workRights: "PSW: 2 years",
    avgCost: "£15K-£35K/year",
    color: "from-blue-700 to-red-700",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    universities: 65,
    programs: "Tech, Healthcare, Engineering",
    workRights: "PGWP: Up to 3 years",
    avgCost: "CAD 15K-$35K/year",
    color: "from-red-600 to-red-700",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    universities: 45,
    programs: "Engineering, Research, Tech",
    workRights: "18 months job seeker",
    avgCost: "€0-€3K/year (public)",
    color: "from-yellow-500 to-red-600",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    universities: 55,
    programs: "Business, IT, Healthcare",
    workRights: "PSV: 2-4 years",
    avgCost: "AUD 20K-$45K/year",
    color: "from-blue-600 to-yellow-500",
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    universities: 25,
    programs: "Agriculture, Tourism, IT",
    workRights: "PSW: 1-3 years",
    avgCost: "NZD 22K-$35K/year",
    color: "from-black to-blue-600",
  },
  {
    id: "austria",
    name: "Austria",
    flag: "🇦🇹",
    universities: 20,
    programs: "Music, Arts, Business",
    workRights: "Red-White-Red Card",
    avgCost: "€0-€1.5K/year",
    color: "from-red-600 to-red-700",
  },
  {
    id: "poland",
    name: "Poland",
    flag: "🇵🇱",
    universities: 30,
    programs: "Medicine, Engineering",
    workRights: "1 year residence permit",
    avgCost: "€2K-€6K/year",
    color: "from-red-600 to-white",
  },
];

const Countries = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Study Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            8 Countries, Endless Opportunities
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore top education destinations with world-class universities and excellent career prospects.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <Link
              key={country.id}
              to={`/education?country=${country.id}`}
              className="university-card overflow-hidden group"
            >
              {/* Flag Banner */}
              <div className={`h-24 bg-gradient-to-r ${country.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl">{country.flag}</span>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {country.name}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    <span>{country.universities}+ Universities</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-teal" />
                    <span>{country.workRights}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span>{country.avgCost}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">Popular: {country.programs}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/education">
            <Button variant="default" size="lg">
              Explore All Destinations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Countries;
