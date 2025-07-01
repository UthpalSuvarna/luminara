import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-serif">Luminara</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-sans">
              Your Healing Space - A holistic mental health and wellness hub committed to breaking the silence around
              mental health.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg font-sans">Quick Links</h4>
            <ul className="space-y-3 text-base font-sans">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog/Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg font-sans">Support & Resources</h4>
            <ul className="space-y-3 text-base font-sans">
              <li>
                <Link href="/helpline" className="text-gray-300 hover:text-white transition-colors duration-200">
                  24/7 Helpline
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Counseling Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Mental Health Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-red-400 font-sans">Emergency Support</h4>
            <div className="mb-4">
              <p className="text-base text-gray-300 mb-2 font-sans">24/7 Suicide Prevention Helpline</p>
              <p className="text-2xl font-bold text-red-400 font-mono mb-4">0824-2983444</p>
            </div>
            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
              <p className="text-sm text-red-200 font-sans">
                <strong>Crisis?</strong> Call immediately. You are not alone.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-base font-sans">
                © 2024 Luminara - Susheg Charitable Trust. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm italic font-sans">
              "Illuminating paths to well-being for everyone in our community"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
