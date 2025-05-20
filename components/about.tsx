"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function About() {
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
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="text-center mb-10">
            <motion.span
              variants={itemVariants}
              className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4"
            >
              What is SCIENCEPEAKS?
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Precision Health Platform for Cancer-Related Fatigue
            </motion.h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-white/70 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <p className="text-lg text-gray-700 mb-4">
                SCIENCEPEAKS is a precision health platform designed to address <strong className="font-semibold text-teal-600">cancer-related fatigue (CRF)</strong>—a common and debilitating side effect after chemotherapy.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                CRF affects up to <strong className="font-semibold text-teal-600">60% of patients</strong> and can significantly impact their quality of life.
              </p>
              <p className="text-lg text-gray-700">
                By combining physiological, genetic, and behavioral data, SCIENCEPEAKS delivers personalized exercise
                prescriptions based on each patient&apos;s actual condition.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white/70 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <p className="text-lg text-gray-700 mb-6">
                Powered by advanced technology and artificial intelligence, the platform enables healthcare professionals
                and patients to make informed, data-driven decisions that improve adherence and therapeutic outcomes.
              </p>
              <div className="flex items-center mt-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0 aspect-square">
                  <span className="text-teal-600 text-2xl font-bold">60%</span>
                </div>
                <p className="text-md text-gray-700">
                  of cancer patients experience debilitating fatigue that can persist for years after treatment.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img src="/medical-dashboard-hrv.png" alt="SciencePeaks Platform" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-2">Data-Driven Approach</h3>
              <p className="text-lg">
                Our platform analyzes multiple data points to create a comprehensive picture of each patient&apos;s condition
                and recovery journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
