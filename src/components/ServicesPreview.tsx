"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Palette, FileImage, Share2 } from "lucide-react"
import { TypographyH2, TypographyLead } from "./ui/typography"

const services = [
  {
    icon: Palette,
    title: "Identité visuelle",
    description: "Logo, charte graphique, supports de communication",
    price: "À partir de 800€",
  },
  {
    icon: FileImage,
    title: "Création d'affiches",
    description: "Affiches publicitaires, événementielles, artistiques",
    price: "À partir de 300€",
  },
  {
    icon: Share2,
    title: "Visuels réseaux sociaux",
    description: "Templates Instagram, Facebook, LinkedIn",
    price: "À partir de 150€",
  },
]

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH2 className="mb-4">Mes services</TypographyH2>
          <TypographyLead className="max-w-2xl mx-auto">Des solutions créatives adaptées à vos besoins</TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-beige dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Découvrir tous les services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
