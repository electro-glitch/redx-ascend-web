import { Calendar, ExternalLink, Mountain, Heart, Users } from "lucide-react";
import Navigation from "../components/Navigation";
import { useState } from "react";

const Events = () => {
  const adventureEvents = [
    {
      title: "Himalayan Base Camp Trek",
      months: "May - June (Annual)",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-himalayan-trek",
      description: "Join us for our signature Himalayan trek held every summer. Breathtaking landscapes, challenging routes, and unforgettable bonding await.",
      location: "Himalayas"
    },
    {
      title: "Membership Drive",
      months: "March - April (Annual)",
      category: "Club",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-membership-drive",
      description: "Become a part of RedX! Get our exclusive membership card and enjoy discounts across restaurants, gyms, salons, and more.",
      location: "College Campus"
    }
  ];

  const dishaEvents = [
    {
      title: "Cleanup Drive",
      description: "Organized in public areas to promote hygiene and environmental awareness. Join hands to make our city cleaner.",
      location: "Various public spots"
    },
    {
      title: "Teaching Underprivileged Children",
      description: "Regular volunteering sessions in collaboration with NGOs to teach children basic education and digital literacy.",
      location: "Community Centres"
    },
    {
      title: "Blood Donation Drive",
      description: "Monthly drives in partnership with hospitals. Donate blood, save lives.",
      location: "College Campus"
    }
  ];

  const [dishaIndex, setDishaIndex] = useState(0);

  const formatMonths = (months) => months;

  const getCategoryIcon = (category) => {
    if (category === 'Adventure') return <Mountain className="w-5 h-5" />;
    if (category === 'Social Service') return <Heart className="w-5 h-5" />;
    return <Users className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    if (category === 'Adventure') return 'text-primary';
    if (category === 'Social Service') return 'text-accent';
    return 'text-foreground';
  };

  const EventCard = ({ event }) => (
    <div className="bg-black border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-red-500">
      <div className="flex flex-col p-6">
        <div className="flex items-start justify-between mb-3">
          <div className={`flex items-center gap-2 ${getCategoryColor(event.category)}`}>
            {getCategoryIcon(event.category)}
            <span className="font-inter text-sm font-medium tracking-wider">{event.category.toUpperCase()}</span>
          </div>
          {event.registrationOpen && (
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-inter font-medium">
              OPEN
            </span>
          )}
        </div>

        <h3 className="font-inter text-xl font-bold text-red-500 mb-2">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-red-500" />
          <span className="font-inter text-red-500 font-medium">
            {formatMonths(event.months)}
          </span>
        </div>

        <p className="font-inter text-foreground/90 leading-relaxed mb-4 text-sm">
          {event.description}
        </p>

        {event.registrationOpen && event.registrationLink ? (
          <a 
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-inter font-medium hover:bg-red-600 transition-colors"
          >
            Register Now
            <ExternalLink size={16} />
          </a>
        ) : (
          <div className="inline-block py-2 px-4 bg-muted text-muted-foreground rounded-lg font-inter">
            Registration Closed
          </div>
        )}
      </div>
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
              EVENTS
            </h1>
            <p className="font-inter text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for thrilling adventures and meaningful social service projects. Every event is an opportunity to grow, serve, and create lasting memories.
            </p>

            {/* Category filters */}
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Mountain className="w-5 h-5 text-primary" />
                <span className="font-inter text-primary font-medium tracking-wider">ADVENTURE</span>
              </div>
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-inter text-accent font-medium tracking-wider">DISHA</span>
              </div>
            </div>
          </div>

          {/* Adventure & Club Events */}
          <div className="space-y-6 mb-16">
            {adventureEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>

          {/* DISHA Events - Slider */}
          <div className="mb-20 text-center">
            <h2 className="font-inter text-3xl font-bold text-accent mb-6 tracking-widest">DISHA INITIATIVES</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-black border border-border p-6 rounded-lg">
                <h3 className="text-xl font-bold text-accent mb-2">{dishaEvents[dishaIndex].title}</h3>
                <p className="text-sm text-foreground/80 mb-2">{dishaEvents[dishaIndex].description}</p>
                <p className="text-xs text-muted-foreground">Location: {dishaEvents[dishaIndex].location}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setDishaIndex((dishaIndex - 1 + dishaEvents.length) % dishaEvents.length)}
                  className="btn-outline-adventure px-4"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setDishaIndex((dishaIndex + 1) % dishaEvents.length)}
                  className="btn-outline-adventure px-4"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;
