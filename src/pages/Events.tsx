import { Calendar, ExternalLink, Mountain, Heart, Users } from "lucide-react";
import Navigation from "../components/Navigation";

const Events = () => {
  const adventureEvents = [
    {
      title: "Himalayan Base Camp Trek",
      startDate: "May",
      endDate: "June",
      category: "Adventure",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-himalayan-trek",
      description:
        "Join us for our annual Himalayan trek. Experience breathtaking views, challenge your limits, and bond with fellow adventurers.",
      location: "Himalayas, Nepal",
      maxParticipants: 25,
    },
    {
      title: "Membership Drive",
      startDate: "March",
      endDate: "April",
      category: "Club",
      registrationOpen: true,
      registrationLink: "https://forms.google.com/register-membership",
      description:
        "Get your RedX Membership Card and unlock discounts at top restaurants, gyms, salons, and more. Limited time offer!",
      location: "College Campus",
      maxParticipants: 200,
    },
  ];

  const dishaEventSlides = [
    {
      title: "Cleanup Drive",
      description:
        "Organized at beaches, hillsides, and urban spots to promote environmental awareness and collective responsibility.",
    },
    {
      title: "Teaching Underprivileged Children",
      description:
        "Volunteers engage in weekly educational sessions with children from underserved communities, improving literacy and confidence.",
    },
    {
      title: "Clothes & Book Donation Camp",
      description:
        "Collected essentials are distributed to NGOs, schools, and shelters across the city.",
    },
    {
      title: "Health & Awareness Drives",
      description:
        "From menstrual hygiene workshops to mental health campaigns, we aim to educate and uplift local communities.",
    },
  ];

  const formatDate = (start, end) => {
    return start === end ? `${start}` : `${start} - ${end}`;
  };

  const getCategoryIcon = (category) => {
    if (category === "Adventure") return <Mountain className="w-5 h-5" />;
    if (category === "Social Service") return <Heart className="w-5 h-5" />;
    return <Users className="w-5 h-5" />;
  };

  const EventCard = ({ event }) => (
    <div className="bg-black border border-border rounded-lg p-6">
      <div className="flex items-start justify-between mb-3">
        <div className={`flex items-center gap-2 text-primary`}>
          {getCategoryIcon(event.category)}
          <span className="font-inter text-sm font-medium tracking-wider">
            {event.category.toUpperCase()}
          </span>
        </div>
        {event.registrationOpen && (
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-inter font-medium">
            OPEN
          </span>
        )}
      </div>

      <h3 className="font-inter text-xl font-bold text-red-500 mb-2">{event.title}</h3>

      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-red-500" />
        <span className="font-inter text-red-500 font-medium">
          {formatDate(event.startDate, event.endDate)}
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
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-inter text-5xl md:text-6xl font-black text-primary mb-6">
              EVENTS
            </h1>
            <p className="font-inter text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for thrilling adventures and impactful social projects. Every event is a step toward growth and purpose.
            </p>
          </div>

          {/* Adventure & Club Events */}
          <div className="space-y-6 mb-16">
            {adventureEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>

          {/* Disha Events Slider */}
          <div className="text-center">
            <h2 className="font-inter text-4xl font-bold text-accent mb-8">DISHA EVENTS</h2>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {dishaEventSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className="adventure-card border border-accent rounded-xl p-6 text-left"
                >
                  <h3 className="font-inter text-xl font-bold text-accent mb-2">
                    {slide.title}
                  </h3>
                  <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
