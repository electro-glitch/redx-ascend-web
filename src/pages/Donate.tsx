import { Heart, Target, Users, Zap } from "lucide-react";
import Navigation from "../components/Navigation";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-32"> {/* Increased bottom padding to prevent clipping */}
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-inter text-5xl md:text-6xl font-black text-primary mb-6">
              SUPPORT OUR SOCIAL MISSION
            </h1>
            <p className="font-inter text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Your contribution helps us create real, grassroots-level change. From educating children to organizing cleanups, every bit of support fuels our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Why Donate */}
            <div>
              <h2 className="font-inter text-3xl text-primary mb-8 font-bold tracking-wider">
                WHY YOUR SUPPORT MATTERS
              </h2>

              <div className="space-y-6">
                {[{
                  icon: <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />,
                  title: "Teaching Underprivileged Children",
                  desc: "Our volunteers conduct regular teaching sessions for children from underserved communities, helping bridge educational gaps."
                }, {
                  icon: <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />,
                  title: "Clean-Up Drives",
                  desc: "We organize clean-up campaigns in public spaces, raising awareness about sanitation and environmental responsibility."
                }, {
                  icon: <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />,
                  title: "Tree Plantations",
                  desc: "From campuses to local parks, we conduct plantation drives that promote sustainability and community engagement."
                }, {
                  icon: <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />,
                  title: "Trek-Based Campaigns",
                  desc: "We combine our love for adventure with purpose—organizing treks that raise awareness for social and environmental causes."
                }].map(({ icon, title, desc }, i) => (
                  <div key={i} className="adventure-card">
                    <div className="flex items-start gap-4">
                      {icon}
                      <div>
                        <h3 className="font-inter text-lg font-bold text-primary mb-2">{title}</h3>
                        <p className="font-inter text-foreground/80 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Donation Portal */}
            <div>
              <div className="adventure-card sticky top-24">
                <div className="text-center mb-8">
                  <h2 className="font-inter text-3xl text-primary mb-4 font-bold tracking-wider">
                    SUPPORT SOCIAL CHANGE
                  </h2>
                  <p className="font-inter text-foreground/80 leading-relaxed">
                    Your donation helps us keep these projects alive. All funds go directly towards local events, materials, and outreach efforts led by students.
                  </p>
                </div>

                {/* Ketto Button (Defunct) */}
                <div className="w-full mb-6 bg-muted text-muted-foreground px-4 py-3 rounded-lg text-center font-inter font-medium cursor-not-allowed opacity-70">
                  Donate via Ketto (coming soon)
                </div>

                {/* Alternative Support Methods */}
                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-inter text-primary mb-3 text-center font-medium">OTHER WAYS TO SUPPORT</h4>
                  <div className="space-y-2 text-sm font-inter text-foreground/80">
                    <p>• <strong>Volunteer:</strong> Join our teaching sessions and cleanup drives</p>
                    <p>• <strong>Partner:</strong> Collaborate with us on campus or community projects</p>
                    <p>• <strong>Share:</strong> Help spread our mission on social media</p>
                    <p>• <strong>Connect:</strong> Reach out with ideas and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="adventure-card max-w-2xl mx-auto">
              <h3 className="font-inter text-2xl text-primary mb-4 font-bold tracking-wider">
                HAVE QUESTIONS?
              </h3>
              <p className="font-inter text-foreground/80 mb-6">
                Want to know more about how we use funds or how you can get involved? Feel free to reach out—we’d love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:finance@redx.club" className="btn-outline-adventure">
                  Email Finance Team
                </a>
                <a href="tel:+919876543210" className="btn-outline-adventure">
                  Call: +91 98765 43210
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Donate;
