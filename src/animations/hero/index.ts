import type { Variants } from "motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export const wordsContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const wordItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const backGroundVariants: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.6,
    transition: {
      duration: 1.5,
    },
  },
};
