import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import parisImage from "@/assets/dest-paris.jpg";
import baliImage from "@/assets/dest-bali.jpg";
import maldivesImage from "@/assets/dest-maldives.jpg";
import dubaiImage from "@/assets/dest-dubai.jpg";
import himachalImage from "@/assets/dest-himachal.jpg";
import switzerlandImage from "@/assets/dest-switzerland.jpg";

const destinations = [
  {
    name: "Paris, France",
    image: parisImage,
    description: "The City of Light and romance",
  },
  {
    name: "Bali, Indonesia",
    image: baliImage,
    description: "Tropical paradise with temples",
  },
  {
    name: "Maldives",
    image: maldivesImage,
    description: "Crystal clear waters and luxury",
  },
  {
    name: "Dubai, UAE",
    image: dubaiImage,
    description: "Modern luxury and architecture",
  },
  {
    name: "Himachal, India",
    image: himachalImage,
    description: "Majestic mountains and serenity",
  },
  {
    name: "Switzerland",
    image: switzerlandImage,
    description: "Alpine beauty and pristine lakes",
  },
];

export const DestinationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places around the world. Let AI plan your perfect journey to these stunning destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <Card
              key={destination.name}
              className="group overflow-hidden border-none shadow-medium hover:shadow-strong transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-2xl font-display font-bold text-white">
                        {destination.name}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm font-medium">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
