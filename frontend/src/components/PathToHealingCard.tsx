"use client"

import Image from "next/image"

interface PathToHealing {
  id: number
  title: string
  description: string
  image: string
}

interface PathToHealingCardProps {
  item: PathToHealing
  onClick: (item: PathToHealing) => void
}

export function PathToHealingCard({ item, onClick }: PathToHealingCardProps) {
  return (
    <div
      className="group cursor-pointer bg-white rounded-none shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1"
      onClick={() => onClick(item)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={500}
          height={300}
          className="object-contain w-full h-64 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
      </div>
    </div>
  )
}
