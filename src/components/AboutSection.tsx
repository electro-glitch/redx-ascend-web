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
              RedX is more than just a college club – we're a brotherhood and sisterhood united by our passion for adventure and commitment to social service. Founded on the principles of courage, compassion, and community impact, we bridge the gap between thrilling adventures and meaningful social work.
            </p>
            <p className="font-roboto text-lg text-foreground/80 leading-relaxed">
              Our members are changemakers who believe that personal growth through adventure activities directly translates to better community service. Every mountain we climb strengthens our resolve to lift others up.
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
              We organize adventure expeditions, community service projects, and leadership development programs that transform lives.
            </p>
          </div>

          <div className="adventure-card text-center">
            <History className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">Our Legacy</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              Five years of impactful service, countless lives touched, and a legacy of excellence in both adventure and social work.
            </p>
          </div>

          <div className="adventure-card text-center">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-oswald text-xl font-bold text-primary mb-3">Our History</h3>
            <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
              Born from a small group of dreamers in 2019, we've grown into a 200+ member organization making real change.
            </p>
          </div>
        </div>

        {/* Departments Section */}
        <div className="text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold heading-adventure mb-12">
            OUR DEPARTMENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">ADVENTURE SPORTS</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Organizes trekking expeditions, rock climbing, rappelling, and outdoor adventure activities that build physical and mental resilience.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">SOCIAL SERVICE</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Coordinates community outreach programs, educational initiatives, and humanitarian projects that create lasting social impact.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">MEDIA & DOCUMENTATION</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Captures and shares our journey through photography, videography, and content creation, inspiring others to join our cause.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">LOGISTICS & PLANNING</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Ensures seamless execution of all events through meticulous planning, resource management, and safety coordination.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">FINANCE & FUNDRAISING</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Manages club finances and organizes fundraising initiatives to support our adventures and social service projects.
              </p>
            </div>

            <div className="adventure-card">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">TRAINING & DEVELOPMENT</h3>
              <p className="font-roboto text-foreground/80 leading-relaxed">
                Provides skill development workshops, leadership training, and personal growth programs for all members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;