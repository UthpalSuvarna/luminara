"use client"

import Image from "next/image"
import { X } from "lucide-react"

interface PathToHealing {
  id: number
  title: string
  description: string
  image: string
}

interface PathToHealingModalProps {
  item: PathToHealing | null
  isOpen: boolean
  onClose: () => void
}

export function PathToHealingModal({ item, isOpen, onClose }: PathToHealingModalProps) {
  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-none shadow-2xl max-w-lg w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-none bg-white/80 hover:bg-white shadow-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          <div className="relative mb-6">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={600}
              height={300}
              className="object-contain w-full h-64 rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
