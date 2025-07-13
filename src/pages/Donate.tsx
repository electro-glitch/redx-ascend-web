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
            <h1 className="font-inter text-5xl md:text-6xl font-black text-primary mb-6">
              SUPPORT OUR SOCIAL MISSION
            </h1>
            <p className="font-inter text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Your contribution directly impacts vulnerable communities. Every donation helps us provide education, healthcare, and essential services to those who need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Why Donate */}
            <div>
              <h2 className="font-inter text-3xl text-primary mb-8 font-bold tracking-wider">
                WHY YOUR SUPPORT MATTERS
              </h2>

              <div className="space-y-6">
                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-inter text-lg font-bold text-primary mb-2">Healthcare & Nutrition</h3>
                      <p className="font-inter text-foreground/80 text-sm leading-relaxed">
                        Medical camps, nutrition programs, and health awareness initiatives that directly save lives and improve community wellbeing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-inter text-lg font-bold text-primary mb-2">Education & Literacy</h3>
                      <p className="font-inter text-foreground/80 text-sm leading-relaxed">
                        Building schools, providing educational materials, and running literacy programs for children and adults in underserved communities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-inter text-lg font-bold text-primary mb-2">Community Development</h3>
                      <p className="font-inter text-foreground/80 text-sm leading-relaxed">
                        Infrastructure projects, clean water initiatives, and sustainable development programs that create lasting positive change.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="adventure-card">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-inter text-lg font-bold text-primary mb-2">Emergency Relief</h3>
                      <p className="font-inter text-foreground/80 text-sm leading-relaxed">
                        Rapid response for natural disasters, providing food, shelter, and medical aid to families in crisis situations.
                      </p>
                    </div>
                  </div>
                </div>
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
                    Secure donation through trusted platforms. Your contribution is tax-deductible and goes directly to community welfare projects.
                  </p>
                </div>

                {/* Donation Amount Options */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { amount: "₹500", label: "Basic Support" },
                    { amount: "₹1,000", label: "Supporter" },
                    { amount: "₹2,500", label: "Advocate" },
                    { amount: "₹5,000", label: "Champion" }
                  ].map(({ amount, label }, idx) => (
                    <div key={idx} className="border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                      <div className="font-inter text-xl font-bold text-primary">{amount}</div>
                      <div className="font-inter text-xs text-foreground/70">{label}</div>
                    </div>
                  ))}
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
                    <span className="font-inter text-primary font-medium">SECURE & TRUSTED</span>
                  </div>
                  <div className="space-y-2 text-xs font-inter text-foreground/70 text-center">
                    <p>• SSL encrypted transactions</p>
                    <p>• Tax-deductible under 80G</p>
                    <p>• Transparent fund utilization</p>
                    <p>• Regular impact reports</p>
                  </div>
                </div>

                {/* Alternative Support Methods */}
                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-inter text-primary mb-3 text-center font-medium">OTHER WAYS TO SUPPORT</h4>
                  <div className="space-y-2 text-sm font-inter text-foreground/80">
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
              <h3 className="font-inter text-2xl text-primary mb-4 font-bold tracking-wider">
                HAVE QUESTIONS?
              </h3>
              <p className="font-inter text-foreground/80 mb-6">
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
