"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F59D02] shadow-lg" : "bg-[#F59D02]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 font-heading font-bold uppercase tracking-normal">
          <Link href="/" >
  <Image
  src="/images/k_kreisen.svg"
  alt="Kreisen Logo"
  width={220}
  height={80}
  className="h-40 md:h-18 lg:h-90 w-auto"
  priority
/>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#nosotros"
              className=" cursor-pointer text-white  hover:text-[#2358AE] transition-colors text-2xl font-bold"
            >
              NOSOTROS
            </Link>
            <Link
              href="#familia"
              className=" cursor-pointer text-white hover:text-[#2358AE] transition-colors text-2xl font-bold"
            >
              FAMILIAS
            </Link>
            <Button
              asChild
              className="bg-[] hover:bg-[#2358AE] hover:text[#F59D02] text-2xl cursor-pointer text-white  font-bold transition-colors"
            >
              <Link href="#contacto">CONTÁCTANOS</Link>
            </Button>
            
          </div>
          

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                href="#nosotros"
                className="cursor-pointer font-heading font-bold text-xl uppercase tracking-wide text-white hover:text-[#2358AE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#familia"
                className="cursor-pointer font-heading font-bold text-xl uppercase tracking-wide text-white hover:text-[#2358AE] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Familias
              </Link>
            
              <Button
                asChild
                className="cursor-pointer font-heading  text-2xl uppercase tracking-wide bg-[#2358AE] hover:bg-[#F59D02] text-{#F59D02}  transition-colors"
              >
                <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                  Contactanos
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
