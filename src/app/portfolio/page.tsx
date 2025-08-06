"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"

const projects = [
  {
    id: "identite-restaurant",
    title: "Identité visuelle - Restaurant Le Jardin",
    category: "Identité visuelle",
    image: "/placeholder-ve49p.png",
    description: "Création complète de l'identité visuelle pour un restaurant gastronomique",
  },
  {
    id: "affiche-festival",
    title: "Affiche Festival de Jazz",
    category: "Affiche",
    image: "/jazz-festival-poster.png",
    description: "Design d'affiche pour un festival de jazz local",
  },
  {
    id: "reseaux-sociaux-mode",
    title: "Visuels réseaux sociaux - Boutique Mode",
    category: "Réseaux sociaux",
    image: "/fashion-social-media-templates.png",
    description: "Templates Instagram pour une boutique de mode",
  },
  {
    id: "logo-startup",
    title: "Logo - Startup Tech",
    category: "Identité visuelle",
    image: "/modern-tech-startup-logo.png",
    description: "Création de logo pour une startup technologique",
  },
  {
    id: "affiche-concert",
    title: "Affiche Concert Rock",
    category: "Affiche",
    image: "/rock-concert-poster.png",
    description: "Affiche promotionnelle pour un concert de rock",
  },
  {
    id: "instagram-fitness",
    title: "Templates Instagram - Coach Fitness",
    category: "Réseaux sociaux",
    image: "/fitness-instagram-templates.png",
    description: "Série de templates pour coach sportif",
  },
]

const categories = ["Tous", "Identité visuelle", "Affiche", "Réseaux sociaux"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredProjects =
    selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH1 className="mb-6">Mon Portfolio</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Découvrez mes créations et projets réalisés pour mes clients
          </TypographyLead>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-beige dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/20 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
