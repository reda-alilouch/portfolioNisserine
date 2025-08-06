"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl dark:text-white">
              Je suis{" "}
              <span className="text-gray-900 dark:text-gray-100">Nisserin</span>
              ,<br />
              infographiste freelance
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90 dark:text-gray-300">
              Je transforme vos idées en visuels impactants.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 font-semibold text-gray-900 transition-colors bg-white rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Voir mes projets
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 font-semibold text-white transition-colors border-2 border-white rounded-full dark:border-gray-300 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-300 hover:text-gray-900 dark:hover:text-gray-900"
              >
                Me contacter
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center justify-center w-full h-96 bg-white/20 rounded-3xl backdrop-blur-sm">
              <Image
                src="/female-graphic-designer-portrait.png"
                alt="Nisserin - Infographiste"
                className="object-cover w-80 h-80 rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
