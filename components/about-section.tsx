import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24" style={{ backgroundColor: "#C4D6E6" }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 font-heading uppercase" style={{ color: "#2358AE" }}>
              Nosotros
            </h2>
            <div className="space-y-6 text-[#2358AE] text-xl leading-relaxed font-body">
              <div>
                <p>
                  Desde 2003, Kreisen se posiciona como la primera marca de repuestos de Argentina especializada en Volkswagen. 
                  Llevamos más de dos décadas de liderazgo ofreciendo el catálogo de aplicaciones más extenso del mercado, 
                  donde cada pieza es desarrollada respetando las especificaciones técnicas precisas de tu vehículo. 
                </p>
              </div>
              <p>
               En Kreisen combinamos una inmensa variedad de productos con la tranquilidad de lo seguro:
                somos una marca establecida que respalda lo que vende y garantiza que cada repuesto cumpla su función correctamente.
              </p>
            
              <p className="font-semibold text-[#2358AE] text-xl"> Tenemos mucho Kreisen para tu Volkswagen              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/images/kreisen-about.jpeg" alt="Fábrica Balsamo Repuestos - Kreisen" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
