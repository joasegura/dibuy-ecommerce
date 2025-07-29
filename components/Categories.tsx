import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Smartphones",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/smartphones",
    count: "150+ productos",
  },
  {
    name: "Laptops",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/laptops",
    count: "80+ productos",
  },
  {
    name: "Tablets",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/tablets",
    count: "45+ productos",
  },
  {
    name: "Accesorios",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/accesorios",
    count: "200+ productos",
  },
  {
    name: "Gaming",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/gaming",
    count: "120+ productos",
  },
  {
    name: "Audio",
    image: "/placeholder.svg?height=200&width=200",
    href: "/categoria/audio",
    count: "90+ productos",
  },
]

export default function Categories() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Explora por categorías</h2>
          <p className="text-gray text-lg">Encuentra exactamente lo que buscas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-gray">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
