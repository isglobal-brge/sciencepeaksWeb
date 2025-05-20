import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} SciencePeaks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
