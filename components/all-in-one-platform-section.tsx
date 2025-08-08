'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Cloud, Code, ListChecks, Inbox, BrainCircuit } from 'lucide-react'
import NextImage from 'next/image'

const features = [
  {
    icon: MessageCircle,
    title: 'Chat',
    description: 'Collaborate with team members using our powerful devtool integrations.',
  },
  {
    icon: Cloud,
    title: 'Deployments',
    description: 'View, manage, and deploy your applications directly from Dimension.',
  },
  {
    icon: Code,
    title: 'Code Explorer',
    description: 'View and edit your repository directly from Dimension.',
  },
  {
    icon: ListChecks,
    title: 'Tasks',
    description: 'View, track, and edit GitHub issues directly from Dimension - with end-to-end sync.',
  },
  {
    icon: Inbox,
    title: 'Inbox',
    description: 'Stay up-to-date on the latest information within your organization.',
  },
  {
    icon: BrainCircuit,
    title: 'AI.',
    description: 'AI to make you 10x faster on everyday workflows - baked into Dimension.',
  },
]

export function AllInOnePlatformSection() {
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
          <div className="inline-block mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
              >
                <NextImage
                  src="/placeholder.svg?height=24&width=24"
                  alt="Gear Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </motion.div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Everything you need - </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              all in one platform
            </span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-xl text-gray-400">From prototyping to production - develop without switching tabs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm rounded-2xl p-8 text-left flex flex-col h-full"
            >
              <div className="mb-6">
                <feature.icon className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
