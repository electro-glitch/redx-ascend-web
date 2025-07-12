import { Calendar, MapPin, ExternalLink, Users, Mountain, Heart } from "lucide-react";
import Navigation from "../components/Navigation";
import eventHiking from "../assets/event-hiking.jpg";
import eventSocialService from "../assets/event-social-service.jpg"; 
import eventClimbing from "../assets/event-climbing.jpg";

const Events = () => {
  const events = [
    {
      title: "Himalayan Base Camp Trek 2024",
      startDate: "2024-03-15",
      endDate: "2024-03-25", 
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-himalayan-trek",
      description: "Join us for an epic 10-day journey to the Himalayas. Experience breathtaking views, challenge your limits, and bond with fellow adventurers.",
      location: "Himalayas, Nepal",
      maxParticipants: 25,
      image: eventHiking
    },
    {
      title: "Community School Building Project",
      startDate: "2024-02-20",
      endDate: "2024-02-24",
      category: "Social Service", 
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-school-building",
      description: "Help us build classrooms for underprivileged children in rural areas. This intensive project combines construction work with educational activities.",
      location: "Rural Maharashtra",
      maxParticipants: 40,
      image: eventSocialService
    },
    {
      title: "Rock Climbing & Rappelling Workshop",
      startDate: "2024-02-10",
      endDate: "2024-02-11",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-climbing-workshop",
      description: "Learn the fundamentals of rock climbing and rappelling from certified instructors. Perfect for beginners and intermediate climbers.",
      location: "Lonavala, Maharashtra", 
      maxParticipants: 30,
      image: eventClimbing
    },
    {
      title: "Blood Donation Drive",
      startDate: "2024-01-28",
      endDate: "2024-01-28",
      category: "Social Service",
      registrationOpen: false,
      registrationLink: "",
      description: "Our monthly blood donation drive in partnership with local hospitals. Every donation can save up to 3 lives.",
      location: "College Campus",
      maxParticipants: 100,
      image: eventSocialService
    },
    {
      title: "Night Trail Running Challenge",
      startDate: "2024-02-03",
      endDate: "2024-02-03",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-night-trail",
      description: "Test your endurance in this challenging 15km night trail run through forest paths. Headlamps provided for all participants.",
      location: "Sanjay Gandhi National Park",
      maxParticipants: 50,
      image: eventHiking
    },
    {
      title: "Digital Literacy Program for Seniors",
      startDate: "2024-02-05",
      endDate: "2024-02-09",
      category: "Social Service",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-digital-literacy",
      description: "Teach basic computer skills and internet usage to senior citizens. A rewarding experience helping bridge the digital divide.",
      location: "Community Center, Mumbai",
      maxParticipants: 20,
      image: eventSocialService
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryIcon = (category) => {
    return category === 'Adventure' ? <Mountain className="w-5 h-5" /> : <Heart className="w-5 h-5" />;
  };

  const getCategoryColor = (category) => {
    return category === 'Adventure' ? 'text-primary' : 'text-accent';
  };

  const EventCard = ({ event }) => (
    <div className="bg-black border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-red-500">
      <div className="flex">
        {/* Event Image */}
        <div className="w-1/3 flex-shrink-0">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Event Content */}
        <div className="flex-1 p-6">
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
              {formatDate(event.startDate)}
              {event.startDate !== event.endDate && ` - ${formatDate(event.endDate)}`}
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
                <span className="font-inter text-accent font-medium tracking-wider">SOCIAL SERVICE</span>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;