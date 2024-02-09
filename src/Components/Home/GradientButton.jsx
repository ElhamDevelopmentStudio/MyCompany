import React from "react";
import { useSpring, animated } from "react-spring";

// DynamicText component for applying animations
const DynamicText = ({ text }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  return <animated.span style={props}>{text}</animated.span>;
};

const GradientButton = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-buttonBackground">
      <button className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden text-lg font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 transition-transform -translate-x-0.5 -translate-y-0.5 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>

        {/* DynamicText is used here for the button label */}
        <span className="relative">
          <DynamicText text="Click Me" />
        </span>

        <span className="absolute right-0 w-10 h-10 bg-blue-500 rounded-full bottom-10 animate-ping"></span>
        <span className="absolute right-0 w-10 h-10 bg-blue-500 rounded-full bottom-10 opacity-75"></span>
        <span className="absolute inset-0 transition-opacity opacity-100 group-hover:opacity-0">
          <svg
            className="w-full h-full text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* SVG icon path here */}
          </svg>
        </span>
      </button>
    </div>
  );
};

export default GradientButton;
