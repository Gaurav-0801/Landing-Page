'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'

interface SparkleOverlayProps {
  count?: number
}

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.5, y: 10, rotate: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0.5, 1.2, 0.8],
    y: [10, -20, -50],
    x: [-10, 10, 0],
    rotate: [0, 90, 180, 270, 360],
  },
}

export function SparkleOverlay({ count = 10 }: SparkleOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          variants={sparkleVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2 + Math.random() * 2, // Random duration
            repeat: Infinity,
            delay: Math.random() * 2, // Staggered delay
            ease: "easeOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <NextImage
            src="/images/sparkle.png" // Correct path to the image
            alt="sparkle"
            width={16}
            height={16}
            className="w-4 h-4 text-yellow-300"
          />
        </motion.div>
      ))}
    </div>
  )
}
