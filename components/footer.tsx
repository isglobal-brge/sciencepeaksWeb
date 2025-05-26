import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SciencePeaks</h3>
              <p className="text-gray-400 text-sm">
                Advancing digital health research through innovative wearable technology 
                and precision medicine solutions.
              </p>
              <div className="mt-4 text-sm text-gray-400">
                <p>ISGlobal - Barcelona Institute for Global Health</p>
                <p>C/ Rosselló, 132, 7ª - 08036 Barcelona</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#research" className="text-gray-400 hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/#team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/legal-notice" className="text-gray-400 hover:text-white transition-colors">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies-policy" className="text-gray-400 hover:text-white transition-colors">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left text-gray-400 text-sm">
                <p>&copy; {currentYear} SciencePeaks. All rights reserved.</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
