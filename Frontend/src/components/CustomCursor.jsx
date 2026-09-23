import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState({ type: '', text: '' });

  useEffect(() => {
    // Check if device supports hover and pointer is fine (not a touch screen)
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }
    
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.closest('.pub-row.anchor-target')) {
        setCursorState({ type: 'has-text', text: 'READ' });
      } else if (target.closest('a[target="_blank"]')) {
        setCursorState({ type: 'has-text', text: 'OPEN' });
      } else if (target.tagName.toLowerCase() === 'img') {
        setCursorState({ type: 'has-text', text: 'VIEW' });
      } else if (target.closest('.scientific-node') || target.closest('.research-node')) {
        setCursorState({ type: 'scientific', text: '' });
      } else if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setCursorState({ type: 'interactive', text: '' });
      } else {
        setCursorState({ type: '', text: '' });
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${cursorState.type}`}
      data-text={cursorState.text}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
}
