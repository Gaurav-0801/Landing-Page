'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatedBorder } from '@/components/animated-border'

export function ChatMessageCard() {
  return (
    <section className="relative z-10 px-6 py-20 flex justify-center items-center min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center text-gray-500 text-sm mb-8">
          Thu, Jul 20
        </div>
        <AnimatedBorder variant="chat-card" borderRadiusClass="rounded-2xl">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl opacity-20"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
              }}
            />
            <div className="relative z-10">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">T</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">Tejas</span>
                    <span className="text-gray-500 text-sm">1:14 PM</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">
                    Our Command K menu doesn&apos;t trigger when I&apos;m focused on a text field.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 rounded-lg px-4 py-2 text-sm">
                  Create issue on Linear
                </Button>
              </div>
            </div>
          </div>
        </AnimatedBorder>
      </motion.div>
    </section>
  )
}
