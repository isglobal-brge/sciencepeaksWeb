"use client"

import type React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Footer } from '@/components/footer'
import { ArrowLeft, UserX, Database, AlertTriangle } from 'lucide-react'

export default function AccountDeletionPage() {
  const [formData, setFormData] = useState({
    email: "",
    requestType: "",
    reason: "",
    additionalInfo: ""
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    }))
  }

  const handleRequestTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      requestType: value
    }))
  }

  const handleConsentChange = (checked: boolean | 'indeterminate') => {
    setConsentGiven(checked === true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!consentGiven) {
      alert('Please confirm that you understand the consequences of this action.')
      return
    }

    if (!formData.requestType) {
      alert('Please select a request type.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xnnzagrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consentGiven: consentGiven,
          timestamp: new Date().toISOString(),
          subject: `Account Deletion Request - ${formData.requestType}`
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          email: "",
          requestType: "",
          reason: "",
          additionalInfo: ""
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to home link */}
          <Link 
            href="/" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <UserX className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Account Deletion Request
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're sorry to see you go. Please use this form to request deletion of your account or data from SciencePeaks.
              </p>
            </div>

            {/* Warning Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Account deletion is permanent and cannot be undone</li>
                    <li>• Data deletion requests will be processed within 30 days</li>
                    <li>• Some data may be retained for legal or regulatory compliance</li>
                    <li>• You will receive confirmation once your request is processed</li>
                  </ul>
                </div>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-green-800">Request Submitted Successfully</h3>
                    <p className="text-sm text-green-700 mt-1">
                      We have received your deletion request. You will receive a confirmation email shortly, and we will process your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-red-800">Error Submitting Request</h3>
                    <p className="text-sm text-red-700 mt-1">
                      There was an error processing your request. Please try again or contact our support team.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your registered email address"
                  required
                  className="w-full"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Please provide the email address associated with your SciencePeaks account
                </p>
              </div>

              {/* Request Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Request Type *
                </label>
                <RadioGroup value={formData.requestType} onValueChange={handleRequestTypeChange}>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="delete-account" id="delete-account" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="delete-account" className="font-medium text-gray-900 cursor-pointer">
                          <div className="flex items-center mb-2">
                            <UserX className="w-5 h-5 text-red-600 mr-2" />
                            Delete My Account Completely
                          </div>
                        </Label>
                        <p className="text-sm text-gray-600">
                          This will permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem value="delete-data-only" id="delete-data-only" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="delete-data-only" className="font-medium text-gray-900 cursor-pointer">
                          <div className="flex items-center mb-2">
                            <Database className="w-5 h-5 text-blue-600 mr-2" />
                            Delete My Data (Keep Account Active)
                          </div>
                        </Label>
                        <p className="text-sm text-gray-600">
                          This will delete your personal data while keeping your account structure intact. You can continue using the service with a fresh start.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Reason for Deletion */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Request *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleSelectChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Select a reason</option>
                  <option value="privacy-concerns">Privacy concerns</option>
                  <option value="no-longer-needed">No longer needed</option>
                  <option value="switching-platforms">Switching to another platform</option>
                  <option value="technical-issues">Technical issues</option>
                  <option value="data-portability">Data portability request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Please provide any additional details about your request..."
                  rows={4}
                  className="w-full"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consentGiven}
                  onCheckedChange={handleConsentChange}
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 cursor-pointer">
                  I understand that this action is permanent and cannot be undone. I confirm that I want to proceed with this deletion request and acknowledge that SciencePeaks will process this request in accordance with applicable data protection laws.
                </Label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !consentGiven || !formData.requestType}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing Request...
                    </span>
                  ) : (
                    'Submit Deletion Request'
                  )}
                </Button>
                
                <Link href="/">
                  <Button type="button" variant="outline" className="px-8 py-3">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>

            {/* Additional Support Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="prose prose-sm text-gray-600">
                <p>
                  If you have questions about data deletion or need assistance with your account, 
                  please contact our support team through our <Link href="/#contact" className="text-teal-600 hover:text-teal-700">contact form</Link> or 
                  review our <Link href="/privacy-policy" className="text-teal-600 hover:text-teal-700">Privacy Policy</Link> for more information about how we handle your data.
                </p>
                <p className="mt-3">
                  <strong>Processing Time:</strong> Account and data deletion requests are typically processed within 30 days. 
                  You will receive email confirmation once your request has been completed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 