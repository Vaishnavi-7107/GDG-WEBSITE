"use client"

import { useEffect, useRef, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { value: "03+", label: "Years" },
    { value: "10+", label: "Events" },
    { value: "1K+", label: "Community Members" },
    { value: "200+", label: "Attendees" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="stats" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${
                isVisible ? `animate-slide-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"
              }`}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div
                  className="absolute inset-0 rounded-full group-hover:scale-110 transition-all duration-500"
                  style={{
                    background: `conic-gradient(
                         #EA4335 0deg 90deg,
                         #4285F4 90deg 180deg, 
                         #34A853 180deg 270deg,
                         #FBBC04 270deg 360deg
                       )`,
                    padding: "6px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center hover:shadow-2xl">
                    <span className="text-3xl font-bold text-gray-800 z-10 relative transition-all duration-300 group-hover:scale-110">
                      {stat.value}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
