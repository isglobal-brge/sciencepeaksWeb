import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | SciencePeaks',
  description: 'Privacy policy for the SciencePeaks website in accordance with GDPR and LOPD.',
  robots: 'noindex, nofollow'
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                In accordance with the current data protection regulations, ISGlobal 
                informs you of the following:
              </p>

              <p className="mb-4">
                When you are requested to provide personal data for the provision of services, you 
                will be informed of what data you must provide.
              </p>

              <p className="mb-4">
                If you do not provide this required data, we will not be able to provide you with the 
                services. The personal data you provide or that ISGlobal obtains as a result of your 
                browsing, queries or requests via our webpage at <strong>sciencepeaks.isglobal.org</strong> (the "website") 
                will be included in a file owned by ISGlobal for managing, storing and tracking 
                your requests for information and/or contracting of goods or services offered via 
                the website.
              </p>

              <p className="mb-4">
                The information obtained from you by ISGlobal from the website 
                when you sign up for a promotional event or send a form is processed with the 
                utmost confidentiality for helping you to take part in the event in question or, in 
                the second case, sending you the information you requested. The information 
                obtained is not used for any other purpose. The personal data provided will not be 
                disclosed or transferred to third parties without your consent.
              </p>

              <p className="mb-4">
                When the completion of a form is requested, the user will be informed of the 
                identity and data of the data controller and the Data Protection Officer, the 
                purposes and legal basis of the treatment, the recipients of the data as well as, 
                where appropriate, the international data transfers, the data retention periods and 
                the user's ability to exercise their rights of access, rectification, deletion, 
                portability, limitation and / or opposition to treatment, the right complaint to the 
                control authority and the existence of automated decisions. The personal data 
                collected will only be processed and / or transferred for the express purpose, and 
                always with the consent of the user.
              </p>

              <p className="mb-4">
                Information is only sent via the form(s) of the website after you have expressed 
                your acceptance by selecting an "ACCEPT/SEND" (or similar) button, via which 
                ISGlobal has proof that you gave your consent for it to process your personal data.
              </p>

              <p className="mb-4">
                In all cases, you guarantee that the data you provide is true, exact, complete and 
                up-to-date. ISGlobal may decline to provide the information or services requested 
                to any user providing false data without prejudice to any other legal action open to 
                it.
              </p>

              <p className="mb-4">
                In virtue of Article 22 of Spanish Law 34/2002, of July 11, on the Information 
                Society Services and Electronic Commerce, ISGlobal may store and retrieve 
                "cookies" (data in a text file) from your machine, provided you have given consent 
                and after we have provided you with clear and complete information on the use of 
                these cookies. You may obtain complete information on the purpose for installing 
                these cookies and what they are used for in <Link href="/cookies-policy" className="text-teal-600 hover:text-teal-700 underline">SciencePeaks' Cookies Policy</Link>.
              </p>

              <p className="mb-4">
                This does not prevent any technical storage or access for the sole purpose of 
                carrying out or facilitating the transmission of a communication over an electronic 
                communications network, or as strictly necessary to provide an information 
                society service expressly requested by you.
              </p>

              <p className="mb-4">
                You may exercise your rights of access, rectification, erasure, objection, portability 
                and restriction of the processing by sending a request to the Data Protection 
                Officer via email (<a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:text-teal-700">lopd@isglobal.org</a>) or the ISGlobal postal address: c/ Rosselló, 
                132, 08036 Barcelona, Spain. The request must include your full name, address for 
                notices, a photocopy of your ID document or passport and an indication of the 
                right you want to exercise.
              </p>

              <p className="mb-4">
                If you are unhappy with the processing done by ISGlobal or believe that your rights 
                have been violated, you may file a claim with the Spanish Data Protection Agency 
                at any time (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700">www.aepd.es</a> – C/ Jorge Juan, 6, Madrid).
              </p>

              <p className="mb-4">
                ISGlobal has implemented the necessary technical and organizational security 
                measures in order to guarantee the security of your personal data and prevent its 
                alteration, loss, treatment and / or unauthorized access, considering the state of 
                technology, the nature of the stored data and the risks to which they are exposed, 
                whether they come from human action or the physical or natural environment, all 
                in accordance with the provisions of current regulations.
              </p>

              <p className="mb-6">
                In accordance with Law 34/2002, of 11 July, on the Services of the Information 
                Society and Electronic Commerce, if you do not wish to receive electronic 
                commercial notices from ISGlobal in the future, you may inform us of this 
                preference by sending an email to the Data Protection Officer (<a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:text-teal-700">lopd@isglobal.org</a>).
              </p>

              <p className="text-sm text-gray-600 mt-8">
                <em>Updated on March 11, 2020</em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 