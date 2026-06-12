import { useEffect, useState } from 'react';

function useCustomPointer(value) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = 'none';
    const updatePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: mousePosition.x,
        top: mousePosition.y,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        fontSize: '24px',
      }}
    >
      {value}
    </div>
  );
}

export default useCustomPointer;
