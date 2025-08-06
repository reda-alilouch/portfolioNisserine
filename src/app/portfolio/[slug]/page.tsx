"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"

// Mock data - en production, ceci viendrait d'une API ou CMS
const projectData: { [key: string]: any } = {
  "identite-restaurant": {
    title: "Identité visuelle - Restaurant Le Jardin",
    category: "Identité visuelle",
    client: "Restaurant Le Jardin",
    year: "2024",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    description:
      "Création complète de l'identité visuelle pour un restaurant gastronomique situé au cœur de Paris. Le projet incluait la conception du logo, de la charte graphique, des menus, cartes de visite et supports de communication.",
    challenge:
      "Créer une identité élégante et moderne qui reflète l'excellence culinaire tout en conservant une approche chaleureuse et accessible.",
    solution:
      "J'ai développé un logo épuré combinant typographie élégante et éléments botaniques, accompagné d'une palette de couleurs naturelles et sophistiquées.",
    images: [
      "/restaurant-logo-presentation.png",
      "/placeholder-pyp35.png",
      "/elegant-restaurant-menu.png",
      "/placeholder.svg?height=600&width=800",
    ],
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projectData[params.slug]

  if (!project) {
    return (
      <div className="pt-24 pb-20 text-center bg-white dark:bg-gray-900">
        <TypographyH2>Projet non trouvé</TypographyH2>
        <Link href="/portfolio" className="text-primary hover:underline mt-4 inline-block">
          Retour au portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour au portfolio
          </Link>

          <div className="mb-8">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">{project.category}</span>
          </div>

          <TypographyH1 className="mb-6">{project.title}</TypographyH1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Client</h3>
              <TypographyP>{project.client}</TypographyP>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Année</h3>
              <TypographyP>{project.year}</TypographyP>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Outils</h3>
              <TypographyP>{project.tools.join(", ")}</TypographyP>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <TypographyH2 className="mb-4">Description</TypographyH2>
            <TypographyP className="mb-6">{project.description}</TypographyP>

            <TypographyH2 className="mb-4">Défi</TypographyH2>
            <TypographyP className="mb-6">{project.challenge}</TypographyP>

            <TypographyH2 className="mb-4">Solution</TypographyH2>
            <TypographyP className="mb-8">{project.solution}</TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
            >
              Discutons de votre projet
              <ExternalLink className="ml-2" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
