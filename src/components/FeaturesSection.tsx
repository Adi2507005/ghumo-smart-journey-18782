import { Sparkles, DollarSign, Clock, Mail, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Smart Trip Planning",
    description: "AI curates your entire itinerary in seconds.",
  },
  {
    icon: DollarSign,
    title: "Budget-Based Suggestions",
    description: "Get options that match your spending range.",
  },
  {
    icon: Clock,
    title: "Time-Saver",
    description: "No more hours of research — get instant plans.",
  },
  {
    icon: Mail,
    title: "Delivered to You",
    description: "Receive your complete itinerary in your inbox.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "Plans adapt to your preferences and travel style.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Magic",
    description: "Leverage cutting-edge AI for perfect recommendations.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Ghumo Smart?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel planning with our intelligent features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-accent rounded-full w-14 h-14 flex items-center justify-center mb-6 animate-float">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
