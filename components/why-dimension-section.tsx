'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react'

const benefits = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Leverage cutting-edge technology to solve complex problems with ease and efficiency.',
  },
  {
    icon: Rocket,
    title: 'Blazing Fast Performance',
    description: 'Experience unparalleled speed and responsiveness powered by our global edge network.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    description: 'Build with confidence on a platform designed for enterprise-grade security and uptime.',
  },
]

export function WhyDimensionSection() {
  return (
    <section className="relative z-10 px-6 py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Why choose </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Dimension
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-400">Unlock your team's full potential.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm rounded-2xl p-8 text-left"
            >
              <div className="mb-6">
                <benefit.icon className="w-12 h-12 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
