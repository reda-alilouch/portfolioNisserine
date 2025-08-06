"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography"

const blogPosts = [
  {
    id: "tendances-design-2024",
    title: "Les tendances design graphique à suivre en 2024",
    excerpt:
      "Découvrez les tendances qui marquent le design graphique cette année : couleurs, typographies, et styles émergents.",
    image: "/placeholder.svg?height=300&width=500",
    date: "15 Mars 2024",
    category: "Tendances",
    readTime: "5 min",
  },
]

export default function Blog() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH1 className="mb-6">Blog</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Conseils, inspirations et actualités du design graphique
          </TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                </div>

                <TypographyH2 className="text-xl mb-3">{post.title}</TypographyH2>

                <TypographyP className="mb-4 line-clamp-3">{post.excerpt}</TypographyP>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-16">
            <TypographyLead>Aucun article pour le moment. Revenez bientôt !</TypographyLead>
          </div>
        )}
      </div>
    </div>
  )
}
