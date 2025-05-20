"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { User, Users, Dumbbell } from "lucide-react"

export function WhoItsFor() {
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

  const audiences = [
    {
      icon: <User className="w-16 h-16 text-teal-500" />,
      title: "Breast cancer patients",
      description: "Seeking to manage fatigue and regain energy after treatment.",
      image: "/placeholder.svg?height=300&width=300&query=woman+recovering+from+cancer+treatment+exercising+gently",
    },
    {
      icon: <Users className="w-16 h-16 text-teal-500" />,
      title: "Oncologists and healthcare providers",
      description: "Who need objective tools to evaluate and guide physical activity.",
      image: "/placeholder.svg?height=300&width=300&query=doctor+showing+patient+medical+data+on+tablet",
    },
    {
      icon: <Dumbbell className="w-16 h-16 text-teal-500" />,
      title: "Exercise professionals",
      description: "Aiming to deliver evidence-based, personalized programs.",
      image: "/placeholder.svg?height=300&width=300&query=personal+trainer+working+with+cancer+survivor",
    },
  ]

  return (
    <section id="who-its-for" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
            Who It's For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Supporting Cancer Recovery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            SCIENCEPEAKS is designed to support everyone involved in the cancer recovery journey.
          </p>
        </div>

        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={audience.image || "/placeholder.svg"}
                    alt={audience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center -mt-16 mb-4">
                    <div className="rounded-full p-4 bg-white shadow-md">{audience.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{audience.title}</h3>
                  <p className="text-gray-600 text-center">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform brings together patients, healthcare providers, and exercise specialists in a collaborative
              ecosystem that optimizes recovery and improves quality of life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
