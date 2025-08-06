"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white mb-6">
              Je suis{" "}
              <span className="text-gray-900 dark:text-gray-100">Nisserin</span>
              ,<br />
              infographiste freelance
            </h1>
            <p className="text-xl text-white/90 dark:text-gray-300 mb-8 leading-relaxed">
              Je transforme vos idées en visuels impactants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                Voir mes projets
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white dark:border-gray-300 text-white dark:text-gray-300 font-semibold rounded-full hover:bg-white dark:hover:bg-gray-300 hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
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
            <div className="w-full h-96 bg-white/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
              <img
                src="/female-graphic-designer-portrait.png"
                alt="Nisserin - Infographiste"
                className="w-80 h-80 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
