"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={variants}
            className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4"
          >
            What is SCIENCEPEAKS?
          </motion.span>
          <motion.h2 variants={variants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Precision Health Platform for Cancer-Related Fatigue
          </motion.h2>
          <motion.div variants={variants} className="space-y-6 text-gray-600">
            <p className="text-lg">
              SCIENCEPEAKS is a precision health platform designed to address cancer-related fatigue (CRF)—a common and
              debilitating side effect after chemotherapy, affecting up to 60% of patients.
            </p>
            <p className="text-lg">
              By combining physiological, genetic, and behavioral data, SCIENCEPEAKS delivers personalized exercise
              prescriptions based on each patient's actual condition.
            </p>
            <p className="text-lg">
              Powered by advanced technology and artificial intelligence, the platform enables healthcare professionals
              and patients to make informed, data-driven decisions that improve adherence and therapeutic outcomes.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img src="/medical-dashboard-hrv.png" alt="SciencePeaks Platform" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="p-8 text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Data-Driven Approach</h3>
              <p className="text-lg">
                Our platform analyzes multiple data points to create a comprehensive picture of each patient's condition
                and recovery journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
