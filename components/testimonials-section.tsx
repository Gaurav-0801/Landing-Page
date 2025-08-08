'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Dimension has revolutionized how our team collaborates. The real-time features are a game-changer!",
    author: "Sarah Chen",
    title: "CTO at InnovateTech",
    rating: 5,
  },
  {
    quote: "The speed and reliability of Dimension's platform are unmatched. Deployments are now a breeze.",
    author: "David Lee",
    title: "Lead Developer at CodeFlow",
    rating: 5,
  },
  {
    quote: "From chat to code, everything is seamlessly integrated. Dimension is truly the new standard.",
    author: "Maria Garcia",
    title: "Product Manager at Synergy Solutions",
    rating: 4,
  },
]

export function TestimonialsSection() {
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
            <span className="text-white">What our </span>
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              users say
            </span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-xl text-gray-400">Hear from our satisfied customers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm rounded-2xl p-8 text-left flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-600" />
                ))}
              </div>
              <p className="text-gray-300 text-lg italic mb-6 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
