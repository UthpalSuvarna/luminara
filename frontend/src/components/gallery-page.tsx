"use client"

import { useState, useEffect } from "react"
import { EventCard } from "@/components/EventCard"
import { EventModal } from "@/components/EventModal"
import { Button } from "@/components/ui/button"

interface Event {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  date: string
  location: string
  category: string
}

const GalleryPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/data/events.json")
        const text = await response.text()
        if (text) {
          const data = JSON.parse(text)
          setEvents(data.events ?? [])
        } else {
          setEvents([])
        }
      } catch (error) {
        console.error("Error loading events:", error)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const handleCardClick = (event: Event) => {
    setSelectedEvent(event)
  }

  const handleCloseModal = () => {
    setSelectedEvent(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            Our Mental Health <span className="text-blue-600">Outreach Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Discover the impact we're making in our community through mental health awareness, support programs, and
            educational initiatives that bring hope and healing to those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event: Event) => (
            <EventCard key={event.id} event={event} onClick={handleCardClick} />
          ))}
        </div>

        <EventModal event={selectedEvent} isOpen={selectedEvent !== null} onClose={handleCloseModal} />

        
      </div>
    </div>
  )
}

export default GalleryPage
