import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, DollarSign, ChevronRight } from "lucide-react";

const countries = [
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    universities: 120,
    workRights: "OPT: 1-3 years",
    avgCost: "$20K-$60K/year",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    accent: "from-blue-600/80 to-red-600/80",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: 85,
    workRights: "PSW: 2 years",
    avgCost: "£15K-£35K/year",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    accent: "from-blue-700/80 to-red-700/80",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    universities: 65,
    workRights: "PGWP: Up to 3 years",
    avgCost: "CAD 15K-35K/year",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    accent: "from-red-600/80 to-red-700/80",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    universities: 45,
    workRights: "18 months job seeker",
    avgCost: "€0-€3K/year (public)",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    accent: "from-yellow-500/80 to-red-600/80",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    universities: 55,
    workRights: "PSV: 2-4 years",
    avgCost: "AUD 20K-45K/year",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    accent: "from-blue-600/80 to-yellow-500/80",
  },
  {
    id: "newzealand",
    name: "New Zealand",
    flag: "🇳🇿",
    universities: 25,
    workRights: "PSW: 1-3 years",
    avgCost: "NZD 22K-35K/year",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    accent: "from-green-700/80 to-blue-600/80",
  },
  {
    id: "austria",
    name: "Austria",
    flag: "🇦🇹",
    universities: 20,
    workRights: "Red-White-Red Card",
    avgCost: "€0-€1.5K/year",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
    accent: "from-red-600/80 to-red-700/80",
  },
  {
    id: "poland",
    name: "Poland",
    flag: "🇵🇱",
    universities: 30,
    workRights: "1 year residence permit",
    avgCost: "€2K-€6K/year",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80",
    accent: "from-red-600/80 to-white/60",
  },
];

const Countries = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="badge-premium mb-4">
            Study Destinations
          </span>
          <h2 className="text-foreground mb-4">
            8 Countries, Endless Opportunities
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore top education destinations with world-class universities and excellent career prospects.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/education?country=${country.id}`}
                className="group block country-card h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${country.accent}`} />
                  
                  {/* Flag & Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {country.name}
                        </h3>
                        <p className="text-sm text-white/70">
                          {country.universities}+ Universities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 bg-card">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-teal" />
                      <span>{country.workRights}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 text-success" />
                      <span>{country.avgCost}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">Explore</span>
                    <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
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
          className="text-center mt-12"
        >
          <Link to="/education">
            <Button variant="default" size="lg" className="font-semibold">
              Explore All Destinations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
