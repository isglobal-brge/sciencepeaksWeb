'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cookie, Shield, Settings, ExternalLink } from 'lucide-react'
import { useCookieConsent, type CookiePreferences } from '@/hooks/use-cookie-consent'

export function CookieBanner() {
  const [showConfigModal, setShowConfigModal] = useState(false)
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false
  })

  const { 
    preferences, 
    hasConsent, 
    isLoading, 
    updatePreferences, 
    acceptAll, 
    rejectAll 
  } = useCookieConsent()

  // Update local preferences when opening modal
  useEffect(() => {
    if (showConfigModal) {
      setLocalPreferences(preferences)
    }
  }, [showConfigModal, preferences])

  const handleSavePreferences = () => {
    updatePreferences(localPreferences)
    setShowConfigModal(false)
  }

  const openConfiguration = () => {
    setShowConfigModal(true)
  }

  // Don't render anything while loading or if consent has already been given
  if (isLoading || hasConsent) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Cookies and Privacy</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  This website uses its own cookies and third party cookies to make sure that it works 
                  properly, as well as some "optional" cookies to personalise content and advertising, 
                  provide social media features and analyse our traffic and how people use the website. 
                  They are important for you and for us because they influence your browsing 
                  experience, allow us to protect your privacy, and help us to continue improving the 
                  content by generating profiles based on browsing habits and thus displaying useful content.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  By accepting some or all optional cookies you give consent to the processing of your 
                  personal data, including transfer to third parties, some in countries outside of the 
                  European Economic Area that do not offer the same data protection standards as the 
                  country where you live.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  You can decide which optional cookies to accept by clicking on CONFIGURE, where 
                  you can also find more information about how your personal data is processed.{' '}
                  <button 
                    className="text-teal-600 hover:text-teal-700 underline inline-flex items-center gap-1"
                    onClick={() => {/* Add privacy policy link */}}
                  >
                    View our Privacy Policy
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 lg:flex-col xl:flex-row">
              <Button 
                onClick={acceptAll}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 text-sm"
              >
                ACCEPT AND NAVIGATE
              </Button>
              <Button 
                onClick={openConfiguration}
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 text-sm"
              >
                <Settings className="h-4 w-4 mr-2" />
                CONFIGURE
              </Button>
              <Button 
                onClick={rejectAll}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 text-sm"
              >
                REJECT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Modal */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-teal-600" />
              Cookie Configuration
            </DialogTitle>
            <DialogDescription>
              Choose which types of cookies you want to allow. You can change these settings at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Necessary Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Necessary Cookies</CardTitle>
                  <Switch checked={true} disabled className="opacity-50" />
                </div>
                <CardDescription>
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">
                  These cookies enable basic website functionality such as page navigation, 
                  access to secure areas, and remembering your cookie preferences.
                </p>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Analytics Cookies</CardTitle>
                  <Switch 
                    checked={localPreferences.analytics}
                    onCheckedChange={(checked) => 
                      setLocalPreferences(prev => ({ ...prev, analytics: checked }))
                    }
                  />
                </div>
                <CardDescription>
                  Help us understand how visitors interact with our website.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">
                  These cookies collect information about how you use our website, such as which pages 
                  you visit most often. This data helps us improve the website's performance and user experience.
                </p>
              </CardContent>
            </Card>

            {/* Functional Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Functional Cookies</CardTitle>
                  <Switch 
                    checked={localPreferences.functional}
                    onCheckedChange={(checked) => 
                      setLocalPreferences(prev => ({ ...prev, functional: checked }))
                    }
                  />
                </div>
                <CardDescription>
                  Enable enhanced functionality and personalization.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">
                  These cookies allow the website to provide enhanced functionality and personalization, 
                  such as remembering your preferences and providing customized content.
                </p>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Marketing Cookies</CardTitle>
                  <Switch 
                    checked={localPreferences.marketing}
                    onCheckedChange={(checked) => 
                      setLocalPreferences(prev => ({ ...prev, marketing: checked }))
                    }
                  />
                </div>
                <CardDescription>
                  Used to track visitors and display relevant advertisements.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600">
                  These cookies track your browsing habits to enable us to show advertising which is more likely 
                  to be of interest to you. They may be set by us or by third party providers.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button onClick={handleSavePreferences} className="flex-1 bg-teal-600 hover:bg-teal-700">
              Save Preferences
            </Button>
            <Button onClick={acceptAll} variant="outline" className="flex-1">
              Accept All
            </Button>
            <Button onClick={rejectAll} variant="outline" className="flex-1">
              Reject Optional
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 