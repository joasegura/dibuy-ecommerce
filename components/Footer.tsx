import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="DIBUY" width={120} height={40} className="h-10 w-auto" />
            <p className="text-gray">
              Tu tienda de tecnología de confianza. Productos de calidad con la mejor atención al cliente.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-gray hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-gray hover:text-white transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="text-gray hover:text-white transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Atención al cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ayuda" className="text-gray hover:text-white transition-colors">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="/envios" className="text-gray hover:text-white transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="text-gray hover:text-white transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-gray hover:text-white transition-colors">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray">info@dibuy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray text-sm">© 2024 DIBUY. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-gray hover:text-white text-sm transition-colors">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="text-gray hover:text-white text-sm transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
