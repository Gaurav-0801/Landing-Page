import React from 'react'

interface AnimatedBorderProps {
  children: React.ReactNode
  className?: string
  variant: 'hero-button' | 'nav-button' | 'chat-card' // New variant prop
  borderRadiusClass?: string // e.g., "rounded-full", "rounded-xl", "rounded-2xl"
}

export function AnimatedBorder({ children, className, variant, borderRadiusClass = 'rounded-xl' }: AnimatedBorderProps) {
  const frameClassPrefix = {
    'hero-button': 'animated-hero-button-frame',
    'nav-button': 'animated-nav-button-frame',
    'chat-card': 'animated-chat-card-frame',
  }[variant];

  return (
    <div className={`relative pointer-events-none ${className}`}>
      <div className={`absolute inset-0 p-[1px] ${borderRadiusClass}`}>
        <div className={`${frameClassPrefix}-1 animated-border-frame`}>
          <div></div>
        </div>
        <div className={`${frameClassPrefix}-2 animated-border-frame`}>
          <div></div>
        </div>
        <div className={`${frameClassPrefix}-3 animated-border-frame`}>
          <div></div>
        </div>
      </div>
      {children}
    </div>
  )
}
