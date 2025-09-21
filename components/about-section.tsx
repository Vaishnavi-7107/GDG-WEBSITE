export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-2xl font-medium text-gray-700 mb-6 text-center relative inline-block w-full">
            Our Mission
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4285F4] rounded-full"></div>
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="lg:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TPALZ3enc9BHigO06OEvGWkOlFN7Z6.png"
                alt="Our Mission - Team collaboration and brainstorming"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission involves community engagement, leadership development, building strong tech foundation,
                while enabling all tech enthusiasts to contribute to the global society.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-medium text-gray-700 mb-6 text-center relative inline-block w-full">
            Our Perspective
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#34A853] rounded-full"></div>
          </h3>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-12">
            <div className="lg:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QhTW1jqCgLFfEWULZAfhA2894Yq2DK.png"
                alt="Our Perspective - Collaborative problem solving"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="border-l-4 border-[#34A853] pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're a community-driven initiative aiming to bridge the gap between research and practice, develop
                  evolutionary thinking and network throughout the process. We believe in connecting fellow developers,
                  spreading stimulative ideas and working for a solution driven team.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-medium text-gray-700 mb-6 text-center relative inline-block w-full">
            What Keeps Us Going?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FBBC05] rounded-full"></div>
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
            <div className="lg:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-27ncgeYdufpMsRq6vpxhKWyRI7lfEH.png"
                alt="What Keeps Us Going - Innovation and teamwork"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking,
                communication, and leading with solutions is what helps us achieve new heights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The entire team works in coordination, to inspire and motivate the upcoming generation to evolve their
                skills and broaden their horizons of knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
