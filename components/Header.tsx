"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react"
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { state } = useCart()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar - Hidden on mobile */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray border-b">
          <div className="flex space-x-4">
            <span>Envío gratis en compras superiores a $50.000</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/ayuda" className="hover:text-primary">
              Ayuda
            </Link>
            <Link href="/contacto" className="hover:text-primary">
              Contacto
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="DIBUY" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos tecnológicos..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray" />
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search icon - Mobile */}
            <button className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-6 w-6" />
            </button>

            {/* User account */}
            <Link href="/perfil" className="hidden md:flex items-center space-x-1 hover:text-primary">
              <User className="h-5 w-5" />
              <span className="text-sm">Mi cuenta</span>
            </Link>

            {/* Wishlist */}
            <Link href="/favoritos" className="relative hover:text-primary">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link href="/carrito" className="relative hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray" />
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block border-t md:border-t-0`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 py-4">
            <li>
              <Link href="/categoria/smartphones" className="block py-2 md:py-0 hover:text-primary font-medium">
                Smartphones
              </Link>
            </li>
            <li>
              <Link href="/categoria/laptops" className="block py-2 md:py-0 hover:text-primary font-medium">
                Laptops
              </Link>
            </li>
            <li>
              <Link href="/categoria/tablets" className="block py-2 md:py-0 hover:text-primary font-medium">
                Tablets
              </Link>
            </li>
            <li>
              <Link href="/categoria/accesorios" className="block py-2 md:py-0 hover:text-primary font-medium">
                Accesorios
              </Link>
            </li>
            <li>
              <Link href="/categoria/gaming" className="block py-2 md:py-0 hover:text-primary font-medium">
                Gaming
              </Link>
            </li>
            <li>
              <Link href="/ofertas" className="block py-2 md:py-0 hover:text-primary font-medium text-secondary">
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
