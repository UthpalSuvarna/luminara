"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    //{ name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/luminara.jpg" width={60} height={60} alt="Luminara Logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold text-gray-900">Luminara</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-blue-600 font-extrabold hover:bg-blue-700 rounded-none">
              <Link href="/helpline" className="font-extrabold">Suicide Lifeline</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-2 font-extrabold rounded-none">
                <Link href="/helpline" onClick={() => setIsMenuOpen(false)}>
                  Suicide Lifeline
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
