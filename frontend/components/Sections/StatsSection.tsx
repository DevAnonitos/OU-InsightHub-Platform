"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge"

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)

        setCount(Math.floor(percentage * end))

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function StatsSection() {
  const stats = [
    {
      value: 10000,
      label: "Research Papers",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      value: 500,
      label: "Faculty Members",
      icon: <Users className="h-6 w-6" />,
    },
    {
      value: 25000,
      label: "Students",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      value: 150,
      label: "Awards & Recognitions",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container px-4 md:px-6 w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            variant="outline"
            className="w-fit bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/50 px-3 py-1"
          >
            <div className="mr-1 h-2 w-2 rounded-full bg-blue-500"></div>
            <span className="ml-1">Our impacts</span>
          </Badge>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              OU Insight Hub by the Numbers
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Our growing knowledge base and community
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">
                    <CountUp end={stat.value} />
                    {stat.value >= 10000 ? "+" : ""}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

