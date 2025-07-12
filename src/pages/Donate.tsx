import { Heart, ExternalLink, Target, Users, Zap, Shield } from "lucide-react";
import Navigation from "../components/Navigation";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-5xl md:text-6xl font-black heading-adventure mb-6">
              SUPPORT OUR MISSION
            </h1>
            <p className="font-roboto text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Your contribution fuels our adventures and amplifies our social impact. Every donation helps us reach new heights while lifting communities up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Why Donate */}
            <div>
              <h2 className="font-bebas text-3xl text-primary mb-8 tracking-wider">
                WHY YOUR SUPPORT MATTERS
              </h2>
              
              <div className="space-y-6">
                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-oswald text-lg font-bold text-primary mb-2">Adventure Equipment</h3>
                      <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                        High-quality safety gear, climbing equipment, and camping supplies ensure our members can pursue adventures safely and confidently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-oswald text-lg font-bold text-primary mb-2">Community Projects</h3>
                      <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                        Funding for education initiatives, healthcare camps, environmental projects, and infrastructure development in underserved communities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-oswald text-lg font-bold text-primary mb-2">Member Development</h3>
                      <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                        Training workshops, certification courses, and leadership development programs that transform students into effective change-makers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-oswald text-lg font-bold text-primary mb-2">Emergency Response</h3>
                      <p className="font-roboto text-foreground/80 text-sm leading-relaxed">
                        Rapid response capabilities for natural disasters, medical emergencies, and crisis situations where RedX can make an immediate impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Statistics */}
              <div className="mt-12">
                <h3 className="font-bebas text-2xl text-primary mb-6 tracking-wider">OUR IMPACT SO FAR</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="adventure-card text-center">
                    <div className="font-orbitron text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="font-roboto text-sm text-foreground/80">Lives Impacted</div>
                  </div>
                  <div className="adventure-card text-center">
                    <div className="font-orbitron text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="font-roboto text-sm text-foreground/80">Projects Completed</div>
                  </div>
                  <div className="adventure-card text-center">
                    <div className="font-orbitron text-3xl font-bold text-primary mb-2">200+</div>
                    <div className="font-roboto text-sm text-foreground/80">Active Members</div>
                  </div>
                  <div className="adventure-card text-center">
                    <div className="font-orbitron text-3xl font-bold text-primary mb-2">₹5L+</div>
                    <div className="font-roboto text-sm text-foreground/80">Funds Raised</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Portal */}
            <div>
              <div className="adventure-card sticky top-24">
                <div className="text-center mb-8">
                  <h2 className="font-bebas text-3xl text-primary mb-4 tracking-wider">
                    DONATE NOW
                  </h2>
                  <p className="font-roboto text-foreground/80 leading-relaxed">
                    Secure donation through Ketto. Your contribution is tax-deductible and goes directly to our mission.
                  </p>
                </div>

                {/* Donation Amount Options */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="font-oswald text-xl font-bold text-primary">₹500</div>
                    <div className="font-roboto text-xs text-foreground/70">Basic Support</div>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="font-oswald text-xl font-bold text-primary">₹1,000</div>
                    <div className="font-roboto text-xs text-foreground/70">Supporter</div>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="font-oswald text-xl font-bold text-primary">₹2,500</div>
                    <div className="font-roboto text-xs text-foreground/70">Advocate</div>
                  </div>
                  <div className="border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="font-oswald text-xl font-bold text-primary">₹5,000</div>
                    <div className="font-roboto text-xs text-foreground/70">Champion</div>
                  </div>
                </div>

                {/* Ketto Donation Button */}
                <a 
                  href="https://www.ketto.org/fundraiser/redx-college-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-adventure w-full mb-6 group"
                >
                  Donate via Ketto
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>

                {/* Security Features */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-oswald text-primary">SECURE & TRUSTED</span>
                  </div>
                  <div className="space-y-2 text-xs font-roboto text-foreground/70 text-center">
                    <p>• SSL encrypted transactions</p>
                    <p>• Tax-deductible under 80G</p>
                    <p>• Transparent fund utilization</p>
                    <p>• Regular impact reports</p>
                  </div>
                </div>

                {/* Alternative Support Methods */}
                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-oswald text-primary mb-3 text-center">OTHER WAYS TO SUPPORT</h4>
                  <div className="space-y-2 text-sm font-roboto text-foreground/80">
                    <p>• <strong>Volunteer:</strong> Join our events and projects</p>
                    <p>• <strong>Partner:</strong> Corporate sponsorship opportunities</p>
                    <p>• <strong>Share:</strong> Spread awareness about our mission</p>
                    <p>• <strong>Connect:</strong> Follow us on social media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16">
            <div className="adventure-card max-w-2xl mx-auto">
              <h3 className="font-bebas text-2xl text-primary mb-4 tracking-wider">
                HAVE QUESTIONS?
              </h3>
              <p className="font-roboto text-foreground/80 mb-6">
                Want to learn more about how your donation will be used? 
                Contact our finance team for detailed information and impact reports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:finance@redx.club" 
                  className="btn-outline-adventure"
                >
                  Email Finance Team
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="btn-outline-adventure"
                >
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