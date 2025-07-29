import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              La tecnología que necesitas,
              <span className="block">al mejor precio</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Descubre nuestra amplia selección de productos tecnológicos con la mejor calidad y garantía del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Ver productos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/ofertas"
                className="group relative overflow-hidden bg-gradient-to-r from-white to-gray-100 text-primary px-8 py-4 rounded-xl font-semibold hover:from-gray-100 hover:to-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Ofertas especiales</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Productos tecnológicos"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
