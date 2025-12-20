"use client"

import { useEffect, useRef, useState } from "react"

interface StatCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function StatCounter({ end, duration = 2000, suffix = "", prefix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(end * easeOutQuart))

      if (progress === 1) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration, isVisible])

  return (
    <div ref={ref} className="text-4xl font-bold tracking-tight lg:text-5xl">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
