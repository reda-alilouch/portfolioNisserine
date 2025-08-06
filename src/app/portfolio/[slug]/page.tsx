"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"
import { use } from "react"
import Image from "next/image"

// Define proper TypeScript interface
interface Project {
  title: string
  category: string
  client: string
  year: string
  tools: string[]
  description: string
  challenge: string
  solution: string
  images: string[]
}

// Mock data - en production, ceci viendrait d'une API ou CMS
const projectData: Record<string, Project> = {
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
  params: Promise<{
    slug: string
  }>
}

export default function ProjectDetail({ params }: PageProps) {
  // Use React's `use` hook to unwrap the Promise
  const { slug } = use(params)
  const project = projectData[slug]

  if (!project) {
    return (
      <div className="pt-24 pb-20 text-center bg-white dark:bg-gray-900">
        <TypographyH2>Projet non trouvé</TypographyH2>
        <Link href="/portfolio" className="inline-block mt-4 text-primary hover:underline">
          Retour au portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/portfolio"
            className="inline-flex items-center mb-8 transition-colors text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour au portfolio
          </Link>

          <div className="mb-8">
            <span className="px-4 py-2 text-sm font-medium text-white rounded-full bg-primary">{project.category}</span>
          </div>

          <TypographyH1 className="mb-6">{project.title}</TypographyH1>

          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold text-black dark:text-white">Client</h3>
              <TypographyP>{project.client}</TypographyP>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-black dark:text-white">Année</h3>
              <TypographyP>{project.year}</TypographyP>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-black dark:text-white">Outils</h3>
              <TypographyP>{project.tools.join(", ")}</TypographyP>
            </div>
          </div>

          <div className="mb-12 prose prose-lg max-w-none">
            <TypographyH2 className="mb-4">Description</TypographyH2>
            <TypographyP className="mb-6">{project.description}</TypographyP>

            <TypographyH2 className="mb-4">Défi</TypographyH2>
            <TypographyP className="mb-6">{project.challenge}</TypographyP>

            <TypographyH2 className="mb-4">Solution</TypographyH2>
            <TypographyP className="mb-8">{project.solution}</TypographyP>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden border border-gray-200 shadow-lg rounded-2xl dark:border-gray-700"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 font-semibold text-white transition-colors rounded-full bg-primary hover:bg-primary-dark"
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