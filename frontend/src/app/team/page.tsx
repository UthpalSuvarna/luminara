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
        const response = await fetch("data/team-data.json")
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

  const operationalLeads = teamMembers.filter((member) => member.role === "Operational Lead");
  const otherMembers = teamMembers.filter((member) => member.role !== "Operational Lead");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
              <p className="text-xl text-gray-700">
                The passionate individuals who drive our mission forward
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Operational Leads</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
              {operationalLeads.map((member) => (
                <TeamMemberCard key={member.name} member={member} onClick={handleMemberClick} />
              ))}
            </div>

            <div className="text-center mt-20 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guidance Council</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherMembers.map((member) => (
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
