"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const sectionContainerVariants = {
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

  const majorBlockVariants = {
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
  
  const fineDetailVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="pt-0 md:pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionContainerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={majorBlockVariants} className="text-center mb-12">
            <span
              className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4"
            >
              What is SciencePeaks?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              Precision Health Platform for Cancer-Related Fatigue
            </h2>
          </motion.div>

          <motion.div
            variants={majorBlockVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white/70 rounded-xl p-8 shadow-lg backdrop-blur-sm flex flex-col justify-between">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  SciencePeaks is a precision health platform designed to address <strong className="font-semibold text-teal-600">cancer-related fatigue (CRF)</strong>—a common and debilitating side effect after chemotherapy.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  CRF affects up to <strong className="font-semibold text-teal-600">60% of patients</strong> and can significantly impact their quality of life.
                </p>
                <p className="text-lg text-gray-700">
                  By combining physiological, genetic, and behavioral data, SciencePeaks delivers personalized exercise
                  prescriptions based on each patient&apos;s actual condition.
                </p>
              </div>
            </div>
            <div className="bg-white/70 rounded-xl p-8 shadow-lg backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-end mb-4">
                  <Image 
                    src="/garmin-logo.png" 
                    alt="Garmin" 
                    width={60} 
                    height={20} 
                    className="opacity-70"
                  />
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  SciencePeaks monitors HRV in the morning and before, during, and after physical activity. The platform is compatible with Garmin® devices to incorporate HRV data during sleep, providing comprehensive 24/7 monitoring.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Powered by advanced technology and artificial intelligence, the platform enables healthcare professionals
                  and patients to make informed, data-driven decisions that improve adherence and therapeutic outcomes.
                </p>
              </div>
              <div className="flex items-center mt-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mr-4 shrink-0 aspect-square">
                  <span className="text-teal-600 text-2xl font-bold">60%</span>
                </div>
                <p className="text-md text-gray-700">
                  of cancer patients experience debilitating fatigue that can persist for years after treatment.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={majorBlockVariants}
            className="text-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-4xl mb-3">
              <Image src="/medical-dashboard-hrv.png" alt="SciencePeaks Platform" width={1200} height={600} className="w-full h-auto" priority={false} />
            </div>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg text-gray-600">
                <span className="font-medium">Data-Driven Approach:</span> Our platform analyzes multiple data points to create a comprehensive picture of each patient's condition and recovery journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
