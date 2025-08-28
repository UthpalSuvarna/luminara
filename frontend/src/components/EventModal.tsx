"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, MapPin, Users, Heart } from "lucide-react"

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

interface EventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!isOpen || !event) return null

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

        <div className="space-y-6 p-8">
          <div className="relative">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={600}
              height={300}
              className="object-cover w-full h-64 rounded-lg"
            />
            <Badge className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
              {event.category}
            </Badge>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold text-gray-900">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <MapPin className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-gray-900">{event.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Attendees</p>
                <p className="font-semibold text-gray-900">{event.attendees}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Details</h3>
            <p className="text-gray-700 leading-relaxed">{event.fullDescription}</p>
          </div>

          <div className="flex items-center gap-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <Heart className="w-5 h-5 text-red-500" />
            <p className="text-sm text-gray-700">
              Thank you to everyone who participated in making this event a success and helping us build a
              stronger, more supportive community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
