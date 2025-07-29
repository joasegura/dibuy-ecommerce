import { Truck, Shield, CreditCard, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envío gratis",
    description: "En compras superiores a $50.000",
  },
  {
    icon: Shield,
    title: "Garantía extendida",
    description: "Hasta 2 años en productos seleccionados",
  },
  {
    icon: CreditCard,
    title: "Pagos seguros",
    description: "Múltiples métodos de pago disponibles",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Atención al cliente especializada",
  },
]

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
