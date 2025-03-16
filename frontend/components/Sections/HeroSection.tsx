"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 md:py-20 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative px-4 md:px-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-300 backdrop-blur-sm">
              <span className="mr-1 h-2 w-2 rounded-full bg-blue-400"></span> Discover knowledge resources
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">OU Insight Hub</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Knowledge Portal
                </span>
              </h1>
              <p className="text-lg text-gray-300 md:text-xl max-w-[600px]">
                Access comprehensive academic resources, research insights, and campus information all in one place.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300/30 text-gray-300 hover:bg-white/10 backdrop-blur-sm h-12 rounded-xl"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-blue-${i * 100} to-cyan-${i * 100}`}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Join <span className="text-white font-medium">2,500+</span> researchers using our platform
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 opacity-30 blur-xl"></div>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="OU Insight Hub Resources"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-60 blur-2xl"></div>
            </div>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  )
}

