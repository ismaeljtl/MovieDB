import { animate, motion } from "framer-motion";
import React from "react";

const LoadingCard = () => {
  const animationOpt = {
    animate: { opacity: [1, 0.5, 1] },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };
  return (
    <div className="card card-compact w-full bg-base-100 dark:bg-red-300 shadow-xl">
      <motion.figure
        className="w-full h-48 bg-slate-500"
        animate={{ opacity: animationOpt.animate.opacity }}
        transition={{
          duration: animationOpt.transition.duration,
          repeat: animationOpt.transition.repeat,
        }}
      ></motion.figure>
      <div className="card-body">
        <motion.h2
          className="card-title w-28 h-8 bg-slate-500"
          animate={{ opacity: animationOpt.animate.opacity }}
          transition={{
            duration: animationOpt.transition.duration,
            repeat: animationOpt.transition.repeat,
          }}
        />
        <motion.div
          className="card-actions justify-end w-full h-6 bg-slate-500"
          animate={{ opacity: animationOpt.animate.opacity }}
          transition={{
            duration: animationOpt.transition.duration,
            repeat: animationOpt.transition.repeat,
          }}
        />
        <motion.div
          className="card-actions justify-end w-full h-6 bg-slate-500"
          animate={{ opacity: animationOpt.animate.opacity }}
          transition={{
            duration: animationOpt.transition.duration,
            repeat: animationOpt.transition.repeat,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingCard;
