import { Search, FileText, Stamp, BookOpen, Briefcase, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explore",
    description: "Discover universities and courses aligned with your goals",
    color: "bg-primary",
  },
  {
    icon: FileText,
    title: "Apply",
    description: "Complete applications with expert documentation support",
    color: "bg-accent",
  },
  {
    icon: Stamp,
    title: "Visa",
    description: "Navigate visa process with mock interviews & filing",
    color: "bg-teal",
  },
  {
    icon: BookOpen,
    title: "Study",
    description: "Begin your academic journey with pre-departure prep",
    color: "bg-success",
  },
  {
    icon: Briefcase,
    title: "Work",
    description: "Access internships and job opportunities abroad",
    color: "bg-primary",
  },
  {
    icon: Home,
    title: "Settle",
    description: "Get accommodation & local support for smooth transition",
    color: "bg-accent",
  },
];

const Journey = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Dream to Reality in 6 Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            We guide you through every milestone — from your first consultation to settling in your dream country.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2 z-0" />

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 relative`}>
                  <step.icon className="w-7 h-7 text-white" />
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center text-xs font-bold text-foreground">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { text: "Personalized guidance at every step", icon: CheckCircle },
            { text: "Transparent process & realistic timelines", icon: CheckCircle },
            { text: "Dedicated counselor support", icon: CheckCircle },
          ].map((point, index) => (
            <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
              <point.icon className="w-5 h-5 text-success shrink-0" />
              <span className="text-muted-foreground">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
