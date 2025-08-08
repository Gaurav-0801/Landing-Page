'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedBorder } from '@/components/animated-border'
import { Card, CardContent } from '@/components/ui/card'

interface InteractiveFeatureCardProps {
  children: (isHovered: boolean) => React.ReactNode // Children now accepts a function
  className?: string
}

export function InteractiveFeatureCard({ children, className }: InteractiveFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-full ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      animate={{ y: isHovered ? -5 : 0 }} // Subtle lift effect on hover
      // No transition here, as it's handled by the inner motion.div
    >
      <AnimatedBorder variant="feature-card" borderRadiusClass="rounded-2xl">
        <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm h-full relative overflow-hidden transition-all duration-300 ease-in-out
                       hover:bg-gray-800/60 hover:shadow-xl hover:shadow-purple-500/20"> {/* Added hover styles for background and shadow */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0, opacity: isHovered ? 0.4 : 0 }} // Increased opacity for stronger glow effect
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.4), transparent)', // Stronger color
            }}
          />
          <CardContent className="p-6 relative z-10 h-full flex flex-col">
            <motion.div
              animate={{ scale: isHovered ? 1.02 : 1 }} // Zoom effect on content
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full flex flex-col" // Ensure content fills height and maintains layout
            >
              {children(isHovered)} {/* Pass isHovered to children */}
            </motion.div>
          </CardContent>
        </Card>
      </AnimatedBorder>
    </motion.div>
  )
}
