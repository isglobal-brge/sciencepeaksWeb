import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Notice & Conditions of Use | SciencePeaks',
  description: 'Legal notice and conditions of use for the SciencePeaks website.',
  robots: 'noindex, nofollow'
}

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Legal Notice & Conditions of Use of the Website
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Notice</h2>
              
              <div className="mb-6 space-y-2">
                <p><strong>Owner of the website and the application:</strong></p>
                <p>Fundación Privada Instituto de Salud Global Barcelona (ISGlobal)</p>
                <p><strong>CIF:</strong> G65341695</p>
                <p><strong>Postal address:</strong> C/ Rosselló, 132, 7ª - 08036 Barcelona</p>
                <p>Registered in the Foundations Registry of the Directorate General of Law and Legal Entities of the Government of Catalonia under number 2,634</p>
                <p><strong>Email:</strong> <a href="mailto:lopd@isglobal.org" className="text-teal-600 hover:text-teal-700">lopd@isglobal.org</a></p>
              </div>

              <p className="mb-6">
                The website is the property of ISGlobal.
              </p>

              <p className="mb-6">
                Use of the website is subject to the following conditions of use. Please read them 
                carefully. Accessing the website and using its content implies that you have read 
                and accepted, without reservation, these conditions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Conditions of use</h2>
              
              <p className="mb-4">
                The website contains content prepared by ISGlobal solely for informational 
                purposes. This content may not reflect the most up-to-date information on the 
                matters addressed. Likewise, this material may be amended, extended or updated 
                without notice.
              </p>

              <p className="mb-4">
                You accessing this content does not create or imply any professional or trust 
                relationship between ISGlobal and you.
              </p>

              <p className="mb-4">
                The links on the website may take you to other websites, pages or applications 
                managed by third parties over which ISGlobal has no control.
              </p>

              <p className="mb-6">
                ISGlobal is not responsible for the content or the state of these websites, pages and 
                applications. Being able to access them via our website or application does not 
                imply that ISGlobal recommends or approves their content.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Limitation of liability</h2>
              
              <p className="mb-4">
                You use our website at your own risk and expense. ISGlobal is not responsible for 
                any errors or omissions in the content of the website, the application or any other 
                sites you may access via the website or the application. ISGlobal is not liable for 
                any damage arising from the use of our website or any action performed based on 
                information provided on our website.
              </p>

              <p className="mb-6">
                ISGlobal does not guarantee the absence of viruses or other harmful elements that 
                could damage or alter your IT system, electronic documents or files on our 
                website. As a result, ISGlobal does not accept any liability for any loss or damage 
                that such elements could cause to you or a third party.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                <em>Updated on March 11, 2020</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 