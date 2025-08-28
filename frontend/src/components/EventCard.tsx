"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users } from "lucide-react"

interface Event {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  date: string
  location: string
  attendees: number
  category: string
}

interface EventCardProps {
  event: Event
  onClick: (event: Event) => void
}

export function EventCard({ event, onClick }: EventCardProps) {
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      Awareness: "bg-blue-100 text-blue-800",
      Workshop: "bg-green-100 text-green-800",
      "Support Group": "bg-purple-100 text-purple-800",
      Training: "bg-orange-100 text-orange-800",
      Retreat: "bg-teal-100 text-teal-800",
      Seminar: "bg-red-100 text-red-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div
      className="group cursor-pointer bg-white rounded-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
      onClick={() => onClick(event)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={500}
          height={300}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {event.date}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {event.attendees}
          </div>
        </div>
      </div>
    </div>
  )
}
