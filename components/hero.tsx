"use client"

import { Button } from "@/components/ui/button"
import { Search, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 z-0"></div> */}

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-teal-200 opacity-20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800">
              Revolutionizing Fatigue Management in Cancer Patients
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              An intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate
              variability metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 px-6 py-6 rounded-lg flex items-center gap-2">
                <Search size={18} />
                Learn how SCIENCEPEAKS improves quality of life
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 px-6 py-6 rounded-lg flex items-center gap-2"
              >
                <Phone size={18} />
                Request a demo / Contact us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="relative aspect-[4/3]"
          >
            <Image
              src="/sciencepeaks-wearable-device.jpg"
              alt="SciencePeaks Wearable Device"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
