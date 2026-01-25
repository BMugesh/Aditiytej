import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, Globe, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedContainer, StaggerWrapper, StaggerItem, fadeInUp, staggerContainer } from "@/components/ui/motion";

const Hero = () => {
  const stats = [
    { value: "10K+", label: "Students Placed", icon: Users },
    { value: "500+", label: "Partner Universities", icon: Award },
    { value: "8", label: "Countries", icon: Globe },
    { value: "95%", label: "Visa Success", icon: TrendingUp },
  ];

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Austria", flag: "🇦🇹" },
    { name: "Poland", flag: "🇵🇱" },
  ];

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary-foreground/3 rounded-full blur-[80px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-180px)]">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Trusted by 10,000+ Students Globally</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              From University Selection to{" "}
              <span className="text-gradient">Global Career</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed"
            >
              Your complete overseas education & career enablement partner. Expert guidance from admission to placement across 8 countries.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <Link to="/enquiry">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 h-14 text-base group shadow-accent"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/universities">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 h-14 text-base"
                >
                  Explore Universities
                </Button>
              </Link>
            </motion.div>

            {/* Countries Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {countries.map((country, i) => (
                <Link 
                  key={country.name} 
                  to={`/education?country=${country.name.toLowerCase().replace(' ', '')}`}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm"
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-white/70 hidden sm:inline">{country.name}</span>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-dark rounded-2xl p-6 group hover:bg-white/[0.08] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Journey Preview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 glass-dark rounded-2xl p-6"
              >
                <p className="text-sm text-white/40 mb-4 font-medium uppercase tracking-wider">Your Journey</p>
                <div className="flex items-center justify-between">
                  {["Explore", "Apply", "Visa", "Study", "Work", "Settle"].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? 'bg-accent text-white' : 'bg-white/10 text-white/60'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-[10px] text-white/40 mt-1 hidden md:block">{step}</span>
                      </div>
                      {index < 5 && (
                        <div className="w-4 md:w-8 h-px bg-white/10 mx-1" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L60 72C120 64 240 48 360 42.7C480 37 600 43 720 48C840 53 960 59 1080 58.7C1200 59 1320 53 1380 50L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
