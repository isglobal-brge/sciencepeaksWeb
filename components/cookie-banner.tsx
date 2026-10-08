"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cookie, Shield, Settings, ExternalLink } from "lucide-react";
import {
  useCookieConsent,
  type CookiePreferences,
} from "@/hooks/use-cookie-consent";

export function CookieBanner() {
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    socialMedia: false,
    targetingFirstParty: false,
    targetingThirdParty: false,
    googleIabTcf: false,
    other: false,
  });

  const {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
  } = useCookieConsent();

  // Update local preferences when opening modal
  useEffect(() => {
    if (showConfigModal) {
      setLocalPreferences(preferences);
    }
  }, [showConfigModal, preferences]);

  const handleSavePreferences = () => {
    updatePreferences(localPreferences);
    setShowConfigModal(false);
  };

  const openConfiguration = () => {
    setShowConfigModal(true);
  };

  // Don't render anything while loading or if consent has already been given
  if (isLoading || hasConsent) return null;

  return (
    <>
      {/* Cookie Banner */}
      <aside
        aria-label="Cookie preferences"
        className="sp-cookie-banner font-poppins fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[1152px] rounded-2xl border border-white/90 bg-[#f5fafb]/95 p-4 text-[#143445] shadow-[0_12px_45px_#14344526] backdrop-blur-xl sm:inset-x-6 sm:bottom-5 sm:p-5"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dceff1]">
              <Cookie
                className="h-[18px] w-[18px] text-[#087f8b]"
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0">
              <h3 className="mb-1 text-[13px] font-semibold leading-5">
                Cookies &amp; privacy
              </h3>
              <p className="text-xs leading-relaxed text-[#284d5d]">
                Choose whether to allow optional cookies. We store your choice
                on this device.{" "}
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1 font-medium text-[#086674] underline decoration-[#a6ccd4] underline-offset-2 hover:decoration-[#086674] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087f8b]"
                >
                  Privacy policy
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 lg:w-[360px] lg:shrink-0">
            <Button
              onClick={acceptAll}
              variant="outline"
              className="h-11 w-full rounded-xl border-[#a6ccd4] bg-white/75 px-2 text-xs font-semibold text-[#086674] hover:border-[#087f8b] hover:bg-[#dceff1] hover:text-[#086674] focus-visible:ring-[#087f8b] focus-visible:ring-offset-[#f5fafb]"
            >
              Accept all
            </Button>
            <Button
              onClick={rejectAll}
              variant="outline"
              className="h-11 w-full rounded-xl border-[#a6ccd4] bg-white/75 px-2 text-xs font-semibold text-[#086674] hover:border-[#087f8b] hover:bg-[#dceff1] hover:text-[#086674] focus-visible:ring-[#087f8b] focus-visible:ring-offset-[#f5fafb]"
            >
              Reject all
            </Button>
            <Button
              onClick={openConfiguration}
              variant="outline"
              className="h-11 w-full rounded-xl border-[#a6ccd4] bg-white/75 px-2 text-xs font-semibold text-[#086674] hover:border-[#087f8b] hover:bg-[#dceff1] hover:text-[#086674] focus-visible:ring-[#087f8b] focus-visible:ring-offset-[#f5fafb]"
            >
              <Settings
                className="hidden h-4 w-4 sm:block"
                aria-hidden="true"
              />
              Settings
            </Button>
          </div>
        </div>
      </aside>

      {/* Configuration Modal */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-teal-600" />
              Your Privacy
            </DialogTitle>
            <DialogDescription className="text-left">
              When you visit any website, it may store or retrieve information
              on your browser, mostly in the form of cookies. This information
              might be about you, your preferences or your device and is mostly
              used to make the site work as you expect it to. The information
              does not usually directly identify you, but it can give you a more
              personalized web experience. Because we respect your right to
              privacy, you can choose not to allow some types of cookies. Click
              on the different category headings to find out more and change our
              default settings. However, blocking some types of cookies may
              impact your experience of the site and the services we are able to
              offer.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Strictly Necessary Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Strictly Necessary Cookies — Always Enabled
                  </CardTitle>
                  <Switch checked={true} disabled className="opacity-50" />
                </div>
                <CardDescription>
                  These cookies are necessary for the website to function and
                  cannot be switched off in our systems.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They are usually only set in response to actions made by you
                  which amount to a request for services, such as setting your
                  privacy preferences, logging in or filling in forms. You can
                  set your browser to block or alert you about these cookies,
                  but some parts of the site will not then work. These cookies
                  do not store any personally identifiable information.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="grid grid-cols-4 gap-2 mb-2 font-medium">
                    <div>Cookies</div>
                    <div>Aim</div>
                    <div>Duration</div>
                    <div>Management</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-gray-600">
                    <div>Cookie consent</div>
                    <div>Store user cookie preferences</div>
                    <div>1 Year</div>
                    <div>Own</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Functional / Preference Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Functional / Preference Cookies — Disabled
                  </CardTitle>
                  <Switch
                    checked={localPreferences.functional}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        functional: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies enable the website to provide enhanced
                  functionality and personalisation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They remember information that changes the way the website
                  behaves or looks, like your preferred language or the region
                  that you are in. They may be set by us or by third party
                  providers whose services we have added to our pages. If you do
                  not allow these cookies then some or all of these services may
                  not function properly.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="grid grid-cols-4 gap-2 mb-2 font-medium">
                    <div>Cookies</div>
                    <div>Aim</div>
                    <div>Duration</div>
                    <div>Management</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-gray-600">
                    <div>Language preference</div>
                    <div>Remember user language selection</div>
                    <div>3 Months</div>
                    <div>Own</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistic / Analytical Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Statistic / Analytical Cookies — Disabled
                  </CardTitle>
                  <Switch
                    checked={localPreferences.analytics}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        analytics: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies allow us to count visits and traffic sources so
                  we can measure and improve the performance of our site.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They help us to know which pages are the most and least
                  popular and see how visitors move around the site. All
                  information these cookies collect is aggregated and therefore
                  anonymous. If you do not allow these cookies we will not know
                  when you have visited our site, and will not be able to
                  monitor its performance.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="grid grid-cols-4 gap-2 mb-2 font-medium">
                    <div>Cookies</div>
                    <div>Aim</div>
                    <div>Duration</div>
                    <div>Management</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-gray-600">
                    <div>Analytics</div>
                    <div>Track website usage and performance</div>
                    <div>2 Years</div>
                    <div>3rd Party</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Social Media Cookies — Disabled
                  </CardTitle>
                  <Switch
                    checked={localPreferences.socialMedia}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        socialMedia: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies are set by a range of social media services that
                  we have added to the site.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They enable you to share our content with your friends and
                  networks. They are capable of tracking your browser across
                  other sites and building up a profile of your interests. This
                  may impact the content and messages you see on other websites
                  you visit. If you do not allow these cookies you may not be
                  able to use or see these sharing tools.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="text-gray-600 mb-2">
                    This website does not currently use this type of cookie
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Targeting (1st Party) Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Targeting (1st Party) Cookies — Disabled
                  </CardTitle>
                  <Switch
                    checked={localPreferences.targetingFirstParty}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        targetingFirstParty: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies may be set through our site by ourselves.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They may be used by ourselves to build a profile of your
                  interests and show you relevant content or adverts on our
                  sites. They do not store directly personal information, but
                  are based on uniquely identifying your browser and internet
                  device. If you do not allow these cookies, you may experience
                  less personalised content and/or advertising.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="text-gray-600 mb-2">
                    This website does not use this type of cookie
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Targeting (3rd Party) / Advertising Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Targeting (3rd Party) / Advertising Cookies — Disabled
                  </CardTitle>
                  <Switch
                    checked={localPreferences.targetingThirdParty}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        targetingThirdParty: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies may be set through our site by our advertising
                  partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  They may be used by those companies to build a profile of your
                  interests and show you relevant adverts on other sites. They
                  do not store directly personal information, but are based on
                  uniquely identifying your browser and internet device. If you
                  do not allow these cookies, you will experience less targeted
                  advertising.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="text-gray-600 mb-2">
                    This website does not use this type of cookie
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google & IAB TCF 2 Purposes */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Google & IAB TCF 2 Purposes of Processing — Inactive
                  </CardTitle>
                  <Switch
                    checked={localPreferences.googleIabTcf}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        googleIabTcf: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  Allowing third-party ad tracking and third-party ad serving
                  through Google and other vendors to occur.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  Please see more information on Google Ads.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="text-gray-600 mb-2">
                    This website does not use this type of cookie
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Other — Inactive</CardTitle>
                  <Switch
                    checked={localPreferences.other}
                    onCheckedChange={(checked) =>
                      setLocalPreferences((prev) => ({
                        ...prev,
                        other: checked,
                      }))
                    }
                  />
                </div>
                <CardDescription>
                  These cookies are cookies that we are in the process of
                  classifying.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4">
                  Together with the providers of individual cookies.
                </p>
                <div className="bg-gray-50 p-3 rounded text-xs">
                  <div className="font-semibold mb-2">Cookies Details</div>
                  <div className="text-gray-600 mb-2">
                    This website does not use this type of cookie
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-teal-600 hover:bg-teal-700"
            >
              SAVE SETTINGS
            </Button>
            <Button onClick={acceptAll} variant="outline" className="flex-1">
              ALLOW ALL COOKIES
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
