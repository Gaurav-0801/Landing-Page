'use client'

import { motion } from 'framer-motion'
import { Github, BellIcon as Vercel, ChromeIcon as Google, Figma, Cloud, Database, GitBranch, Zap } from 'lucide-react'

const icons = [
  { icon: Github, color: 'text-gray-400' },
  { icon: Vercel, color: 'text-white' },
  { icon: Google, color: 'text-blue-400' },
  { icon: Figma, color: 'text-purple-400' },
  { icon: Cloud, color: 'text-blue-300' },
  { icon: Database, color: 'text-green-400' },
  { icon: GitBranch, color: 'text-orange-400' },
  { icon: Zap, color: 'text-yellow-400' },
]

export function CircularIntegrationAnimation() {
  const radius = 100 // Radius for the main circle of icons
  const centerIconRadius = 32 // Radius for the central icon
  const numIcons = icons.length
  const angleStep = 360 / numIcons

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Central Gradient Circle */}
      <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center z-10">
        <div className="w-12 h-12 rounded-full bg-gray-900/50 border border-gray-700/50 flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" /> {/* Placeholder for central icon */}
        </div>
      </div>

      {/* Animated Circular Lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        style={{ overflow: 'visible' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Outer circle line */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner circle line */}
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </motion.svg>

      {/* Moving Icons */}
      {icons.map((item, index) => {
        const angle = index * angleStep
        const x = radius * Math.cos((angle * Math.PI) / 180)
        const y = radius * Math.sin((angle * Math.PI) / 180)

        return (
          <motion.div
            key={index}
            className="absolute w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: [0, x, x, 0], // Move out, stay, move back
              y: [0, y, y, 0],
              opacity: [0, 1, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
              delay: index * (10 / numIcons), // Staggered animation
            }}
            style={{
              transformOrigin: 'center center',
              left: '50%',
              top: '50%',
              marginLeft: '-20px', // Half of width
              marginTop: '-20px', // Half of height
            }}
          >
            <item.icon className={`w-5 h-5 ${item.color}`} />
          </motion.div>
        )
      })}
    </div>
  )
}
