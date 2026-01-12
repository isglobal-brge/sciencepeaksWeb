import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center md:text-left text-gray-400 text-sm">
                <p>&copy; {currentYear} SciencePeaks. All rights reserved.</p>
              </div>
              <a
                href="https://www.isglobal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo-isglobal.jpg"
                  alt="ISGlobal"
                  width={80}
                  height={40}
                  className="h-8 w-auto"
                />
              </a>
            </div>
            
            {/* Legal Links - Always Visible */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-gray-400">
              <Link href="/legal-notice" className="hover:text-white transition-colors">
                Legal Notice
              </Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/cookies-policy" className="hover:text-white transition-colors">
                Cookies Policy
              </Link>
              <span>|</span>
              <Link href="/account-deletion" className="hover:text-white transition-colors">
                Account Deletion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
