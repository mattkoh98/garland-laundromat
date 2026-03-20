import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";

const LocationSelector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center">
      <div className="max-w-5xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Location
          </h1>
          <p className="text-lg text-muted-foreground">
            Select your nearest LaundroWell to view local services, specials, and contact info.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/san-antonio" className="group">
            <Card className="h-full border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Texas</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">San Antonio</h2>
                <p className="text-muted-foreground">107 Latch Dr #110, San Antonio, TX 78213</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/garland" className="group">
            <Card className="h-full border-border hover:border-primary/50 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Texas</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Garland</h2>
                <p className="text-muted-foreground">2006 W Buckingham Rd, Garland, TX 75042</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;

