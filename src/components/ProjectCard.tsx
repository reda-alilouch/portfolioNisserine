"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-xl dark:border-gray-700"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-primary">{project.category}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{project.title}</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
        <Link
          href={`/portfolio/${project.id}`}
          className="inline-flex items-center font-medium transition-colors text-primary hover:text-primary-dark group"
        >
          Voir le projet
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
