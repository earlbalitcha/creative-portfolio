"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setMessage("Thanks for reaching out. I'll get back to you soon.")
    setIsSubmitting(false)
    e.currentTarget.reset()

    // Clear message after 5 seconds
    setTimeout(() => setMessage(""), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-700 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-700 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-700 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-zinc-400"
              />
            </div>
            <div className="space-y-2">
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-3 py-2 bg-zinc-900/50 border border-zinc-700 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white placeholder-zinc-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0 px-6 py-3 rounded-md text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {message && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-400 text-center">
              {message}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
