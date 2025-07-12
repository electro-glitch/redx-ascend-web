import { Store, Coffee, Gamepad2, Cake, MapPin, ExternalLink, Star } from "lucide-react";
import Navigation from "../components/Navigation";

const Partners = () => {
  const partners = [
    {
      name: "Vito's",
      category: "Restaurant",
      icon: <Coffee className="w-6 h-6" />,
      description: "Premium pizzas, pastas, Italian, pastries and desserts",
      location: "Near Canara Mall, Manipal",
      website: "https://www.zomato.com/manipal/vitos-pizzeria-cafe-tiger-circle",
      offer: "10% off on all meals"
    },
    {
      name: "Elite Gaming Arena", 
      category: "Game Parlor",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "State-of-the-art gaming facility with latest consoles and PC setups.",
      location: "Tech Park, Pune",
      website: "https://elitegaming.com",
      offer: "Free gaming hours for events"
    },
    {
      name: "Glow Beauty Salon",
      category: "Salon",
      icon: <Star className="w-6 h-6" />,
      description: "Professional grooming and beauty services for special occasions.",
      location: "Fashion Street, Mumbai",
      website: "https://glowbeauty.com",
      offer: "30% off on packages"
    },
    {
      name: "Sweet Dreams Bakery",
      category: "Desserts",
      icon: <Cake className="w-6 h-6" />,
      description: "Custom cakes and desserts for celebrations and events.",
      location: "Central Plaza, Delhi",
      website: "https://sweetdreams.com",
      offer: "Free delivery for bulk orders"
    },
    {
      name: "The Hungry Lion",
      category: "Restaurant", 
      icon: <Coffee className="w-6 h-6" />,
      description: "Multi-cuisine restaurant with outdoor seating perfect for team gatherings.",
      location: "Marina Beach, Chennai",
      website: "https://hungrylion.com",
      offer: "Group booking discounts"
    },
    {
      name: "VR Zone",
      category: "Game Parlor",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "Virtual reality gaming experience with adventure and team-building games.",
      location: "Cyber City, Gurgaon",
      website: "https://vrzone.com", 
      offer: "Special rates for clubs"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Restaurant': return 'text-orange-400';
      case 'Salon': return 'text-pink-400';
      case 'Game Parlor': return 'text-blue-400';
      case 'Desserts': return 'text-yellow-400';
      default: return 'text-primary';
    }
  };

  const PartnerCard = ({ partner }: { partner: any }) => (
    <div className="adventure-card group hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`flex items-center gap-2 ${getCategoryColor(partner.category)}`}>
          {partner.icon}
          <span className="font-inter text-sm font-medium tracking-wide">{partner.category.toUpperCase()}</span>
        </div>
        <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-inter font-medium">
          PARTNER
        </div>
      </div>

      <h3 className="font-inter text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
        {partner.name}
      </h3>

      <div className="space-y-2 mb-4 text-sm text-foreground/80">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-inter">{partner.location}</span>
        </div>
      </div>

      <p className="font-inter text-foreground/90 leading-relaxed mb-4 text-sm">
        {partner.description}
      </p>

      <div className="bg-muted p-3 rounded-lg mb-4">
        <div className="text-primary font-inter font-semibold text-sm mb-1">Special Offer:</div>
        <div className="text-foreground/80 font-inter text-sm">{partner.offer}</div>
      </div>

      <a 
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-adventure inline-flex items-center gap-2 w-full justify-center"
      >
        Visit Website
        <ExternalLink size={16} />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-inter text-5xl md:text-6xl font-black text-primary mb-6">
              OUR PARTNERS
            </h1>
            <p className="font-inter text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Supporting businesses that support our mission. These amazing partners offer special benefits to our members and community.
            </p>

            {/* Category filters */}
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Coffee className="w-5 h-5 text-orange-400" />
                <span className="font-inter text-orange-400 font-medium tracking-wider">RESTAURANTS</span>
              </div>
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Star className="w-5 h-5 text-pink-400" />
                <span className="font-inter text-pink-400 font-medium tracking-wider">SALONS</span>
              </div>
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Gamepad2 className="w-5 h-5 text-blue-400" />
                <span className="font-inter text-blue-400 font-medium tracking-wider">GAME PARLORS</span>
              </div>
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Cake className="w-5 h-5 text-yellow-400" />
                <span className="font-inter text-yellow-400 font-medium tracking-wider">DESSERTS</span>
              </div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="adventure-card max-w-2xl mx-auto">
              <h3 className="font-inter text-2xl text-primary mb-4 font-bold tracking-wider">
                BECOME A PARTNER
              </h3>
              <p className="font-inter text-foreground/80 mb-6">
                Join our network of socially conscious businesses. Partner with RedX to support community initiatives while growing your business.
              </p>
              <a 
                href="mailto:partnerships@redx.club" 
                className="btn-outline-adventure"
              >
                Contact Partnership Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
