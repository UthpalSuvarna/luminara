import { Phone } from "lucide-react"

export function CrisisBanner() {
  return (
    <div className="bg-red-600 text-white py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
        <span className="font-medium">Crisis? Need immediate help?</span>
        <div className="flex items-center gap-4">
          <a href="tel:0824 2983444" className="flex items-center gap-1 hover:underline">
            <Phone className="h-4 w-4" />
            Call 0824 2983444
          </a>
          {/* <span className="text-red-200">|</span>
          <a href="tel:1-800-273-8255" className="hover:underline">
            1-800-273-TALK
          </a> */}
        </div>
      </div>
    </div>
  )
}
