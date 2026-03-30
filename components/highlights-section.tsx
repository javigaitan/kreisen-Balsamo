"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HighlightsSection() {
  const metrics = [
    { number: 600, label: "Distribuidores" },
    { number: 7000, label: "Referencias" },
    { number: 20, label: "Años en el mercado" },
    { number: 200, label: "Kits propios" },
  ]

  return (
    <section className="w-full bg-[#0B2A5B] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* LEFT: Title */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-white text-3xl md:text-5xl leading-tight">
            Números <br />
            <span className="font-bold">
              que nos <br />
              definen
            </span>
          </h2>
        </div>

        {/* RIGHT: Circles */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item, index) => (
            <AnimatedCircle key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

type Metric = {
  number: number
  label: string
}

function AnimatedCircle({
  item,
  index,
}: {
  item: Metric
  index: number
}) {  const [count, setCount] = useState(0)
  const [startCounting, setStartCounting] = useState(false)

  useEffect(() => {
    if (!startCounting) return

    let start = 0
    const duration = 1500
    const increment = item.number / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= item.number) {
        setCount(item.number)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [startCounting, item.number])

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: index * 0.25, // 👈 efecto uno tras otro
        duration: 0.6,
        ease: "easeOut",
      }}
      onAnimationComplete={() => setStartCounting(true)} // 👈 cuando termina caída → empieza contador
      className="bg-white rounded-full flex flex-col items-center justify-center text-center aspect-square p-4 shadow-md"
    >
      <span className="text-[#2358AE] text-2xl md:text-3xl font-bold">
        +{count.toLocaleString()}
      </span>
      <span className="text-[#2358AE] text-sm md:text-base leading-tight">
        {item.label}
      </span>
    </motion.div>
  )
}