"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [consentGiven, setConsentGiven] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!consentGiven) {
      alert('Please accept the privacy policy to submit the form.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xbloezzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consentGiven: consentGiven,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setConsentGiven(false)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 text-sm font-medium text-teal-600 bg-teal-100 rounded-full mb-4">
              Contact Us
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">Get in Touch</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about SciencePeaks? Want to learn more about our research or discuss potential collaborations? 
              We'd love to hear from you.
            </motion.p>
          </div>

          <motion.div
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={itemVariants} className="bg-white/70 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry, research interests, or how we can help you..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>

                {/* GDPR Legal Text */}
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-3">Data Protection Information</h4>
                  <div className="text-xs text-gray-600 space-y-2 leading-relaxed">
                    <p>
                      Your personal data will only be used by the <strong>Fundación Privada Instituto de Salud Global Barcelona (ISGlobal)</strong>; 
                      CIF: G65341695; Postal address: C/ Rosselló, number 132, 7th floor, 08036 Barcelona; 
                      Email: <a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:underline">lopd@isglobal.org</a>
                    </p>
                    
                    <p>
                      We collect and process your personal data for the sole purpose of responding to your inquiry.
                    </p>
                    
                    <p>
                      Your data will be processed by ISGlobal and transmitted through Formspree Inc. (a third-party service provider located in the United States) 
                      solely for the purpose of delivering your inquiry to us. Formspree acts as a data processor under our instructions and is bound by 
                      appropriate data protection agreements. Apart from this necessary technical processing, your data will never be made available to 
                      other third parties or used for any other purposes.
                    </p>
                    
                    <p>
                      We can only process your personal data with your consent, and it will be retained only as long as you do not withdraw consent.
                    </p>
                    
                    <p>
                      You can exercise all your rights under current data protection regulations, including the right to access, 
                      correction, objection, erasure, portability and restriction, by writing to the Data Protection Officer 
                      (<a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:underline">lopd@isglobal.org</a>), 
                      attaching a copy of your national identity document or equivalent.
                    </p>
                    
                    <p>
                      You have the right to withdraw your consent at any time. Withdrawal of consent does not affect the 
                      lawfulness of processing based on consent before its withdrawal. If you do not agree with the manner 
                      in which ISGlobal handles your data or you consider that your rights have been infringed, you can file 
                      a complaint at any time with the Spanish Data Protection Agency 
                      (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">www.aepd.es</a> – C/ Jorge Juan, 6 de Madrid).
                    </p>
                  </div>
                </div>

                {/* Mandatory Consent Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={consentGiven}
                    onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                    <span className="text-red-600">*</span> By clicking the SEND button I acknowledge that I have been appropriately 
                    informed and that I consent to the processing of my personal data for the stated purpose.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !consentGiven}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'SEND'}
                </Button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Thank you! Your message has been sent successfully. We'll be in touch soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
