'use client'

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  socialMedia: boolean
  targetingFirstParty: boolean
  targetingThirdParty: boolean
  googleIabTcf: boolean
  other: boolean
}

const COOKIE_CONSENT_KEY = 'sciencepeaks-cookie-consent'
const COOKIE_PREFERENCES_KEY = 'sciencepeaks-cookie-preferences'

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  socialMedia: false,
  targetingFirstParty: false,
  targetingThirdParty: false,
  googleIabTcf: false,
  other: false
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
      functional: true,
      analytics: true,
      socialMedia: true,
      targetingFirstParty: true,
      targetingThirdParty: true,
      googleIabTcf: true,
      other: true
    }
    updatePreferences(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      socialMedia: false,
      targetingFirstParty: false,
      targetingThirdParty: false,
      googleIabTcf: false,
      other: false
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
  const canUseFunctional = () => preferences.functional
  const canUseAnalytics = () => preferences.analytics
  const canUseSocialMedia = () => preferences.socialMedia
  const canUseTargetingFirstParty = () => preferences.targetingFirstParty
  const canUseTargetingThirdParty = () => preferences.targetingThirdParty
  const canUseGoogleIabTcf = () => preferences.googleIabTcf
  const canUseOther = () => preferences.other

  return {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
    resetConsent,
    canUseFunctional,
    canUseAnalytics,
    canUseSocialMedia,
    canUseTargetingFirstParty,
    canUseTargetingThirdParty,
    canUseGoogleIabTcf,
    canUseOther
  }
} 