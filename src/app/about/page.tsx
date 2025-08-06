"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Languages, Briefcase } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
} from "@/components/ui/typography";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <TypographyH1 className="mb-6">À propos de moi</TypographyH1>
          <TypographyLead>
            Passionnée par le design graphique depuis plus de 5 ans
          </TypographyLead>
        </motion.div>

        <div className="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/placeholder-8jbow.png"
              alt="Nisserin - Infographiste"
              width={400}
              height={384}
              className="object-cover w-full shadow-lg h-96 rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <TypographyH2 className="mb-4">Nisserin Dubois</TypographyH2>
            <TypographyP className="mb-4">
              Diplômée d&apos;un Master en Design Graphique, je suis une
              infographiste freelance passionnée par la création visuelle.
              Depuis 5 ans, j&apos;accompagne mes clients dans la conception de leur
              identité visuelle et de leurs supports de communication.
            </TypographyP>
            <TypographyP className="mb-6">
              Mon approche créative allie esthétisme et fonctionnalité pour
              créer des visuels qui marquent les esprits et transmettent
              efficacement votre message.
            </TypographyP>

            <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary" size={20} />
                <span className="text-gray-600">Berchid, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="text-primary" size={20} />
                <span className="text-gray-600">FR, EN, AR</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="text-primary" size={20} />
                <span className="text-gray-600">Freelance</span>
              </div>
            </div>

            <button className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors rounded-full bg-primary hover:bg-primary-dark">
              <Download className="mr-2" size={20} />
              Télécharger mon CV
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 bg-beige dark:bg-gray-800 rounded-2xl"
        >
          <TypographyH3 className="mb-6 text-center">
            Mes compétences
          </TypographyH3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Adobe InDesign",
              "Figma",
              "Canva Pro",
              "Procreate",
              "Typography",
              "Branding",
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 text-center bg-white rounded-lg shadow-sm dark:bg-gray-700"
              >
                <span className="font-medium text-black dark:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}