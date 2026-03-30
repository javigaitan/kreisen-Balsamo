import { Award, Network, Handshake, Headset, Flag, Settings, Trophy, Boxes, ShieldCheck } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Trophy,
      title: "TRAYECTORIA",
      subtitle: "Visionarios en Volkswagen",
      description:
        "Pioneros en VW. Desde 2003, somos la primera marca de repuestos Volkswagen de Argentina. Más de dos décadas de liderazgo ininterrumpido acompañan nuestro compromiso con los repuesteros y clientes del país. ",
    },
    {
      icon: Settings,
      title: "PRESICIÓN",
      subtitle: "La pieza justa",
      description:
        "Cada repuesto está desarrollado respetando las especificaciones técnicas de tu vehículo. Nos enfocamos en que el producto cumpla su función correctamente, tal como lo necesitás.",
    },
    {
      icon: Boxes,
      title: "VARIEDAD",
      subtitle: "El catálogo líder en Volkswagen",
      description:
        "Contamos con la gama de aplicaciones más grande del país para Volkswagen. Nadie ofrece tanta diversidad de piezas para tu auto como nosotros; trabajamos para darte la cobertura más completa del mercado.",
    },
    {
      icon: ShieldCheck,
      title: "SEGURIDAD",
      subtitle: "Respaldo garantizado",
      description:
        "Ofrecemos repuestos alternativos confiables. Con Kreisen, tenés la tranquilidad de com",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#2358AE] rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2358AE] mb-1">{value.title}</h3>
                    <p className="text-white font-semibold mb-3">{value.subtitle}</p>
                    <p className="text-[#2358AE] text-l leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
