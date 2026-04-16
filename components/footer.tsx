"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, } from "lucide-react"

const brandLogos = [
  { name: "Aequipe", src: "/images/marca-aequipe.png" },
  { name: "Kreisen", src: "/images/marca-kreisen.png" },
  { name: "Tajiro", src: "/images/marca-tajiro.png" },
  { name: "Oxion", src: "/images/marca-oxion.png" },
  
  
]

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/kreisenrepuestos/?locale=es_LA",
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/kreisenrepuestos/?hl=es",
    color: "hover:text-pink-600",
  },
  
]

export function Footer() {
  return (
    <footer className="bg-[#F59D02] from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Company Logo */}
            <div className="inline-block">
              <img src="/images/marca-kreisen-blanca.png" alt="Aequipe" className="h-20 w-auto" />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4 uppercase">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <div className="text-white text-lg">
                  <p>Córdoba, Argentina</p>
                  <p></p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-white text-lg">+54 351 492 9000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-white text-lg">balsamo@balsamo.com.ar</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4 uppercase">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {[
                { name: "Nosotros", href: "#nosotros" },
                { name: "Familias", href: "#familia" },
                { name: "Contacto", href: "#contacto" },
                
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-white hover:text-[#2358AE] transition-colors duration-200 text-m"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4 uppercase">Seguinos</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-slate-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                )
              })}
            </div>

            <div>
              <h4 className="text-sm font-medium text-white mb-3">Nuestras Marcas</h4>
              <div className="grid grid-cols-2 gap-3">
                {brandLogos.map((brand, index) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-3 hover:shadow-lg transition-all duration-200"
                  >
                    <img
                      src={brand.src || "/placeholder.svg"}
                      alt={brand.name}
                      className="h-8 w-auto object-contain mx-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white text-lg text-center md:text-left">
              <p>&copy; 2026 Kreisen. Todos los derechos reservados.</p>
            </div>

            {/* Signature */}
            <motion.div whileHover={{ scale: 1.02 }} className="text-white text-lg text-center md:text-right">
              <a
                href="https://api.whatsapp.com/send/?phone=5493512075102&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+tus+soluciones+y+desarrollos+web&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="opacity-70 text-white hover:opacity-100 transition-opacity duration-200 text-m">
                  Created by <span className="text-[#2358AE] font-medium">Gaitán Javier Emanuel</span> -{" "}
                  <span className="text-[#2358AE] font-medium">Tab Soluciones</span>
                </p>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
