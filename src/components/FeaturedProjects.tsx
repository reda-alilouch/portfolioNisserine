"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    id: "identite-restaurant",
    title: "Identité visuelle - Restaurant Le Jardin",
    category: "Identité visuelle",
    image: "/placeholder-ve49p.png",
    description:
      "Création complète de l'identité visuelle pour un restaurant gastronomique",
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
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-beige dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Projets récents</h2>
          <p className="max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Voir tous les projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
