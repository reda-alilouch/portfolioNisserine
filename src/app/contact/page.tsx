"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TypographyH1 className="mb-6">Contactez-moi</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Je serais ravie de vous
            accompagner.
          </TypographyLead>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypographyH2 className="mb-6">Envoyez-moi un message</TypographyH2>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <TypographyH2 className="mb-6">
                Informations de contact
              </TypographyH2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <TypographyH3 className="text-lg">Email</TypographyH3>
                    <TypographyP>Nisserin@example.com</TypographyP>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <TypographyH3 className="text-lg">Téléphone</TypographyH3>
                    <TypographyP>+33 6 12 34 56 78</TypographyP>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <TypographyH3 className="text-lg">
                      Localisation
                    </TypographyH3>
                    <TypographyP>Paris, France</TypographyP>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TypographyH3 className="mb-4">Suivez-moi</TypographyH3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="bg-beige dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <TypographyH3 className="mb-4">Temps de réponse</TypographyH3>
              <TypographyP className="mb-4">
                Je réponds généralement dans les 24h. Pour les projets urgents,
                n'hésitez pas à me contacter directement par téléphone.
              </TypographyP>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Lun - Ven : 9h - 18h</p>
                <p>Sam : 10h - 16h</p>
                <p>Dim : Fermé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
