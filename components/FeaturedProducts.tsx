"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { products } from "@/data/products"

export default function FeaturedProducts() {
  const { addItem } = useCart()
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Productos destacados</h2>
          <p className="text-gray text-lg">Los productos más populares y mejor valorados</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card-product group">
              <div className="relative mb-4">
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full z-10 ${
                      product.badge === "Nuevo"
                        ? "bg-primary text-white"
                        : product.badge === "Bestseller"
                          ? "bg-secondary text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Heart className="h-4 w-4" />
                </button>
                <Link href={`/producto/${product.id}`}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>

              <div className="space-y-2">
                <Link href={`/producto/${product.id}`}>
                  <h3 className="font-semibold hover:text-primary transition-colors">{product.name}</h3>
                </Link>

                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray">({product.reviews})</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-sm text-green-600 font-medium">
                      Ahorrás {formatPrice(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addItem(product)}
                  className="group relative overflow-hidden w-full bg-gradient-primary text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 mt-4"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Agregar al carrito</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/productos"
            className="group relative overflow-hidden border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Ver todos los productos</span>
            <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
