"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProductFamilySection() {
  const [currentPage, setCurrentPage] = useState(0)

const products = [
  {
    name: "CABLES",
    image: "/images/familias/kreisen_cables.jpg",
  },
  {
    name: "CARROCERÍA",
    image: "/images/familias/kreisen_carroceria.jpg",
  },
  {
    name: "ELECTRICIDAD",
    image: "/images/familias/kreisen_electrico.jpg",
  },
  {
    name: "EMBRAGUES",
    image: "/images/familias/kreisen_embragues.jpg",
  },
  {
    name: "FRENOS",
    image: "/images/familias/kreisen_frenos.jpg",
  },
  {
    name: "JUNTAS",
    image: "/images/familias/kreisen_juntas.jpg",
  },
  {
    name: "KITS",
    image: "/images/familias/kreisen_kits.jpg",
  },
  {
    name: "LUBRICACIÓN",
    image: "/images/familias/kreisen_lubricación.jpg",
  },
  {
    name: "MANTENIMIENTO",
    image: "/images/familias/kreisen_mantenimiento.jpg",
  },
  {
    name: "REFRIGERACIÓN",
    image: "/images/familias/kreisen_refrigeración.jpg",
  },
  {
    name: "SUSPENSIÓN",
    image: "/images/familias/kreisen_suspensión.jpg",
  },
  {
    name: "TRANSMISIÓN",
    image: "/images/familias/kreisen_transmisión.jpg",
  },
]

  const itemsPerPage = 3
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section id="familia" className="py-16 md:py-24 bg-[#C4D6E6]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#2358AE] uppercase"
        >
          NUESTRAS FAMILIAS DE PIEZAS
        </motion.h2>

        

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[##2358AE] hover:bg-[#F7E95E] text-white hover:text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[##2358AE] hover:bg-[#F7E95E] text-white hover:text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {visibleProducts.map((product, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-#2358AE">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-3xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: "#F59D02" }}
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Accent Line */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ backgroundColor: "#2358AE" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? "w-8" : "hover:scale-125"
                }`}
                style={{
                  backgroundColor: index === currentPage ? "#F59D02" : "#2358AE",
                }}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-block px-8 py-4 rounded-lg  text-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#2358AE" }}
          >
            CONSULTAR POR PRODUCTOS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
