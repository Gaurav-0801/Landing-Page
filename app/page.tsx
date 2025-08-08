'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Users, Settings, Plus, Search, Hash, MessageCircle, Globe, Clock, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedBorder } from '@/components/animated-border'
import { CommandPaletteAnimation } from '@/components/command-palette-animation'
import { CircularIntegrationAnimation } from '@/components/circular-integration-animation'
import { ChatMessageCard } from '@/components/chat-message-card'
import { AllInOnePlatformSection } from '@/components/all-in-one-platform-section'
import { InteractiveFeaturesGrid } from '@/components/interactive-features-grid' // New import
import { WhyDimensionSection } from '@/components/why-dimension-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function DimensionLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, 100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <motion.div
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Rotating Semicircular Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px]"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-transparent" 
               style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }} />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px]"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-l from-orange-500/20 via-pink-500/20 to-transparent"
               style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }} />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10" />
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold"
            >
              Dimension
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              {['About', 'Careers', 'Blog', 'Changelog'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-white transition-colors relative"
                >
                  {item}
                  {item === 'Careers' && (
                    <span className="absolute -top-1 -right-2 bg-gray-600 text-xs px-1 rounded text-white">2</span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <AnimatedBorder variant="nav-button" borderRadiusClass="rounded-full">
              <Button className="relative bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-full border-0 w-full h-full">
                Join waitlist
              </Button>
            </AnimatedBorder>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Announcement Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-12"
          >
            <div className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="absolute inset-0 rounded-full p-[1px]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(147, 51, 234, 0.6) 90deg, transparent 180deg, rgba(147, 51, 234, 0.6) 270deg, transparent 360deg)',
                  }}
                />
              </div>
              <span className="relative z-10 text-gray-300">Announcing our $1.4M Fundraise</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">Dimension is the new</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                standard
              </span>{' '}
              <span className="text-white">for</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                collaboration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Chat, code, cloud, deployments, and more.
            </p>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-16"
          >
            <Input
              type="email"
              placeholder="Email address..."
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 backdrop-blur-sm"
            />
            <AnimatedBorder variant="hero-button" borderRadiusClass="rounded-xl">
              <Button className="relative bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl whitespace-nowrap border-0">
                Join waitlist
              </Button>
            </AnimatedBorder>
          </motion.div>

          {/* Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
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
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Sidebar */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">D</span>
                      </div>
                      <span className="text-white font-medium">Dimension</span>
                      <Plus className="w-4 h-4 text-gray-400" />
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">T</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-gray-400 text-sm">Core Team</div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Search className="w-4 h-4" />
                        <span>Chat</span>
                        <Plus className="w-4 h-4 ml-auto" />
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Hash className="w-4 h-4" />
                        <span>Team</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5 text-gray-400" />
                        <span className="text-white">Chat</span>
                      </div>
                      <div className="text-gray-400 text-sm">Members • 3</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">T</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">Tejas</span>
                            <span className="text-gray-500 text-sm">1:14 PM</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we'll be on track to share the latest with the team on Friday?
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">T</span>
                        </div>
                        <span className="text-gray-400 text-sm">Tejas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBorder>
          </motion.div>
        </div>
      </section>

      {/* New Chat Message Card Section */}
      <ChatMessageCard />

      {/* New All-in-One Platform Section */}
      <AllInOnePlatformSection />

      {/* New Interactive Features Grid */}
      <InteractiveFeaturesGrid />

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Lightning Icon and Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                />
                <Zap className="w-8 h-8 text-white relative z-10" />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Build software </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">faster</span>
              <span className="text-white">, </span> 
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">together</span>
              <span className="text-white">.</span>
            </h2>
            <p className="text-xl text-gray-400">The most complete developer experience.</p>
          </motion.div>

          {/* Keyboard Shortcut */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-right mb-12"
          >
            <span className="text-gray-500 text-sm">
              Press <kbd className="bg-gray-800 px-2 py-1 rounded text-white">'D'</kbd> anytime to get started
            </span>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedBorder variant="feature-card" borderRadiusClass="rounded-2xl">
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm h-full relative overflow-hidden group">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
                    }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Collaborate on everything.</h3>
                    <p className="text-gray-400 mb-4">
                      Access the command palette by pressing CMD+K and type your query for results.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 relative overflow-hidden h-32"> {/* Added h-32 */}
                      <CommandPaletteAnimation /> {/* Command Palette Animation */}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedBorder>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedBorder variant="feature-card" borderRadiusClass="rounded-2xl">
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm h-full relative overflow-hidden group">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(249, 115, 22, 0.3), transparent)',
                    }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <Settings className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Edge Network</h3>
                    <p className="text-gray-400 mb-4">
                      An instant in-platform experience - powered by our global edge.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 relative overflow-hidden mb-4 h-32"> {/* Added h-32 */}
                      <CircularIntegrationAnimation /> {/* Original Circular Integration Animation */}
                    </div>
                    <div className="space-y-2 text-gray-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span>Global Edge Network</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span>Instant Deployments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Server className="w-4 h-4 text-purple-400" />
                        <span>Real-time Data</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing New Sections */}
      <WhyDimensionSection />
      <TestimonialsSection />

      {/* Footer or final CTA can go here to further extend */}
      <section className="relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Ready to get </span>
            <span className="bg-gradient-to-r from-purple-400 to-orange-500 bg-clip-text text-transparent">
              started
            </span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Join the waitlist today and experience the future of collaboration.
          </p>
          <AnimatedBorder variant="hero-button" borderRadiusClass="rounded-xl">
            <Button className="relative bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl whitespace-nowrap border-0">
              Join waitlist
            </Button>
          </AnimatedBorder>
        </motion.div>
      </section>

      <footer className="relative z-10 px-6 py-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Dimension. All rights reserved.</p>
      </footer>
    </div>
  )
}
