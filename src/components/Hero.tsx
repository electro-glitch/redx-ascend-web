import { ArrowRight, Mountain, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center content-reveal">
        <div className="max-w-4xl mx-auto">
          {/* Main logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3f19ce14-d0cf-47f7-a55f-a28ba69feace.png" 
              alt="RedX Logo" 
              className="w-32 h-auto mx-auto mb-6 red-glow"
            />
          </div>

          {/* Hero tagline */}
          <p className="font-bebas text-2xl md:text-3xl text-accent mb-4 tracking-wider">
            ADVENTURE • SOCIAL SERVICE • LEGACY
          </p>
          
          <p className="font-roboto text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where courage meets compassion. Join us in our mission to make a difference through adventure and social service.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/events" className="btn-adventure group">
              Explore Events
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="/team" className="btn-outline-adventure">
              Meet Our Team
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="adventure-card text-center">
              <Mountain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-oswald text-xl font-semibold text-primary mb-2">Adventure</h3>
              <p className="text-foreground/80 text-sm font-roboto">Conquering peaks and pushing boundaries</p>
            </div>
            <div className="adventure-card text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-oswald text-xl font-semibold text-primary mb-2">Service</h3>
              <p className="text-foreground/80 text-sm font-roboto">Making a difference in our community</p>
            </div>
            <div className="adventure-card text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-oswald text-xl font-semibold text-primary mb-2">Legacy</h3>
              <p className="text-foreground/80 text-sm font-roboto">Building tomorrow's leaders today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
