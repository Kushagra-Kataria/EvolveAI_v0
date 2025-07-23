import React, { useEffect, useState } from 'react';
import '../App.css';

const Ourorigin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition,setCursorPosition]= useState({x:0,y:0});
  const [trailDots,setTrailDots]= useState([]);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
   // Mouse tracking for cursor animation
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setCursorPosition(newPosition);
      
      // Create trail effect
      setTrailDots(prevDots => {
        const newDots = [...prevDots, { ...newPosition, id: Date.now() }];
        // Keep only last 8 dots for performance
        return newDots.slice(-8);
      });
    };

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
      <div className="ourorigin-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      />
      
      {/* Trail Dots */}
      {trailDots.map((dot, index) => (
        <div
          key={dot.id}
          className="cursor-trail-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}

      <div className="content-wrapper">
        <div className={`breadcrumb ${isVisible ? 'fade-in' : ''}`}>
          <span className="breadcrumb-text">Our Origin</span>
        </div>
        
        <div className="main-content">
          <div className={`text-section ${isVisible ? 'slide-in-left' : ''}`}>
            <h1 className="main-title">
              <span className="title-word">Evolve AI</span>{' '}
              {/* <span className="title-word gradient-text">AI</span>{' '} */}
              <span className="title-word  gradient-text">A legacy and leap</span>{' '}
              {/* <span className="title-word slide gradient-text">towards future of</span>{' '} */}
              <span className="title-word gradient-text">towards future of</span>{' '}
              <span className="title-word gradient-text">AI</span>
            </h1>
            
            <div className="description">
              <p className="animated-paragraph">
                EvolveAI began its journey as a club consisting of ambitious team 
                members within Chitkara University's Department of Computer Science 
                & Engineering (Artificial Intelligence) in 2021. It is guided by visionaries 
                like Dr. Sushil Kumar Narang and driven by dedicated individuals like Dr. 
                Kamal Deep Garg and Dr. Vandana Sood. EvolveAI aspires to nurture a 
                vibrant community centered around Artificial Intelligence. Our motive is 
                to empower future AI leaders by offering the students exceptional
              </p>
            </div>
          </div>
          
          <div className={`image-section ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="image-container">
              <div className="image-glow"></div>
              <img 
                src="team.jpg" 
                alt="EvolveAI Team at Chitkara University"
                className="team-image"
              />
              <div className="image-overlay">
                <button className="view-button">
                  <span className="button-text">View</span>
                  <div className="button-ripple"></div>
                </button>
              </div>
            </div>
            {/* <p className="image-caption floating-text">Framer</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourorigin;
