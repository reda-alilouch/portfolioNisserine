"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, FileImage, Share2, Check } from "lucide-react"
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography"

const services = [
  {
    icon: Palette,
    title: "Identité visuelle",
    description: "Création complète de votre identité de marque",
    price: "À partir de 800€",
    features: [
      "Recherche et concept créatif",
      "Création du logo principal",
      "3 déclinaisons du logo",
      "Charte graphique complète",
      "Palette de couleurs",
      "Typographies",
      "Fichiers sources inclus",
    ],
  },
  {
    icon: FileImage,
    title: "Création d'affiches",
    description: "Affiches impactantes pour vos événements et communications",
    price: "À partir de 300€",
    features: [
      "Concept créatif personnalisé",
      "Design sur mesure",
      "Format print haute résolution",
      "Version web optimisée",
      "2 révisions incluses",
      "Fichiers sources",
      "Conseils d'impression",
    ],
  },
  {
    icon: Share2,
    title: "Visuels réseaux sociaux",
    description: "Templates et visuels pour dynamiser votre présence en ligne",
    price: "À partir de 150€",
    features: [
      "Pack de 10 templates",
      "Formats adaptés (Instagram, Facebook, LinkedIn)",
      "Design cohérent avec votre marque",
      "Fichiers modifiables",
      "Guide d'utilisation",
      "Support technique",
      "Mise à jour gratuite",
    ],
  },
]

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH1 className="mb-6">Mes Services</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Des solutions créatives sur mesure pour donner vie à vos projets
          </TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.title}</h3>

              <TypographyP className="mb-6">{service.description}</TypographyP>

              <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                Demander un devis
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-beige dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700"
        >
          <TypographyH2 className="mb-4">Projet sur mesure ?</TypographyH2>
          <TypographyLead className="mb-6 max-w-2xl mx-auto">
            Vous avez un projet spécifique en tête ? Contactez-moi pour discuter de vos besoins et obtenir un devis
            personnalisé.
          </TypographyLead>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Parlons de votre projet
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
