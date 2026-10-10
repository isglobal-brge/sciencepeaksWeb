"use client";

import { useEffect, useState } from "react";
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
import { Shield } from "lucide-react";
import type { CookiePreferences } from "@/hooks/use-cookie-consent";

type CookieSettingsDialogProps = {
  open: boolean;
  preferences: CookiePreferences;
  onOpenChange: (open: boolean) => void;
  onSave: (preferences: CookiePreferences) => void;
  onAcceptAll: () => void;
  onReturnFocus: () => void;
};

export function CookieSettingsDialog({
  open,
  preferences,
  onOpenChange,
  onSave,
  onAcceptAll,
  onReturnFocus,
}: CookieSettingsDialogProps) {
  const [localPreferences, setLocalPreferences] = useState(preferences);

  useEffect(() => {
    if (open) setLocalPreferences(preferences);
  }, [open, preferences]);

  const handleSavePreferences = () => onSave(localPreferences);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sp-cookie-dialog"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          onReturnFocus();
        }}
      >
        <DialogHeader>
          <DialogTitle className="sp-cookie-dialog-title flex items-center gap-2">
            <Shield className="h-5 w-5 text-teal-600" aria-hidden="true" />
            Your Privacy
          </DialogTitle>
          <DialogDescription className="sp-cookie-dialog-description text-left">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Strictly Necessary Cookies — Always Enabled
                </CardTitle>
                <Switch
                  aria-label="Strictly Necessary Cookies"
                  checked={true}
                  disabled
                  className="opacity-50"
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
              <div tabIndex={0} role="region" aria-label="Cookies Details" className="sp-cookie-table bg-gray-50 p-3 rounded text-xs">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Functional / Preference Cookies — Disabled
                </CardTitle>
                <Switch
                  aria-label="Functional / Preference Cookies"
                  checked={localPreferences.functional}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      functional: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
              <div tabIndex={0} role="region" aria-label="Cookies Details" className="sp-cookie-table bg-gray-50 p-3 rounded text-xs">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Statistic / Analytical Cookies — Disabled
                </CardTitle>
                <Switch
                  aria-label="Statistic / Analytical Cookies"
                  checked={localPreferences.analytics}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      analytics: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
              <div tabIndex={0} role="region" aria-label="Cookies Details" className="sp-cookie-table bg-gray-50 p-3 rounded text-xs">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Social Media Cookies — Disabled
                </CardTitle>
                <Switch
                  aria-label="Social Media Cookies"
                  checked={localPreferences.socialMedia}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      socialMedia: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Targeting (1st Party) Cookies — Disabled
                </CardTitle>
                <Switch
                  aria-label="Targeting (1st Party) Cookies"
                  checked={localPreferences.targetingFirstParty}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      targetingFirstParty: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Targeting (3rd Party) / Advertising Cookies — Disabled
                </CardTitle>
                <Switch
                  aria-label="Targeting (3rd Party) / Advertising Cookies"
                  checked={localPreferences.targetingThirdParty}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      targetingThirdParty: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">
                  Google & IAB TCF 2 Purposes of Processing — Inactive
                </CardTitle>
                <Switch
                  aria-label="Google & IAB TCF 2 Purposes of Processing"
                  checked={localPreferences.googleIabTcf}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      googleIabTcf: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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
          <Card className="sp-cookie-category">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="sp-cookie-category-title text-lg">Other — Inactive</CardTitle>
                <Switch
                  aria-label="Other"
                  checked={localPreferences.other}
                  onCheckedChange={(checked) =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      other: checked,
                    }))
                  }
                />
              </div>
              <CardDescription className="sp-cookie-category-description">
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

        <div className="sp-cookie-dialog-actions">
          <Button
            onClick={handleSavePreferences}
            className="flex-1 bg-teal-600 hover:bg-teal-700"
          >
            SAVE SETTINGS
          </Button>
          <Button
            onClick={onAcceptAll}
            variant="outline"
            className="flex-1"
          >
            ALLOW ALL COOKIES
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
