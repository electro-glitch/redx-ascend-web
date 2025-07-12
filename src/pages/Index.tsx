import { useState, useEffect } from "react";
import LandingAnimation from "../components/LandingAnimation";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Check if user has seen the animation before (in this session)
    const hasSeenAnimation = sessionStorage.getItem('redx-animation-seen');
    if (hasSeenAnimation) {
      setShowAnimation(false);
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    sessionStorage.setItem('redx-animation-seen', 'true');
  };

  return (
    <div className="min-h-screen bg-background">
      {showAnimation && (
        <LandingAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      
      <Navigation />
      <Hero />
      <AboutSection />
    </div>
  );
};

export default Index;
