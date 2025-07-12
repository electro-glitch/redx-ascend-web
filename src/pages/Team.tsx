import { Linkedin, Award, Users } from "lucide-react";
import Navigation from "../components/Navigation";

const Team = () => {
  const boardMembers = [
    {
      name: "Arjun Sharma",
      position: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Leading RedX with vision and passion for adventure. Expert mountaineer with 5+ years of community service experience.",
      linkedin: "https://linkedin.com/in/arjunsharma"
    },
    {
      name: "Priya Patel", 
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic planner and social service coordinator. Specializes in large-scale community outreach programs and team management.",
      linkedin: "https://linkedin.com/in/priyapatel"
    },
    {
      name: "Rohit Kumar",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", 
      bio: "Detail-oriented organizer ensuring smooth operations. Background in event management and administrative excellence.",
      linkedin: "https://linkedin.com/in/rohitkumar"
    },
    {
      name: "Sneha Gupta",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Financial strategist with expertise in budget management and fundraising. Ensures sustainable growth for all initiatives.",
      linkedin: "https://linkedin.com/in/snehagupta"
    },
    {
      name: "Vikram Singh",
      position: "Adventure Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Certified adventure sports instructor and safety expert. Leads all outdoor expeditions with focus on skill development.",
      linkedin: "https://linkedin.com/in/vikramsingh"
    },
    {
      name: "Kavya Reddy",
      position: "Social Service Head", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about social change with extensive NGO experience. Coordinates impactful community service projects.",
      linkedin: "https://linkedin.com/in/kavyareddy"
    }
  ];

  const subHeads = [
    {
      name: "Aditya Mehta",
      position: "Media & Documentation Head",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      bio: "Creative visual storyteller capturing RedX's journey. Professional photographer specializing in adventure and documentary photography.",
      linkedin: "https://linkedin.com/in/adityamehta"
    },
    {
      name: "Isha Jain",
      position: "Training Coordinator",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face", 
      bio: "Certified trainer in leadership development and adventure skills. Designs comprehensive training programs for member growth.",
      linkedin: "https://linkedin.com/in/ishajain"
    },
    {
      name: "Karthik Iyer",
      position: "Logistics Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f21?w=400&h=400&fit=crop&crop=face",
      bio: "Operations expert ensuring seamless event execution. Specializes in resource planning and safety protocol implementation.",
      linkedin: "https://linkedin.com/in/karthikiyer"
    },
    {
      name: "Neha Agarwal", 
      position: "Community Relations Head",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Building bridges between RedX and community partners. Expert in stakeholder management and public relations.",
      linkedin: "https://linkedin.com/in/nehaagarwal"
    },
    {
      name: "Siddharth Malhotra",
      position: "Equipment & Safety Officer",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      bio: "Safety-first approach to all adventures. Certified in wilderness first aid and equipment maintenance specialist.",
      linkedin: "https://linkedin.com/in/siddharthmalhotra"
    },
    {
      name: "Rhea Kapoor",
      position: "Fundraising Coordinator",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic fundraiser with proven track record. Builds sustainable financial partnerships for RedX's growth and impact.",
      linkedin: "https://linkedin.com/in/rheakapoor"
    }
  ];

  const TeamCard = ({ member, isBoard = false }) => (
    <div className="adventure-card group hover:scale-105 transition-all duration-300">
      <div className="relative mb-4">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {isBoard && (
          <div className="absolute top-3 right-3">
            <Award className="w-6 h-6 text-primary" />
          </div>
        )}
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
                <TeamCard key={index} member={member} isBoard={true} />
              ))}
            </div>
          </div>

          {/* Sub-heads Section */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="font-bebas text-4xl text-primary tracking-wider">DEPARTMENT HEADS</h2>
              <Users className="w-8 h-8 text-primary" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subHeads.map((member, index) => (
                <TeamCard key={index} member={member} isBoard={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;