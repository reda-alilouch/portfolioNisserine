"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography"
import Image from "next/image"

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
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <TypographyH1 className="mb-6">Blog</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Conseils, inspirations et actualités du design graphique
          </TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-xl dark:border-gray-700"
            >
              <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-48" />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-primary">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>

                <TypographyH2 className="mb-3 text-xl">{post.title}</TypographyH2>

                <TypographyP className="mb-4 line-clamp-3">{post.excerpt}</TypographyP>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center font-medium transition-colors text-primary hover:text-primary-dark group"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="py-16 text-center">
            <TypographyLead>Aucun article pour le moment. Revenez bientôt !</TypographyLead>
          </div>
        )}
      </div>
    </div>
  )
}
