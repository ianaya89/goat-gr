import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CampusRegistration() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/#campus" className="text-blue-600 hover:underline flex items-center">
                ← Volver a Campus
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <img
                  src="/placeholder.svg?key=upcoming-campus"
                  alt="Campus de Invierno 2024"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h1 className="text-3xl font-bold">Inscripción: Campus de Invierno 2024</h1>
                    <p className="text-lg">15-30 Julio, 2024 • Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Información del Campus</h2>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Entrenamiento técnico y táctico diario</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Sesiones con entrenadores internacionales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Análisis de video personalizado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Competencias y partidos amistosos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Alojamiento y comidas incluidas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                        <span>Kit de entrenamiento GOAT Sports</span>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Precio:</h3>
                      <p className="text-2xl font-bold text-blue-600">$120.000 ARS</p>
                      <p className="text-sm text-gray-500">Posibilidad de pago en cuotas</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Formulario de Inscripción</h2>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                          Edad
                        </label>
                        <input
                          type="number"
                          id="age"
                          min="8"
                          max="30"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Nivel de experiencia
                        </label>
                        <select
                          id="experience"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          required
                        >
                          <option value="">Seleccionar nivel</option>
                          <option value="beginner">Principiante</option>
                          <option value="intermediate">Intermedio</option>
                          <option value="advanced">Avanzado</option>
                          <option value="elite">Elite</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
                          Club actual (opcional)
                        </label>
                        <input
                          type="text"
                          id="club"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                          Completar Inscripción
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
