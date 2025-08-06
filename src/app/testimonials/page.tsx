"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Propriétaire, Restaurant Le Jardin",
    image: "/professional-woman-portrait.png",
    rating: 5,
    text: "Nisserin a créé une identité visuelle parfaite pour notre restaurant. Son travail a dépassé nos attentes et nous a aidés à nous démarquer de la concurrence.",
  },
  {
    name: "Thomas Martin",
    role: "Organisateur, Festival de Jazz",
    image: "/professional-man-portrait.png",
    rating: 5,
    text: "L'affiche créée par Nisserin a contribué au succès de notre festival. Son style unique et sa créativité ont attiré de nombreux visiteurs.",
  },
  {
    name: "Sophie Laurent",
    role: "Fondatrice, Boutique Mode Éthique",
    image: "/professional-woman-fashion-portrait.png",
    rating: 5,
    text: "Les visuels pour nos réseaux sociaux sont magnifiques ! Nisserin a su capturer l'essence de notre marque et notre engagement éthique.",
  },
];

export default function Testimonials() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH1 className="mb-6">Témoignages</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Ce que mes clients disent de notre collaboration
          </TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative border border-gray-200 dark:border-gray-700"
            >
              <Quote
                className="absolute top-6 right-6 text-primary/20"
                size={32}
              />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>

              <TypographyP>"{testimonial.text}"</TypographyP>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
            <TypographyH2 className="mb-4 text-white">
              Prêt à travailler ensemble ?
            </TypographyH2>
            <TypographyLead className="mb-6 opacity-90 text-white">
              Rejoignez mes clients satisfaits et donnons vie à votre projet !
            </TypographyLead>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Commencer un projet
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
