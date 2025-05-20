"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Activity, Database, Brain, LineChart } from "lucide-react"

export function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
              How It Works
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Our Innovative Approach</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              SCIENCEPEAKS combines advanced technology with medical expertise to deliver personalized solutions for
              cancer-related fatigue.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 rounded-xl p-8 shadow-lg hover:shadow-2xl backdrop-blur-sm transition-shadow duration-300 transform hover:-translate-y-1"
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
            variants={itemVariants}
            className="mt-16 bg-white/70 rounded-xl p-8 shadow-lg backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Backed by Science</h3>
                <p className="text-gray-600 mb-6">
                  Our approach is based on years of research in exercise physiology, oncology, and data science. We&apos;ve
                  developed proprietary algorithms that can identify subtle patterns in physiological data that indicate
                  fatigue levels and recovery capacity.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center shrink-0 aspect-square">
                    <span className="text-teal-600 text-2xl font-bold">60%</span>
                  </div>
                  <p className="text-md text-gray-700">
                    of cancer patients experience debilitating fatigue after chemotherapy
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="/medical-scientist-heart-rate.png" alt="Scientific Research" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
