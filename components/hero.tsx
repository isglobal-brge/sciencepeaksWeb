"use client"

import { Button } from "@/components/ui/button"
import { Search, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col space-y-6"
          >
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800 text-center md:text-left">
              Revolutionizing Fatigue Management in Cancer Patients
            </h1>
            <p className="text-xl text-gray-600 mx-auto md:mx-0 text-center md:text-left">
              An intelligent ecosystem that personalizes physical activity using AI, biomarkers, and heart rate
              variability metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 self-center md:self-start">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 px-8 py-6 rounded-lg flex items-center justify-center gap-2 text-center">
                <Search size={18} />
                Learn how SciencePeaks improves quality of life
              </Button>
              <Button
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-6 rounded-lg flex items-center justify-center gap-2 text-center"
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
            className="order-1 lg:order-2 relative aspect-[4/3] w-full max-w-[200px] sm:max-w-[240px] md:max-w-xs mx-auto lg:max-w-none lg:mx-0"
          >
            <Image
              src="/sciencepeaks-wearable-device.png"
              alt="SciencePeaks Wearable Device"
              layout="fill"
              objectFit="contain"
              className="relative z-20 p-2 sm:p-4 md:p-6 filter drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
