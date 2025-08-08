'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import NextImage from 'next/image'
import { Calendar, MessageCircle, Code, Cloud, Link, Mail, BrainCircuit, Plus, Search, Github, Bell, Chrome, Figma, Database, GitBranch, Zap, CheckCircle, ArrowUp, Activity, ListChecks, Inbox, Command, Users, Settings, Globe, Clock, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { InteractiveFeatureCard } from './interactive-feature-card'
import { SparkleOverlay } from './sparkle-overlay' // Import the new SparkleOverlay

export function InteractiveFeaturesGrid() {
  return (
    <section className="relative z-10 px-6 py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Seamlessly integrate </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              your workflow
            </span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-xl text-gray-400">Connect all your tools in one powerful platform.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Meet/Zoom */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">Meetings</span>
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <NextImage src="/placeholder.svg?height=20&width=20" alt="Meet" width={20} height={20} priority />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Meet</p>
                      <p className="text-gray-400 text-xs">Start a new meeting on Google Meet - all participants</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                      <NextImage src="/placeholder.svg?height=20&width=20" alt="Zoom" width={20} height={20} priority />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Zoom</p>
                      <p className="text-gray-400 text-xs">Start a new meeting on Zoom - all participants</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-2 bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2">
                    <Plus className="w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder={isHovered ? "Type to create..." : "/ |"} // Change placeholder on hover
                      className="bg-transparent border-none text-gray-300 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: isHovered ? 0.8 : 1, y: isHovered ? -2 : 0 }} // Subtle movement
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center mt-3 text-gray-400 text-sm"
                  >
                    <Command className="w-4 h-4 mr-2" />
                    <span>Slash commands.</span>
                  </motion.div>
                  <p className="text-gray-500 text-xs text-center mt-1">Create meetings, issues and more in just seconds.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>

          {/* Card 2: Linear/Embeds */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <Link className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">Integrations</span>
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <NextImage src="/placeholder.svg?height=20&width=20" alt="Linear" width={20} height={20} priority />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Linear</p>
                      <p className="text-gray-400 text-xs">Follow up not highlighted in the block</p>
                      <p className="text-gray-500 text-xs">The 2nd level comment block does not</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <NextImage src="/placeholder.svg?height=20&width=20" alt="Vercel" width={20} height={20} priority />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Vercel</p>
                      <p className="text-gray-400 text-xs">Create Next App</p>
                      <p className="text-500 text-xs">Generated by create next app</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Link className="w-4 h-4 mr-2" />
                    <span>Embeds.</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1">Info at a glance.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>

          {/* Card 3: Deployments/Activity Channels */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <Cloud className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">Deployments</span>
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Production</p>
                      <p className="text-gray-400 text-xs">10m <span className="text-green-400">• Ready</span> <span className="text-gray-500">b47571 - Initial</span></p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <ArrowUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">production-2-v727zk30f48-...</p>
                      <p className="text-gray-400 text-xs">10m <span className="text-green-400">• Ready</span> <span className="text-gray-500">a58221 - Initial</span></p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Activity className="w-4 h-4 mr-2" />
                    <span>Activity channels.</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1">Stay in the know. On the go.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>

          {/* Card 4: API Collections/Tasks/Deployments (bottom left) */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">Code</span>
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <NextImage src="/placeholder.svg?height=20&width=20" alt="API" width={20} height={20} priority />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">API Collections</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <ListChecks className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Tasks</p>
                      <p className="text-gray-400 text-xs">iOS-211 - Selector fix</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Deployments</p>
                      <p className="text-gray-400 text-xs">Frontend</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Auto resource pinning.</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1">We&apos;ll keep track of what&apos;s important in chat.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>

          {/* Card 5: Collaborative Debugging */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => ( // Receive isHovered prop
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">Collaboration</span>
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="bg-gray-800/50 rounded-lg p-3 text-xs font-mono text-gray-300 relative">
                    <pre>
                      <code>
                        <span className="text-pink-400">const</span> stage = document.querySelector(&apos;svg&apos;)<br />
                        <span className="text-pink-400">const</span> hit = document.querySelector(&apos;<span className="bg-red-500/30 rounded px-1">di</span>&apos;)<br />
                        <span className="text-pink-400">let</span> mPos = {'{'}x:50, y:50{'}'}<br />
                        <br />
                        <span className="text-yellow-400">if</span> (x-1; x&lt;10; x++)<br />
                        {'  '}<span className="text-yellow-400">let</span> y-1; y&lt;10; y++) makePt(x*10, y*10)<br />
                      </code>
                    </pre>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-2 right-2 flex space-x-1"
                    >
                      <Avatar className="w-6 h-6 border-2 border-gray-700">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>T</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6 border-2 border-gray-700">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>O</AvatarFallback>
                      </Avatar>
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Code className="w-4 h-4 mr-2" />
                    <span>Collaborative debugging.</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1">Share and collaboratively debug code - together.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>

          {/* Card 6: AI Auto Summarize */}
          <InteractiveFeatureCard>
            {(isHovered: boolean) => (
              <>
                <div className="flex items-center space-x-3 mb-4">
                  <BrainCircuit className="w-6 h-6 text-gray-400" />
                  <span className="text-white font-medium">AI</span>
                </div>
                <div className="space-y-3 flex-grow relative">
                  {isHovered ? (
                    <>
                      <div className="absolute top-0 left-0 bg-purple-500/80 text-white text-xs font-bold px-2 py-1 rounded-br-lg rounded-tl-lg z-20">
                        AI
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2 pt-6">Summary - Robert Fox</h3>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                        <li>Robert Fox suggests implementing changelog feature sent to inboxes launching dimension to the public</li>
                        <li>Tejas Ravishankar agrees and thinks it&apos;s critical for sending user updates.</li>
                        <li>Tejas Ravishankar suggests using Markdown so we can write</li>
                      </ul>
                      <SparkleOverlay count={15} /> {/* Sparkle animation on hover */}
                    </>
                  ) : (
                    <>
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>RF</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">Robert Fox</span>
                            <span className="text-gray-500 text-xs">9:51 PM</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            Hey, do you think I should implement
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>TR</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">Tejas Ravishankar</span>
                            <span className="text-gray-500 text-xs">9:52 PM</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            Yep! We definitely should - I think
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <BrainCircuit className="w-4 h-4 mr-2" />
                    <span>AI auto summarize.</span>
                  </div>
                  <p className="text-gray-500 text-xs text-center mt-1">Get the gist, without the fluff.</p>
                </div>
              </>
            )}
          </InteractiveFeatureCard>
        </div>
      </div>
    </section>
  )
}
