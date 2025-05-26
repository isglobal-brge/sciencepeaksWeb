import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookies Policy | SciencePeaks',
  description: 'Cookies policy for the SciencePeaks website explaining how we use cookies.',
  robots: 'noindex, nofollow'
}

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Cookies Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Our website <strong>sciencepeaks.isglobal.org</strong> (the "Website") uses cookies to collect information 
                on how the Website is used.
              </p>

              <p className="mb-4">
                A cookie is a file downloaded onto your machine (computer or mobile device) for 
                storing data that may be updated and retrieved by the entity that installed it.
              </p>

              <p className="mb-4">
                The information collected via cookies may include the date and time you visited 
                the website, the pages you viewed, the time you spent on our website and the 
                websites you visited before and after visiting our site.
              </p>

              <p className="mb-4">
                We use cookies to facilitate your browsing of our Website, distinguish you from 
                other users, provide you a better use experience and identify problems with our 
                Website. If you provide your consent, we will use cookies to obtain information on 
                your preferences and tailor our Website to your interests.
              </p>

              <p className="mb-6">
                The purpose of this cookies policy is to provide you with clear and precise 
                information on the cookies used on our Website (the "Cookies Policy"). For more 
                information on the cookies used on our Website, please email your questions to 
                the Data Protection Officer: <a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:text-teal-700">lopd@isglobal.org</a>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Type of cookies used on the Website</h2>
              
              <p className="mb-4">Our Website uses the cookies described below.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">First-party cookies</h3>
              
              <p className="mb-4">
                These cookies are sent to your computer and handled only by us to improve the 
                operation of the Website. Information collected is used to improve the quality of 
                our service and your user experience. These cookies remain in your browser for 
                longer. This allows us to recognise you when you return to the Website and tailor 
                the content offered to your preferences.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Third-party analytics cookies</h3>
              
              <p className="mb-4">
                Interacting with the content of our Website can also cause the installation of third-
                party cookies (e.g., when you click on social network buttons or watch videos 
                hosted on our Website). Third-party cookies are installed by other domains; not 
                ours. We cannot access the data stored in the cookies of other websites when you 
                browse those websites.
              </p>

              <p className="mb-4">
                Our Website uses Google Analytics audience measurement system, Facebook, First 
                Party, Twitter, Vimeo, YouTube, Instagram, Issuu and Opinion Stage. These tools 
                allow us to know how users interact with our Website. We use "persistent" cookies. 
                Persistent cookies store data on your terminal that can be accessed and processed 
                during a defined time period by the owner of the cookie. This time period could be 
                anything from a few minutes to several years.
              </p>

              <p className="mb-4">
                Below is a list of cookies according to the purpose for which the data obtained is 
                processed:
              </p>

              <ul className="list-disc ml-6 mb-6 space-y-2">
                <li>
                  <strong>Technical cookies.</strong> These cookies allow you to browse a webpage, 
                  platform or application and use the options of the services you find there. 
                  For instance, they are used for monitoring web traffic and data 
                  communication, identifying the session, providing access to restricted areas, 
                  remembering elements in an order, carrying out the purchasing process of 
                  an order, performing a request for enrolment or participation in an event, 
                  using security elements during browsing, storing content for the playing of 
                  audiovisuals, and sharing content via social networks.
                </li>
                
                <li>
                  <strong>Personalisation cookies.</strong> These allow you to access the service and have 
                  some general characteristics predefined based on a series of criteria found 
                  in your terminal, such as language, browser type with which you are 
                  accessing the service, regional configuration from where you are accessing 
                  the service, etc.
                </li>
                
                <li>
                  <strong>Analytics cookies.</strong> These cookies allow monitoring and analysing user 
                  behaviour on a website. Information collected via this type of cookie is used 
                  to measure the activity of websites, applications or platforms and for 
                  creating the browsing profiles of users of these sites, applications and 
                  platforms. This allows introducing improvements based on the analysis of 
                  user usage of the service.
                </li>
                
                <li>
                  <strong>Advertising cookies.</strong> These allow managing, in the most effective manner 
                  possible, advertising spaces.
                </li>
                
                <li>
                  <strong>Behavioural advertising cookies.</strong> These cookies store information on 
                  user behaviour obtained via the continual monitoring of their browsing 
                  habits, which allows creating a specific profile for displaying targeted 
                  advertising based on this information.
                </li>
                
                <li>
                  <strong>External social network cookies.</strong> These cookies are used so visitors to 
                  websites can interact with the content of social networks (Facebook, 
                  YouTube, Twitter, LinkedIn, etc.). They are generated only for the users of 
                  these social networks. The conditions of use of these cookies and the 
                  information collected is governed by the privacy policy of the social network 
                  platform in question.
                </li>
              </ul>

              <p className="mb-4">
                Along with our server's log files, these cookies tell us the total number of visitors to 
                our Website and which parts of our site are the most popular. Thanks to them, we 
                obtain information that helps us improve browsing and provide a better service to 
                our users and clients.
              </p>

              <p className="mb-6">
                Visit the following link to Google's website to read about the type of cookies used 
                by Google Analytics and their expiry time: <br />
                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-teal-600 hover:text-teal-700 break-all">
                  https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Consent</h2>
              
              <p className="mb-6">
                By browsing and remaining on our Website, you provide consent for our use of the 
                cookies described for the time periods specified under the conditions of this 
                Cookies Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Disabling and blocking cookies</h2>
              
              <p className="mb-4">
                Cookies are not required for using our Website. You can block and disable cookies 
                by configuring your browser to block the installation of all or some cookies. Most 
                browsers can be set to warn you of the presence of cookies or block them 
                automatically. If you block cookies, you may continue using our Website. However, 
                the use of some of its services may be limited, and your user experience may be 
                diminished.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Withdrawing your consent</h2>
              
              <p className="mb-4">
                If at any time you want to withdraw the consent you gave under this Cookies 
                Policy, delete the cookies stored on your machine (computer or mobile device) via 
                the settings and configuration of your web browser.
              </p>

              <p className="mb-6">
                For more information on deleting, disabling or blocking cookies, visit: <br />
                <a href="http://www.allaboutcookies.org/manage-cookies/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-teal-600 hover:text-teal-700">
                  http://www.allaboutcookies.org/manage-cookies/
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Changing your browser's cookie configuration and settings</h2>
              
              <p className="mb-4">
                Unless you have adjusted your browser's configuration, our system creates cookies 
                when you visit our Website. All web browsers allow changing this configuration.
              </p>

              <p className="mb-4">
                Click on the links below for how to adjust the cookie configuration of the following 
                browsers:
              </p>

              <ul className="list-disc ml-6 mb-6 space-y-1">
                <li>
                  <strong>Internet Explorer:</strong>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li><a href="https://support.microsoft.com/en-gb/help/196955" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Version 5</a></li>
                    <li><a href="https://support.microsoft.com/en-gb/help/260971/description-of-cookies" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Versions 6, 7, 8 and 9</a></li>
                    <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Version 11</a></li>
                  </ul>
                </li>
                <li>
                  <strong>Firefox:</strong> <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Cookie settings</a>
                </li>
                <li>
                  <strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Cookie settings</a>
                </li>
                <li>
                  <strong>Safari:</strong> <a href="https://support.apple.com/kb/ph21411?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">Desktop</a> and <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">iOS</a>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Changes to the Cookies Policy</h2>
              
              <p className="mb-6">
                We may update the Cookies Policy of our Website from time to time. We 
                recommend that you review this policy each time you visit our Website so that you 
                are adequately informed on how and for what we use cookies. The Cookies Policy 
                was last updated on July 6, 2018.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Contact</h2>
              
              <p className="mb-6">
                For any query, comment or suggestion regarding our Cookies Policy, please email 
                the Data Protection Officer: <a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:text-teal-700">lopd@isglobal.org</a>.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                <em>Updated on July 6, 2018</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 