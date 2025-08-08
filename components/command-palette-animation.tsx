'use client'

import { motion } from 'framer-motion'
import { Search, MessageSquare, Code, Cloud, Settings, Users } from 'lucide-react'

const commands = [
  { icon: MessageSquare, text: 'Chat with team', color: 'text-blue-400' },
  { icon: Code, text: 'Open code editor', color: 'text-green-400' },
  { icon: Cloud, text: 'Deploy to production', color: 'text-purple-400' },
  { icon: Settings, text: 'Adjust settings', color: 'text-yellow-400' },
  { icon: Users, text: 'Invite new member', color: 'text-pink-400' },
]

export function CommandPaletteAnimation() {
  return (
    <div className="relative flex items-center justify-center w-full h-32 overflow-hidden">
      <motion.div
        className="absolute w-full h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Search bar */}
        <motion.div
          className="w-3/4 bg-gray-700/50 rounded-lg flex items-center px-3 py-2 border border-gray-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-gray-400 text-sm">Type a command or search...</span>
        </motion.div>

        {/* Command list */}
        <div className="mt-4 w-3/4 space-y-1">
          {commands.map((cmd, index) => (
            <motion.div
              key={index}
              className="flex items-center px-3 py-2 rounded-md bg-gray-800/30"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
            >
              <cmd.icon className={`w-4 h-4 mr-2 ${cmd.color}`} />
              <span className="text-gray-300 text-sm">{cmd.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
