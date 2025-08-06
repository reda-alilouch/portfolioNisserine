"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par EmailJS ou API)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 text-center border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800 rounded-2xl"
      >
        <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
        <h3 className="mb-2 text-2xl font-bold text-green-800 dark:text-green-400">Message envoyé !</h3>
        <p className="text-green-600 dark:text-green-300">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-white">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-black transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-white">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-black transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black dark:text-white">
          Type de projet *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 text-black transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
        >
          <option value="">Sélectionnez un type de projet</option>
          <option value="identite-visuelle">Identité visuelle</option>
          <option value="affiche">Création d&apos;affiche</option>
          <option value="reseaux-sociaux">Visuels réseaux sociaux</option>
          <option value="autre">Autre projet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-white">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 text-black transition-colors bg-white border border-gray-300 rounded-lg resize-none dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
          placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center w-full px-6 py-4 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin" />
        ) : (
          <>
            <Send className="mr-2" size={20} />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
