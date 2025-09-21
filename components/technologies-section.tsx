import { Card, CardContent } from "@/components/ui/card"

export function TechnologiesSection() {
  const technologies = [
    {
      name: "Android",
      color: "#34A853",
      topColor: "#EA4335", // Red top border
    },
    {
      name: "Flutter",
      color: "#4285F4",
      topColor: "#4285F4", // Blue top border
    },
    {
      name: "Cloud",
      color: "#FBBC05",
      topColor: "#34A853", // Green top border
    },
  ]

  return (
    <section id="technologies" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {" "}
          {/* increased margin bottom from mb-16 to mb-20 for more space */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-1 bg-[#EA4335]"></div>
            <h2 className="text-3xl sm:text-4xl font-medium text-gray-700 px-8">Technologies</h2>
            <div className="flex-1 h-1 bg-[#EA4335]"></div>
          </div>
          <p className="text-xl text-gray-600 text-balance max-w-3xl mx-auto mb-12">
            {" "}
            {/* increased margin bottom for more space */}
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 cursor-pointer bg-white relative overflow-hidden shadow-lg" // added grey border effect with border-2 border-gray-300
            >
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: tech.topColor }}></div>
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {" "}
                  {/* added grey border around icon container */}
                  {tech.name === "Android" && (
                    <svg className="w-20 h-20" viewBox="0 0 24 24" fill="#34A853">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                    </svg>
                  )}
                  {tech.name === "Flutter" && (
                    <svg className="w-20 h-20" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-4.615-4.614L21.684 5.46 14.473 11.87z" />
                    </svg>
                  )}
                  {tech.name === "Cloud" && (
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cU0NDa0OtbFLlM1sMGOpsJbjaiBTVZ.png"
                      alt="Google Cloud"
                      className="w-20 h-20 object-contain"
                    /> // replaced SVG with provided Cloud logo image
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
