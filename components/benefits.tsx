"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, UserCog, UserCheck, Lightbulb, Workflow } from "lucide-react"

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
      description: "Tailored activity plans that adapt to your changing condition and recovery progress.",
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
    <section id="benefits" className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
            Key Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Why Choose SCIENCEPEAKS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform offers unique advantages for cancer patients and their care teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/placeholder.svg?height=600&width=600&query=cancer+patient+using+wearable+technology+with+doctor+reviewing+data"
              alt="SCIENCEPEAKS Benefits"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
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
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Evidence-Based Results</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our approach has been validated through clinical studies, showing significant improvements in fatigue
            levels, quality of life, and overall well-being for cancer patients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">68%</div>
              <p className="text-gray-700">Reduction in reported fatigue severity</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">74%</div>
              <p className="text-gray-700">Increase in physical activity adherence</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">82%</div>
              <p className="text-gray-700">Of patients reported improved quality of life</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
