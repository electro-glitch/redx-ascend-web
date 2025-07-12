import { useState, useEffect } from "react";

interface LandingAnimationProps {
  onAnimationComplete: () => void;
}

const LandingAnimation = ({ onAnimationComplete }: LandingAnimationProps) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 2000);
    const timer3 = setTimeout(() => {
      setAnimationPhase(3);
      onAnimationComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  if (animationPhase >= 3) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Logo Animation */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          animationPhase >= 1 ? 'logo-entrance' : 'opacity-0 scale-50'
        }`}
      >
        <img 
          src="/lovable-uploads/3f19ce14-d0cf-47f7-a55f-a28ba69feace.png" 
          alt="RedX Logo" 
          className="w-64 h-auto md:w-80"
        />
      </div>

      {/* Mountain expansion effect overlay */}
      {animationPhase >= 2 && (
        <div 
          className="absolute inset-0 mountain-expand"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
          }}
        />
      )}
    </div>
  );
};

export default LandingAnimation;