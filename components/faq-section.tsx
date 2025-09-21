"use client"

import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showEmail, setShowEmail] = useState(false)

  const faqs = [
    {
      question: "What is GDG?",
      answer:
        "Google Developer Groups (GDG) are community groups for developers interested in Google's developer technology. They host events, workshops, and meetups to share knowledge and build connections within the developer community.",
      borderColor: "#EA4335", // Red
    },
    {
      question: "How can you become part of GDG?",
      answer:
        "Joining GDG is simple! You can attend our events, participate in our online community, and engage with fellow developers. Simply click the 'Join Us' button to get started and stay updated on upcoming events and activities.",
      borderColor: "#FBBC05", // Yellow
    },
    {
      question: "What does GDG Lead do?",
      answer:
        "GDG Leads are passionate community organizers who facilitate events, coordinate with Google, manage the local chapter, and ensure a welcoming environment for all members. They work to create valuable learning experiences and networking opportunities.",
      borderColor: "#34A853", // Green
    },
    {
      question: "How is GDG related to Google?",
      answer:
        "GDG is a program supported by Google to foster developer communities worldwide. While GDG chapters are independently organized by local volunteers, they receive support from Google in the form of resources, speakers, and access to the latest technologies and tools.",
      borderColor: "#4285F4", // Blue
    },
    {
      question: "How to reach us?",
      answer: "You can reach us at gdg.rbu@gmail.com for any queries or collaboration opportunities.",
      borderColor: "#FBBC05", // Yellow
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">FAQs</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="bg-card border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {" "}
                {/* added grey border with border-2 border-gray-300 */}
                <button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-2xl"
                  style={{ borderLeft: `6px solid ${faq.borderColor}` }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  onMouseEnter={() => index === 4 && setShowEmail(true)}
                  onMouseLeave={() => index === 4 && setShowEmail(false)}
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  {index === 4 && showEmail && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>gdg.rbu@gmail.com</span>
                    </div>
                  )}
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {openIndex === index && (
                <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                  <div
                    className="bg-card border-2 border-gray-300 rounded-2xl shadow-md p-6" // added grey border around answer box
                    style={{ borderLeft: `6px solid ${faq.borderColor}` }}
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
