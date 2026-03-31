"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    desktopImg: "/images/kreisen-bann_frenos.jpg",
    mobileImg: "/images/kreisen-bann_frenos.jpg",
    alt: "KREISEN brake discs",
    titleTop: "KITS DE",
    titleMain: "EMBRAGUES",
    titleBottom: "KREISEN",
    text: ""
  },
  {
    desktopImg: "/images/kreisen-bann_meca.jpg",
    mobileImg: "/images/kreisen-bann_meca.jpg",
    alt: "KREISEN MECA",
    titleTop: "KITS DE",
    titleMain: "MECANICA",
    titleBottom: "KREISEN",
    text: ""
  },
  {
    desktopImg: "/images/kreisen-bann_refri.jpg",
    mobileImg: "/images/kreisen-bann_refri.jpg",
    alt: "KREISEN cooling parts",
    titleTop: "KITS DE",
    titleMain: "REFRIGERANTE",
    titleBottom: "KREISEN",
    text: ""
  },
  {
    desktopImg: "/images/kreisen-bann_trasmision.jpg",
    mobileImg: "/images/kreisen-bann_trasmision.jpg",
    alt: "KREISEN TRASMISION",
    titleTop: "KITS DE",
    titleMain: "TRASMISION",
    titleBottom: "KREISEN",
    text: ""
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

  return (
    <section className="relative w-full overflow-hidden pt-20 bg-white">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full min-h-[60px] relative">

        {/* IMAGE LEFT */}
        <div className="w-1/2 flex flex-col justify-start pl-24 pr-10 pt-24 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.desktopImg}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
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
          </AnimatePresence>
        </div>

        {/* TEXT RIGHT */}
<div className="w-1/2 relative flex items-center justify-end pr-12 lg:pr-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="text-8xl lg:text-8xl font-heading uppercase tracking-normal text-[#2358AE] leading-[0.95]">

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
                <p className="text-xl lg:text-3xl font-sans text-slate-600 max-w-3xl mt-6 whitespace-pre-line">
                  {slide.text}
                </p>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col items-center">

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