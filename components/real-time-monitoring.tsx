"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Activity, Battery, LineChart, Smartphone } from "lucide-react"

export function RealTimeMonitoring() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: <Activity className="w-10 h-10 text-teal-500" />,
      title: "Real-time HRV Analysis",
      description: "Monitor heart rate variability metrics to accurately assess fatigue and recovery status."
    },
    {
      icon: <LineChart className="w-10 h-10 text-teal-500" />,
      title: "Trend Visualization",
      description: "Track progress over time with intuitive charts and personalized dashboards."
    },
    {
      icon: <Battery className="w-10 h-10 text-teal-500" />,
      title: "Energy Level Prediction",
      description: "AI-powered forecasting of optimal times for activity based on your physiological state."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-teal-500" />,
      title: "Mobile Accessibility",
      description: "Access your data anywhere through our user-friendly mobile and web applications."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
            Real-Time Monitoring
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Continuous Health Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay connected to your health with advanced monitoring that provides immediate feedback and personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={ref} className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 p-2 bg-teal-50 rounded-lg inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-xl overflow-hidden shadow-xl mb-6">
              <img 
                src="/medical-dashboard-hrv.png" 
                alt="Health Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 