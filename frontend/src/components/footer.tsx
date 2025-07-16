import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 ">Luminara</h3>
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
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blogs & Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg text-red-400 font-sans">Emergency Support</h4>
            <div className="mb-4">
              <p className="text-base text-gray-300 mb-2 font-sans">24/7 Suicide Prevention Helpline</p>
            </div>
            <div className="bg-red-900/20 p-4 rounded-lg border border-red-800">
              <p className="text-sm text-red-200 font-sans">
                <a
                  href="tel:08242983444"
                  className="text-2xl text-white font-bold bg-red-600 px-4 py-2 rounded-lg font-mono mb-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 inline-block text-center"
                >
                  0824-2983444
                </a>
                <br />
                <strong>Crisis?</strong> Call immediately. You are not alone.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col  justify-between items-center">
            <div className="mb-2 md:mb-0">
              <p className="text-gray-300 text-base font-sans text-center md:text-left">
                Luminara- A Suicide Lifeline Initiative
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
