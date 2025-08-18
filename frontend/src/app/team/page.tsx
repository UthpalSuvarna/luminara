"use client"

import { TeamMemberCard } from "@/components/TeamMemberCard"
import { TeamMemberModal } from "@/components/TeamMemberModal"
import { useState, useEffect } from "react"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface TeamMember {
  name: string
  role: string
  imageUrl: string
  description?: string
  email?: string
  phone?: string
  type: "lead" | "volunteer"
}

export default function Page() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/team-data.json")
        const data = await response.json()
        setTeamMembers(data.teamMembers)
      } catch (error) {
        console.error("Error loading team data:", error)
      }
    }

    fetchTeamData()
  }, [])

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  const leads = teamMembers.filter((member) => member.type === "lead")
  const volunteers = teamMembers.filter((member) => member.type === "volunteer")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
              <p className="text-xl text-gray-700">
                The passionate individuals who drive our mission forward.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced leaders guide the organization's vision and strategic direction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leads.map((member) => (
                <TeamMemberCard key={member.name} member={member} onClick={handleMemberClick} />
              ))}
            </div>

            <div className="text-center mt-20 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Volunteers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated community members who generously donate their time and skills to our cause.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteers.map((member) => (
                <TeamMemberCard key={member.name} member={member} onClick={handleMemberClick} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <TeamMemberModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </div>
  )
}
