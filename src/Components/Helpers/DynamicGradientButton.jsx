import { motion } from "framer-motion";
import styles from "./DynamicGradientButton.module.css";
import PropTypes from "prop-types";

// Define a variety of animation patterns for the button
const animationVariants = {
  leftToRight: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  rightToLeft: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  breathing: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 2 },
    },
  },
  strobe: {
    animate: {
      opacity: [0, 1, 0],
      transition: { repeat: Infinity, duration: 0.5 },
    },
  },
  // Add more animation patterns as needed
};

const DynamicGradientButton = ({
  children,
  icon,
  animationType = "leftToRight", // Default animation
  gradientColors = ["from-purple-400", "to-pink-500"], // Default gradient colors
  applyTo = "background", // or 'shadow'/'border'
  ...props
}) => {
  // Dynamic style adjustments for gradients
  const dynamicStyle = {
    ...(applyTo === "shadow" && {
      boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 -4px 6px -1px var(--tw-gradient-stops)`,
    }),
    ...(applyTo === "border" && {
      borderImage: `linear-gradient(${gradientColors.join(", ")}) 1`,
    }),
  };

  return (
    <motion.button
      className={`${styles.button} ${
        applyTo === "background" ? "bg-gradient-to-r" : ""
      }`}
      style={dynamicStyle}
      variants={animationVariants[animationType]}
      initial="initial"
      animate="animate"
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </motion.button>
  );
};

DynamicGradientButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element,
  animationType: PropTypes.oneOf([
    "leftToRight",
    "rightToLeft",
    "breathing",
    "strobe",
  ]), // Specify other animation types as needed
  gradientColors: PropTypes.arrayOf(PropTypes.string),
  applyTo: PropTypes.oneOf(["background", "shadow", "border"]),
};

// Default props
DynamicGradientButton.defaultProps = {
  animationType: "leftToRight",
  gradientColors: ["from-purple-400", "to-pink-500"],
  applyTo: "background",
};

export default DynamicGradientButton;
