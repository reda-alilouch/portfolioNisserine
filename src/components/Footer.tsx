import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-700 dark:text-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Nisserin</h3>
            <p className="text-gray-600 mb-4">
              Infographiste freelance passionnée, je transforme vos idées en
              visuels impactants.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:Nisserin@example.com"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>Nisserin@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+33 6 12 34 56 78</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Nisserin - Infographiste. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
