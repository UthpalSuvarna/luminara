"use client"

import { TeamMemberCard } from "@/components/TeamMemberCard"
import { TeamMemberModal } from "@/components/TeamMemberModal"
import { useState, useEffect } from "react"

interface TeamMember {
  name: string
  role: string
  type: "lead" | "volunteer"
  imageUrl: string
  description: string
  email: string
  phone?: string
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Our
              <span className="text-blue-600 block">Amazing Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get to know the passionate individuals who drive our mission forward with dedication and expertise.
            </p>
          </div>

          <section className="mb-20">
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
          </section>

          <section>
            <div className="text-center mb-12">
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
          </section>
        </div>
      </main>

      <TeamMemberModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
