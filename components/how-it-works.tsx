"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Activity, Database, Brain, LineChart } from "lucide-react"

export function HowItWorks() {
  const [ref, inView] = useInView({
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
      transition: { duration: 0.6 },
    },
  }

  const steps = [
    {
      icon: <Activity className="w-12 h-12 text-teal-500" />,
      title: "Personalized Data Collection",
      description:
        "We integrate cutting-edge wearables that monitor heart rate variability (HRV) both at rest and during exercise based on the complete ECG not just on the RR peaks. Metrics like DFA α1 and JT/RR provide a much more accurate view of fatigue than pulse or perceived effort.",
    },
    {
      icon: <Database className="w-12 h-12 text-teal-500" />,
      title: "Multi-dimensional Analysis",
      description:
        "SCIENCEPEAKS incorporates biomarkers (lactate, hemoglobin) and genetic predisposition to generate a comprehensive assessment of the patient's physical state.",
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-500" />,
      title: "AI-Powered Interpretation",
      description:
        "Our algorithms analyze daily HRV patterns, and natural language models (LLMs) turn complex data into clear insights. Professionals with no background in HRV or genetics receive precise recommendations on exercise intensity and duration, backed by scientific evidence.",
    },
    {
      icon: <LineChart className="w-12 h-12 text-teal-500" />,
      title: "Continuous Monitoring",
      description:
        "Patients can track their progress at home with ease, boosting autonomy, engagement, and overall quality of life.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Our Innovative Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SCIENCEPEAKS combines advanced technology with medical expertise to deliver personalized solutions for
            cancer-related fatigue.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 inline-block p-3 bg-teal-50 rounded-lg">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Backed by Science</h3>
              <p className="text-gray-600 mb-6">
                Our approach is based on years of research in exercise physiology, oncology, and data science. We've
                developed proprietary algorithms that can identify subtle patterns in physiological data that indicate
                fatigue levels and recovery capacity.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold">60%</span>
                </div>
                <p className="text-sm text-gray-600">
                  of cancer patients experience debilitating fatigue after chemotherapy
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/medical-scientist-heart-rate.png" alt="Scientific Research" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
