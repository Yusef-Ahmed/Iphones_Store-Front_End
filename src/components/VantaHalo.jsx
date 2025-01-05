import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min.js";
import * as THREE from "three";

export const VantaHalo = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          xOffset: -0.20,
          yOffset: -0.05,
          size: 1.70,
          backgroundColor: 0x131010,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={vantaRef} className="fixed inset-0 z-[-10]">
    </div>
  );
};
