"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí conectarías con tu backend
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="bg-gradient-primary text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mantente al día con las últimas ofertas</h2>
          <p className="text-lg opacity-90 mb-8">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, lanzamientos de productos y noticias
            tecnológicas.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
