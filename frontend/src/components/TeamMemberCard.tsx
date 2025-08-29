"use client"

import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
  description?: string
  email?: string
  phone?: string
  type: "lead" | "volunteer"
}

interface TeamMemberCardProps {
  member: TeamMember
  onClick: (member: TeamMember) => void
}

export function TeamMemberCard({ member, onClick }: TeamMemberCardProps) {
  if (!member) {
    return (
      <div className="bg-gray-100 rounded-2xl p-6 text-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-500">Member data unavailable</p>
      </div>
    )
  }

  const { name = "Unknown Member", role = "Team Member", imageUrl = "/professional-headshot.png", description } = member

  return (
    <div
      className="group cursor-pointer bg-white rounded-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
      onClick={() => onClick(member)}
    >
      <div className="text-center">
        {/* Image Container */}
        <div className="relative w-24 h-32 sm:w-30 sm:h-40 lg:w-36 lg:h-48 mx-auto mb-6">
          <Image
            src={`${imageUrl}` || "/placeholder.svg"}
            alt={`${name} - ${role}`}
            fill
            className="object-cover rounded-none ring-4 ring-white shadow-md group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 120px, 144px"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {name}
          </h3>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
            {role}
          </div>
          {description && <p className="text-gray-600 text-sm mt-3 line-clamp-2 leading-relaxed">{description}</p>}
        </div>

        {/* Click indicator */}
        <div className="mt-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>View Details</span>
          </div>
        </div>
      </div>
    </div>
  )
}
