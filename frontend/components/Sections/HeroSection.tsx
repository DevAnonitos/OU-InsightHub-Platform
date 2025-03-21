"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, BookOpen, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 w-full mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <Badge
              variant="outline"
              className="w-fit bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/50 px-3 py-1"
            >
              <div className="mr-1 h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="ml-1">Knowledge Portal</span>
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">OU Insight Hub</span>
                <span className="block text-blue-600 dark:text-blue-500">Research Platform</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-[600px]">
                Access comprehensive Ho Chi Minh University resources, research insights, and campus information all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/50"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                <span className="text-sm">
                  Join <span className="text-slate-900 dark:text-white font-medium">2,500+</span> researchers using our
                  platform
                </span>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">10K+</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Research Papers</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">500+</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Faculty Members</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">25K+</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Students</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl opacity-70 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl opacity-70 -z-10"></div>

              {/* Card 1 - Floating element */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -left-6 md:top-4 md:-left-12 z-10 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Research Papers</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">10,000+ resources</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Floating element */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-4 md:-right-12 z-10 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <Database className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Data Access</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Instant insights</p>
                  </div>
                </div>
              </motion.div>

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
                <Image
                  src="/assets/image.png"
                  width={800}
                  height={800}
                  alt="OU Insight Hub Dashboard"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

