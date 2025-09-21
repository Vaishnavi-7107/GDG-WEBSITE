import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-8">
            <span className="text-foreground">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-foreground"> Developer Groups</span>
            <br />
            <span className="text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-light">RBU Chapter</span>
          </h1>

          <div className="mb-8 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BjO1iNvr03vrpuw3u50hPadIIXRoYw.png"
              alt="GDG Community - Three diverse students with laptops and tech icons"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
            Google Developer Groups are community groups for college and university students interested in Google
            developer technologies.
          </p>

          <div className="mb-8">
            <Button
              size="sm"
              className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              JOIN US
            </Button>
          </div>

          <div className="mb-16 flex flex-col items-center space-y-1">
            <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
            <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
            <ChevronDown className="h-6 w-6 text-muted-foreground animate-bounce" />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 mb-12">Get To Know Us</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
