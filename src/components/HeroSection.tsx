import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { HeroCarousel } from "./HeroCarousel";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentCity: "",
    destination: "",
    fromDate: "",
    toDate: "",
    duration: "",
    budget: "",
    travelers: "",
    transport: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const webhookUrl = "https://adityamish89.app.n8n.cloud/webhook/d5523f8f-c6f0-48f7-a714-8f8623fa88fe";
    
    console.log("Submitting form data:", formData);
    console.log("Webhook URL:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
        mode: "no-cors", // Changed to no-cors to bypass CORS restrictions
      });

      console.log("Response received (no-cors mode)");
      
      // With no-cors mode, we can't read the response but can verify the request was sent
      toast({
        title: "Request Sent! ✓",
        description: "Your travel details have been sent. You'll receive your personalized itinerary via email shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        currentCity: "",
        destination: "",
        fromDate: "",
        toDate: "",
        duration: "",
        budget: "",
        travelers: "",
        transport: "",
      });
    } catch (error: any) {
      console.error("Error sending data to webhook:", error);
      
      // Provide specific error message based on error type
      let errorMessage = "Failed to send your details. ";
      
      if (error.message === "Failed to fetch") {
        errorMessage += "This may be due to network issues or webhook configuration. Please ensure your n8n webhook has CORS enabled.";
      } else {
        errorMessage += error.message || "Please try again.";
      }
      
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Carousel Background */}
      <HeroCarousel />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium text-white">AI-Powered Travel Planning</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg leading-tight">
              Explore Smarter, Travel Better with Ghumo Smart 🌎
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Let AI plan your next adventure — from flights and stays to attractions and restaurants, all
              customized for you.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-strong p-8 md:p-12 animate-slide-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentCity">Current City *</Label>
                <Input
                  id="currentCity"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  required
                  placeholder="New York"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  placeholder="Paris"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fromDate">From Date *</Label>
                <Input
                  id="fromDate"
                  name="fromDate"
                  type="date"
                  value={formData.fromDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="toDate">To Date *</Label>
                <Input
                  id="toDate"
                  name="toDate"
                  type="date"
                  value={formData.toDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (days) *</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  placeholder="7"
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range *</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="₹50,000 - ₹1,00,000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelers">Number of Travelers *</Label>
                <Input
                  id="travelers"
                  name="travelers"
                  type="number"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                  placeholder="2"
                  min="1"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="transport">Mode of Transport *</Label>
                <select
                  id="transport"
                  name="transport"
                  value={formData.transport}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select transport mode</option>
                  <option value="Air">Air</option>
                  <option value="Train">Train</option>
                  <option value="Bus">Bus</option>
                  <option value="Car">Car</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-8 bg-coral hover:bg-coral/90 text-coral-foreground text-lg py-6 rounded-xl shadow-medium hover:shadow-strong transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Your Itinerary...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate My Itinerary
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
