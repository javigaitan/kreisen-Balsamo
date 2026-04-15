"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    desktopImg: "/images/kreisen-bann_frenos.jpeg",
    mobileImg: "/images/kreisen-bann_frenos.jpeg",
    alt: "KREISEN brake discs",
    titleTop: "KITS DE FRENOS",
    titleMain: "",
    titleBottom: "KREISEN",
    text: "",
    reverse: false
  },
  {
    desktopImg: "/images/kreisen-bann_embra.jpeg",
    mobileImg: "/images/kreisen-bann_embra.jpeg",
    alt: "KREISEN MECA",
    titleTop: "KITS DE EMBRAGUE",
    titleMain: "",
    titleBottom: "KREISEN",
    text: "",
    reverse: true
  },
  {
    desktopImg: "/images/kreisen-bann_refri.jpeg",
    mobileImg: "/images/kreisen-bann_refri.jpeg",
    alt: "KREISEN cooling parts",
    titleTop: "KITS DE REFRIGERANTE",
    titleMain: "",
    titleBottom: "KREISEN",
    text: "",
    reverse: false
  },
  {
    desktopImg: "/images/kreisen-bann_trasmision.jpeg",
    mobileImg: "/images/kreisen-bann_trasmision.jpeg",
    alt: "KREISEN TRANSMISIÓN",
    titleTop: "KITS DE TRANSMISIÓN",
    titleMain: "",
    titleBottom: "KREISEN",
    text: "",
    reverse: true
  },
  {
    desktopImg: "/images/kreisen-bann.jpeg",
    mobileImg: "/images/kreisen-bann.jpeg",
    alt: "KREISEN TRANSMISIÓN",
    titleTop: "",
    titleMain: "El especialista en piezas para vehículos Volkswagen es ",
    titleBottom: "KREISEN",
    text: "",
    reverse: false
  }
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]
const isReversed = slide.reverse
  return (
    <section className="relative w-full overflow-hidden pt-6 bg-white">

    {/* ================= DESKTOP ================= */}
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex w-full min-h-[60px] relative ${
          isReversed ? "flex-row-reverse" : ""
        }`}
      >

        {/* IMAGE */}
        <div
          className={`w-1/2 flex flex-col justify-start pt-16 relative z-10 ${
            isReversed ? "pr-24 pl-10" : "pl-24 pr-10"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-end w-full"
          >
            <Image
              src={slide.desktopImg}
              alt={slide.alt}
              width={1200}
              height={800}
              className="object-contain h-full w-auto ml-auto"
              priority
            />
          </motion.div>
        </div>

        {/* TEXT */}
        <div
          className={`w-1/2 relative flex items-center ${
            isReversed ? "justify-start pl-3 lg:pl-20" : "justify-end pr-3 lg:pr-20"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl lg:text-8xl font-heading uppercase tracking-normal text-[#2358AE] leading-[0.95]">
              <span className="font-normal block">
                {slide.titleTop}
              </span>

              <span className="text-base text-6xl lg:text-6xl block">
                {slide.titleMain}
              </span>

              <span className="font-bold block">
                {slide.titleBottom}
              </span>
            </h1>

            {slide.text && (
              <p className="text-xl lg:text-3xl font-sans text-slate-600 max-w-3xl mt-6 whitespace-pre-line">
                {slide.text}
              </p>
            )}
          </motion.div>
        </div>

      </motion.div>
    </AnimatePresence>


      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col items-center pt-12">

        <div className="px-6 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-5xl m:text-5xl font-heading uppercase tracking-tight text-[#2358AE] text-center mb-6 leading-tight">

                <span className="font-normal block">
                  {slide.titleTop}
                </span>

                <span className="font-bold block">
                  {slide.titleMain}
                </span>

                <span className="font-bold block">
                  {slide.titleBottom}
                </span>

              </h1>

              {slide.text && (
                <p className="text-lg sm:text-xl font-sans text-slate-600 text-center max-w-sm mx-auto whitespace-pre-line">
                  {slide.text}
                </p>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.mobileImg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={slide.mobileImg}
              alt={slide.alt}
              width={900}
              height={900}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  )
}