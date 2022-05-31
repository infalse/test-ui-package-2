import * as React from 'react';
import { motion, MotionConfig } from 'framer-motion';

export interface AnimatedHeavyMoleculeProps {
  /**
   * Animation duration
   * @default 2
   */
  duration?: number;
}

export const AnimatedHeavyMolecule: React.FC<AnimatedHeavyMoleculeProps> = ({ duration }) => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="w-[300px] h-[300px] flex justify-center items-center">
        <motion.div
          className="bg-red-200 rounded-3xl w-16 h-16"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
          transition={{
            duration: duration || 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </MotionConfig>
  );
};
