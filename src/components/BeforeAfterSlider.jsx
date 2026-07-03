import React, { useState } from 'react';
import beforeImg from '../assets/before.png';
import afterImg from '../assets/after.png';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden select-none rounded-t-xl md:rounded-l-xl md:rounded-t-none">
      {/* After Image (Base) */}
      <img
        src={afterImg}
        alt="After Treatment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-4 right-4 bg-[#091426]/75 px-3 py-1.5 rounded text-xs font-semibold text-white uppercase tracking-wider">
        After
      </div>

      {/* Before Image (Overlay with Clip Path) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImg}
          alt="Before Treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-[#006B5F]/85 px-3 py-1.5 rounded text-xs font-semibold text-white uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Visual Slider Circle Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#006B5F] hover:bg-[#005249] border-4 border-white rounded-full shadow-lg flex items-center justify-center transition-colors">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
          </svg>
        </div>
      </div>

      {/* Invisible HTML range input for dragging */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
    </div>
  );
}
