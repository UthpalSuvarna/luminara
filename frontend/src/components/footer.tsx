import Link from "next/link"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Luminara</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing hope, support, and resources for those in crisis and their loved ones.
            </p>
            <div className="bg-red-600 p-4 rounded-lg">
              <p className="font-semibold mb-2">Crisis Hotline</p>
              <p className="text-lg">0824 2983444</p>
              <p className="text-sm text-red-200">Available 24/7</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/lifeline" className="text-gray-300 hover:text-white">
                  Lifeline
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Crisis Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Support Groups
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">help@luminara.org</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-gray-300">
                  123 Hope Street
                  <br />
                  Support City, SC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luminara. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
