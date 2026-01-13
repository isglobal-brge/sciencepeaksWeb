import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo + Copyright */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.isglobal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Image
                  src="/isglobal_logo.png"
                  alt="ISGlobal"
                  width={120}
                  height={60}
                  className="h-10 w-auto"
                />
              </a>
              <div className="text-gray-400 text-sm">
                <p>&copy; {currentYear} SciencePeaks. All rights reserved.</p>
              </div>
            </div>

            {/* Legal Links */}
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
