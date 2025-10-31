import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ Added for route detection

const CustomCursor = () => {
  const location = useLocation(); // ✅ Get current route path
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("Aayan"); // ✅ Dynamic text

  // ✅ Change text according to route
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCursorText("Aayan");
        break;
      case "/skills":
        setCursorText("My Skills");
        break;
      case "/about":
        setCursorText("About");
        break;
      case "/project":
        setCursorText("My Projects");
        break;
      case "/contact":
        setCursorText("Contact");
        break;
      default:
        setCursorText("Aayan");
    }
  }, [location]);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.onclick !== null ||
        target.closest('button') ||
        target.closest('a');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* 🟡 Dynamic Name Text */}
      <div
        className="fixed pointer-events-none z-50 font-bold text-yellow-300 whitespace-nowrap"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(20px, -30px)',
          fontSize: isHovering ? '20px' : '16px',
          textShadow: '0 0 10px rgba(252, 211, 77, 0.8), 0 0 20px rgba(252, 211, 77, 0.4)',
          transition: 'all 0.2s ease-out',
          opacity: 0.9,
        }}
      >
        {cursorText}
      </div>

      {/* Outer Glow Ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border-2 transition-all duration-300 ease-out ${
          isHovering ? 'border-yellow-300' : 'border-yellow-300/50'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '50px' : '40px',
          height: isHovering ? '50px' : '40px',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          boxShadow: isHovering
            ? '0 0 20px rgba(252, 211, 77, 0.6), 0 0 40px rgba(252, 211, 77, 0.3)'
            : '0 0 10px rgba(252, 211, 77, 0.3)',
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-yellow-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(252, 211, 77, 0.8)',
          transition: 'all 0.15s ease-out',
        }}
      />

      {/* Sparkle Effects */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.cos((i * Math.PI) / 2) * 25}px`,
              top: `${Math.sin((i * Math.PI) / 2) * 25}px`,
              animation: `sparkle 2s ease-in-out ${i * 0.5}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Hover Effect - Extra Ring */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 rounded-full border border-yellow-300/30"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '70px',
            height: '70px',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      )}

      <style>
        {`
          @keyframes pulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
            50% { 
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0;
            }
          }

          @keyframes sparkle {
            0%, 100% { 
              transform: scale(0);
              opacity: 0;
            }
            50% { 
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
