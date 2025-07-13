import { Target, Eye, History, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="mb-20 text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold heading-adventure mb-8">
            WHO WE ARE
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-roboto text-lg text-foreground/90 leading-relaxed mb-6">
              RedX is more than just a college club – we're a brotherhood and sisterhood united by our passion for adventure and commitment to social service. Founded in 2004, RedX has grown into a well-established community of over 500 members, including an active alumni network.
            </p>
            <p className="font-roboto text-lg text-foreground/80 leading-relaxed">
              Our members believe that personal growth through outdoor exploration directly fuels meaningful impact. From mountain trails to village classrooms, our journey blends thrill with purpose.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="adventure-card text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              To create a generation of leaders who serve society with the same passion they bring to conquering challenges.
            </p>
          </div>

          <div className="adventure-card text-center">
            <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">What We Do</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              We organize treks, community service drives, and awareness campaigns that leave lasting impact.
            </p>
          </div>

          <div className="adventure-card text-center">
            <History className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">Our Legacy</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              Two decades of action, hundreds of events, and a thriving network of changemakers and explorers.
            </p>
          </div>

          <div className="adventure-card text-center">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">Our History</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              Started in 2004 by a small group of students, RedX has evolved into one of the most active college clubs on campus.
            </p>
          </div>
        </div>

        {/* Departments Section */}
        <div className="text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold heading-adventure mb-12">
            OUR DEPARTMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">ADVENTURE-X</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Organizes treks, climbs, and survival challenges that test endurance, teamwork, and resilience—bringing our members closer to nature and to themselves.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">DISHA</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                The heart of our social work—Disha drives educational outreach, donation drives, clean-up campaigns, and other community service initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
