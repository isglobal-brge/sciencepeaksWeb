"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, UserCog, UserCheck, Lightbulb, Workflow } from "lucide-react"

export function Benefits() {
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
        staggerChildren: 0.08,
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
  
  const imageVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const benefits = [
    {
      icon: <Target className="w-10 h-10 text-teal-500" />,
      title: "Objective fatigue measurement",
      description:
        "Precise quantification of fatigue levels based on physiological markers rather than subjective assessments.",
    },
    {
      icon: <UserCog className="w-10 h-10 text-teal-500" />,
      title: "Personalized exercise recommendations",
      description: "Based on your fitness track and heart rate variability from recent days, an AI-powered chatbot will recommend tailored activity plans that adapt to your changing condition and recovery progress.",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-teal-500" />,
      title: "Improved patient adherence and empowerment",
      description: "Increased motivation and engagement through clear feedback and achievable goals.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-teal-500" />,
      title: "Clinician support with actionable insights",
      description: "Detailed reports and trends that help healthcare providers make informed decisions.",
    },
    {
      icon: <Workflow className="w-10 h-10 text-teal-500" />,
      title: "Seamless integration",
      description: "Easy implementation into existing clinical and wellness settings with minimal disruption.",
    },
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
              Key Benefits
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Why Choose SciencePeaks</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers unique advantages for cancer patients and their care teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={imageVariant}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-800 text-center lg:text-left">
                Continuous HRV monitoring during exercise: control of intensity
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/monitoring-2.png?height=600&width=600&query=cancer+patient+using+wearable+technology+with+doctor+reviewing+data"
                  alt="SciencePeaks Benefits"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-start bg-white/70 p-6 rounded-xl shadow-md hover:shadow-2xl backdrop-blur-sm transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className="shrink-0 p-2 bg-teal-50 rounded-lg">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-white/70 rounded-xl p-8 shadow-lg text-center backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Evidence-Based Results</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Literature shows significant improvements in fatigue levels, quality of life, and overall well-being 
              for cancer patients using evidence-based exercise interventions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-teal-50/70 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-teal-600 mb-2">68%</div>
                <p className="text-gray-700">Reduction in reported fatigue severity</p>
              </div>
              <div className="p-6 bg-blue-50/70 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-blue-600 mb-2">74%</div>
                <p className="text-gray-700">Increase in physical activity adherence</p>
              </div>
              <div className="p-6 bg-teal-50/70 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-teal-600 mb-2">82%</div>
                <p className="text-gray-700">Of patients reported improved quality of life</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
