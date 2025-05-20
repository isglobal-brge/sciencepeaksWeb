"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            {/* Replace with your actual logo */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold">SP</span>
            </div>
          </div>
          <span className="font-poppins font-bold text-2xl bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            SciencePeaks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            About
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            How It Works
          </Link>
          <Link href="#who-its-for" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            Who It's For
          </Link>
          <Link href="#benefits" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            Benefits
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-teal-500 transition-colors font-medium">
            Contact
          </Link>
          <Button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700">
            Request Demo
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-700 hover:text-teal-500 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-teal-500 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#who-its-for"
                className="text-gray-700 hover:text-teal-500 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Who It's For
              </Link>
              <Link
                href="#benefits"
                className="text-gray-700 hover:text-teal-500 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-teal-500 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 w-full">
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
