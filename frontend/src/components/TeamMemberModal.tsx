"use client"

import Image from "next/image"
import { X } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
  description?: string
  email?: string
  phone?: string
  type: "lead" | "volunteer"
}

interface TeamMemberModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  if (!isOpen || !member) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-none shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-none bg-white/80 hover:bg-white shadow-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header with image */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 pb-16">
          <div className="text-center mt-10">
            <div className="relative w-32 h-48 mx-auto mb-6">
              <Image
                src={`${member.imageUrl}` || "/placeholder.svg"}
                alt={`${member.name} - ${member.role}`}
                fill
                className="object-cover  shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
            <div className="inline-flex items-center px-2 py-1 rounded-none bg-blue-600 text-white font-medium text-sm">
              {member.role}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Description */}
          {member.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          )}

          {/* Contact Info */}
          {/* <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
            <div className="space-y-2">
              {member.email && (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-gray-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
                    {member.email}
                  </a>
                </div>
              )}
              {member.phone && (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-gray-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-800">
                    {member.phone}
                  </a>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
