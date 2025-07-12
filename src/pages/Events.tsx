import { Calendar, MapPin, ExternalLink, Clock, Users, Mountain, Heart } from "lucide-react";
import Navigation from "../components/Navigation";

const Events = () => {
  const events = [
    {
      title: "Himalayan Base Camp Trek 2024",
      startDate: "2024-03-15",
      endDate: "2024-03-25", 
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-himalayan-trek",
      description: "Join us for an epic 10-day journey to the Himalayas. Experience breathtaking views, challenge your limits, and bond with fellow adventurers while trekking to the base camp at 4,200m altitude.",
      location: "Himalayas, Nepal",
      maxParticipants: 25
    },
    {
      title: "Community School Building Project",
      startDate: "2024-02-20",
      endDate: "2024-02-24",
      category: "Social Service", 
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-school-building",
      description: "Help us build classrooms for underprivileged children in rural areas. This 5-day intensive project combines construction work with educational activities for local children.",
      location: "Rural Maharashtra",
      maxParticipants: 40
    },
    {
      title: "Rock Climbing & Rappelling Workshop",
      startDate: "2024-02-10",
      endDate: "2024-02-11",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-climbing-workshop",
      description: "Learn the fundamentals of rock climbing and rappelling from certified instructors. Perfect for beginners and intermediate climbers looking to improve their technique.",
      location: "Lonavala, Maharashtra", 
      maxParticipants: 30
    },
    {
      title: "Blood Donation Drive",
      startDate: "2024-01-28",
      endDate: "2024-01-28",
      category: "Social Service",
      registrationOpen: false,
      registrationLink: "",
      description: "Our monthly blood donation drive in partnership with local hospitals. Every donation can save up to 3 lives. Light refreshments provided for all donors.",
      location: "College Campus",
      maxParticipants: 100
    },
    {
      title: "Night Trail Running Challenge",
      startDate: "2024-02-03",
      endDate: "2024-02-03",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-night-trail",
      description: "Test your endurance in this challenging 15km night trail run through forest paths. Headlamps provided. Categories for beginners and advanced runners.",
      location: "Sanjay Gandhi National Park",
      maxParticipants: 50
    },
    {
      title: "Digital Literacy Program for Seniors",
      startDate: "2024-02-05",
      endDate: "2024-02-09",
      category: "Social Service",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-digital-literacy",
      description: "Teach basic computer skills and internet usage to senior citizens. A rewarding experience helping bridge the digital divide in our community.",
      location: "Community Center, Mumbai",
      maxParticipants: 20
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
    <div className="adventure-card group hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`flex items-center gap-2 ${getCategoryColor(event.category)}`}>
          {getCategoryIcon(event.category)}
          <span className="font-bebas text-sm tracking-wider">{event.category.toUpperCase()}</span>
        </div>
        {event.registrationOpen && (
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-oswald">
            OPEN
          </span>
        )}
      </div>

      <h3 className="font-oswald text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
        {event.title}
      </h3>

      <div className="space-y-2 mb-4 text-sm text-foreground/80">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-roboto">
            {formatDate(event.startDate)}
            {event.startDate !== event.endDate && ` - ${formatDate(event.endDate)}`}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-roboto">{event.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <span className="font-roboto">Max {event.maxParticipants} participants</span>
        </div>
      </div>

      <p className="font-roboto text-foreground/90 leading-relaxed mb-6 text-sm">
        {event.description}
      </p>

      {event.registrationOpen && event.registrationLink ? (
        <a 
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-adventure inline-flex items-center gap-2 w-full justify-center"
        >
          Register Now
          <ExternalLink size={16} />
        </a>
      ) : (
        <div className="text-center py-3 px-6 bg-muted text-muted-foreground rounded-lg font-oswald">
          Registration Closed
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-5xl md:text-6xl font-black heading-adventure mb-6">
              EVENTS
            </h1>
            <p className="font-roboto text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for thrilling adventures and meaningful social service projects. Every event is an opportunity to grow, serve, and create lasting memories.
            </p>

            {/* Category filters */}
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Mountain className="w-5 h-5 text-primary" />
                <span className="font-bebas text-primary tracking-wider">ADVENTURE</span>
              </div>
              <div className="flex items-center gap-2 adventure-card px-4 py-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="font-bebas text-accent tracking-wider">SOCIAL SERVICE</span>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="adventure-card max-w-2xl mx-auto">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">
                WANT TO SUGGEST AN EVENT?
              </h3>
              <p className="font-roboto text-foreground/80 mb-6">
                Have an idea for an adventure or social service project? We'd love to hear from you! 
                Your suggestions help us create better experiences for everyone.
              </p>
              <a 
                href="mailto:events@redx.club" 
                className="btn-outline-adventure"
              >
                Contact Event Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;