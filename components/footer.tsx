"use client"

import { Instagram, Linkedin, Twitter, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 relative">
            {/* Left Section - GDG Info */}
            <div className="flex flex-col space-y-4">
              <div className="mb-4">
                <img
                  src="/images/gdg-logo.png"
                  alt="Google Developer Groups Logo"
                  className="w-20 h-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-800">Google Developer Groups</h3>
              <p className="text-lg text-[#4285F4]">On Campus • Ramdeobaba University</p>
            </div>

            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden lg:block transform -translate-x-1/2"></div>

            {/* Right Section - Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Shri Ramdeobaba College of Engineering and Management,</p>
                  <p className="text-gray-600">Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <a
                  href="mailto:dsc.rknec@gmail.com"
                  className="text-gray-800 underline hover:text-[#4285F4] transition-colors"
                  onClick={() =>
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=dsc.rknec@gmail.com", "_blank")
                  }
                >
                  dsc.rknec@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-800 font-medium mb-3">Follow Us:</p>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-200">
                    <Instagram className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-200">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-gray-200">
                    <Twitter className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-20 overflow-hidden rounded-lg mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-[#EA4335] rounded-full"></div>
              <div className="w-16 h-8 bg-[#FBBC05] rounded-full"></div>
              <div className="w-8 h-16 bg-[#4285F4] rounded-full"></div>
              <div className="w-12 h-12 bg-[#34A853] transform rotate-45"></div>
              <div className="w-10 h-10 bg-[#EA4335] transform rotate-12"></div>
              <div className="w-8 h-8 bg-[#FBBC05] rounded-full"></div>
              <div className="w-18 h-10 bg-[#4285F4] rounded-full"></div>
              <div className="w-10 h-10 bg-[#34A853] transform -rotate-12"></div>
              <div className="w-12 h-8 bg-[#EA4335] rounded-full"></div>
              <div className="w-8 h-12 bg-[#FBBC05] rounded-full"></div>
              <div className="w-10 h-10 bg-[#4285F4] rounded-full"></div>
              <div className="w-14 h-14 bg-[#34A853] transform rotate-45"></div>
              <div className="w-6 h-16 bg-[#EA4335] rounded-full"></div>
              <div className="w-12 h-6 bg-[#FBBC05] rounded-full"></div>
              <div className="w-8 h-8 bg-[#4285F4] transform rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">© 2024 Google Developer Groups - RBU Chapter</p>
        </div>
      </div>
    </footer>
  )
}
