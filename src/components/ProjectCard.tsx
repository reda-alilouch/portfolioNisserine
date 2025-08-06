"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">{project.category}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <Link
          href={`/portfolio/${project.id}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
        >
          Voir le projet
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
