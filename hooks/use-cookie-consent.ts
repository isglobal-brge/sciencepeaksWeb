'use client'

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  functional: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = 'sciencepeaks-cookie-consent'
const COOKIE_PREFERENCES_KEY = 'sciencepeaks-cookie-preferences'

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences(parsed)
      } catch (error) {
        console.error('Error parsing cookie preferences:', error)
      }
    }
    
    setHasConsent(!!consent)
    setIsLoading(false)
  }, [])

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences)
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(newPreferences))
    localStorage.setItem(COOKIE_CONSENT_KEY, 'configured')
    setHasConsent(true)
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true
    }
    updatePreferences(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false
    }
    updatePreferences(onlyNecessary)
  }

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    localStorage.removeItem(COOKIE_PREFERENCES_KEY)
    setPreferences(defaultPreferences)
    setHasConsent(false)
  }

  // Helper functions to check specific cookie types
  const canUseAnalytics = () => preferences.analytics
  const canUseFunctional = () => preferences.functional
  const canUseMarketing = () => preferences.marketing

  return {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
    resetConsent,
    canUseAnalytics,
    canUseFunctional,
    canUseMarketing
  }
} 