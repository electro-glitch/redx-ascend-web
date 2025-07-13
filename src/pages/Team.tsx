import { Linkedin, Award } from "lucide-react";
import Navigation from "../components/Navigation";

const Team = () => {
  const boardMembers = [
    {
      name: "Vyom",
      position: "President",
      image: "",
      bio: "Leading RedX with vision and responsibility for strategic direction and legacy.",
      linkedin: "#"
    },
    {
      name: "Arjun",
      position: "Adventure Head",
      image: "",
      bio: "Certified adventure lead, ensuring safety and thrill in every expedition.",
      linkedin: "#"
    },
    {
      name: "Ajinkya",
      position: "PAV Head",
      image: "",
      bio: "Driving the Projects, Awareness, and Volunteering (PAV) vertical with purpose and commitment.",
      linkedin: "#"
    },
    {
      name: "Akshay",
      position: "Treasurer",
      image: "",
      bio: "Managing RedX's finances with precision and transparency.",
      linkedin: "#"
    },
    {
      name: "Samarth",
      position: "Content Head",
      image: "",
      bio: "Crafting narratives and shaping the voice of RedX through powerful content.",
      linkedin: "#"
    },
    {
      name: "Dhwani",
      position: "DISHA Head",
      image: "",
      bio: "Spearheading our social impact initiatives through DISHA.",
      linkedin: "#"
    },
    {
      name: "Ved",
      position: "Creative Director",
      image: "",
      bio: "Designing the visual identity of RedX with creativity and clarity.",
      linkedin: "#"
    },
    {
      name: "Om",
      position: "HR",
      image: "",
      bio: "Fostering a supportive and inclusive club culture.",
      linkedin: "#"
    },
    {
      name: "Aditya",
      position: "GenSec",
      image: "",
      bio: "Ensuring seamless coordination across the club as the General Secretary.",
      linkedin: "#"
    }
  ];

  const TeamCard = ({ member }) => (
    <div className="adventure-card group hover:scale-105 transition-all duration-300">
      <div className="relative mb-4">
        <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">No Image</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3">
          <Award className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <h3 className="font-oswald text-xl font-bold text-primary mb-1">{member.name}</h3>
      <p className="font-bebas text-accent mb-3 tracking-wide">{member.position}</p>
      <p className="font-roboto text-sm text-foreground/80 leading-relaxed mb-4">
        {member.bio}
      </p>
      
      <a 
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >
        <Linkedin size={18} />
        <span className="font-roboto text-sm">Connect</span>
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
            <h1 className="font-orbitron text-5xl md:text-6xl font-black heading-adventure mb-6">
              OUR TEAM
            </h1>
            <p className="font-roboto text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who drive RedX forward. Our leadership team combines adventure expertise with social service commitment to create meaningful impact.
            </p>
          </div>

          {/* Board Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="font-bebas text-4xl text-primary tracking-wider">BOARD MEMBERS</h2>
              <Award className="w-8 h-8 text-primary" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
