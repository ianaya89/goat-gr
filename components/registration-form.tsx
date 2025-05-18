"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Upload, X, Info, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface RegistrationFormProps {
  onSubmitStart: () => void
  onSubmitSuccess: () => void
  isSubmitting: boolean
}

// Definir los horarios disponibles
const availableHours = Array.from({ length: 14 }, (_, i) => i + 8) // 8 a 21 horas
const weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

export default function RegistrationForm({ onSubmitStart, onSubmitSuccess, isSubmitting }: RegistrationFormProps) {
  // Estados para los campos del formulario
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const [club, setClub] = useState("")
  const [category, setCategory] = useState("")
  const [medicalCertificate, setMedicalCertificate] = useState<File | null>(null)
  const [trainingType, setTrainingType] = useState("")
  const [availability, setAvailability] = useState<Record<string, number[]>>({
    Lunes: [],
    Martes: [],
    Miércoles: [],
    Jueves: [],
    Viernes: [],
  })
  const [allergies, setAllergies] = useState("")
  const [objectives, setObjectives] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  // Referencia para el input de archivo
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Manejar cambios en la disponibilidad
  const handleAvailabilityChange = (day: string, hour: number) => {
    setAvailability((prev) => {
      const updatedDay = [...prev[day]]

      if (updatedDay.includes(hour)) {
        // Si ya está seleccionado, lo quitamos
        const index = updatedDay.indexOf(hour)
        updatedDay.splice(index, 1)
      } else {
        // Si no está seleccionado, lo añadimos
        updatedDay.push(hour)
      }

      return {
        ...prev,
        [day]: updatedDay,
      }
    })
  }

  // Manejar cambio de archivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      // Validar tipo de archivo
      const validTypes = ["image/jpeg", "image/png", "application/pdf"]
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, medicalCertificate: "El archivo debe ser una imagen (JPEG, PNG) o un PDF" })
        return
      }

      // Validar tamaño (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, medicalCertificate: "El archivo no debe superar los 5MB" })
        return
      }

      setMedicalCertificate(file)
      setErrors({ ...errors, medicalCertificate: "" })
    }
  }

  // Eliminar archivo seleccionado
  const handleRemoveFile = () => {
    setMedicalCertificate(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Validar el formulario
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!firstName.trim()) newErrors.firstName = "El nombre es requerido"
    if (!lastName.trim()) newErrors.lastName = "El apellido es requerido"
    if (!email.trim()) newErrors.email = "El email es requerido"
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "El email no es válido"
    if (!phone.trim()) newErrors.phone = "El teléfono es requerido"
    if (!birthDate) newErrors.birthDate = "La fecha de nacimiento es requerida"
    if (!club.trim()) newErrors.club = "El club es requerido"
    if (!category.trim()) newErrors.category = "La categoría es requerida"
    if (!medicalCertificate) newErrors.medicalCertificate = "El apto físico es requerido"
    if (!trainingType) newErrors.trainingType = "Debes seleccionar un tipo de entrenamiento"

    // Verificar si hay al menos un horario seleccionado
    const hasAvailability = Object.values(availability).some((hours) => hours.length > 0)
    if (!hasAvailability) newErrors.availability = "Debes seleccionar al menos un horario disponible"

    if (!objectives.trim()) newErrors.objectives = "Los objetivos son requeridos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll al primer error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    onSubmitStart()

    try {
      // Aquí iría la lógica para enviar los datos al servidor
      // Por ahora simulamos un envío exitoso con un timeout
      await new Promise((resolve) => setTimeout(resolve, 2000))

      onSubmitSuccess()
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setErrors({ ...errors, submit: "Hubo un error al enviar el formulario. Por favor, intenta nuevamente." })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Completa todos los campos del formulario. La información proporcionada nos ayudará a diseñar un plan de
              entrenamiento adaptado a tus necesidades.
            </p>
          </div>
        </div>
      </div>

      {/* Datos personales */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Datos Personales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre <span className="text-red-500">*</span>
            </Label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              placeholder="Tu nombre"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido <span className="text-red-500">*</span>
            </Label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              placeholder="Tu apellido"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </Label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              placeholder="tu@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono <span className="text-red-500">*</span>
            </Label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              placeholder="+54 9 11 1234 5678"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Nacimiento <span className="text-red-500">*</span>
            </Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="birthDate"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !birthDate && "text-muted-foreground",
                    errors.birthDate && "border-red-500",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {birthDate ? format(birthDate, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={birthDate}
                  onSelect={(date) => {
                    setBirthDate(date)
                    setIsCalendarOpen(false)
                  }}
                  initialFocus
                  disabled={(date) => date > new Date() || date < new Date("1940-01-01")}
                />
              </PopoverContent>
            </Popover>
            {errors.birthDate && <p className="mt-1 text-sm text-red-500">{errors.birthDate}</p>}
          </div>
        </div>
      </div>

      {/* Datos deportivos */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Datos Deportivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
              Club <span className="text-red-500">*</span>
            </Label>
            <input
              type="text"
              id="club"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.club ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              placeholder="Nombre de tu club actual"
            />
            {errors.club && <p className="mt-1 text-sm text-red-500">{errors.club}</p>}
          </div>

          <div>
            <Label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Categoría <span className="text-red-500">*</span>
            </Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.category ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            >
              <option value="">Seleccionar categoría</option>
              <option value="Sub-12">Sub-12</option>
              <option value="Sub-14">Sub-14</option>
              <option value="Sub-16">Sub-16</option>
              <option value="Sub-18">Sub-18</option>
              <option value="Sub-21">Sub-21</option>
              <option value="Primera">Primera</option>
              <option value="Mamis Hockey">Mamis Hockey</option>
              <option value="Otra">Otra</option>
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
          </div>
        </div>
      </div>

      {/* Apto físico */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Apto Físico</h2>
        <div className="mb-4">
          <Label htmlFor="medicalCertificate" className="block text-sm font-medium text-gray-700 mb-1">
            Certificado Médico <span className="text-red-500">*</span>
          </Label>
          <p className="text-sm text-gray-500 mb-2">Sube una imagen o PDF de tu certificado médico (máx. 5MB)</p>

          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {!medicalCertificate ? (
                <>
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Seleccionar archivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                      />
                    </label>
                    <p className="pl-1">o arrastra y suelta</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF hasta 5MB</p>
                </>
              ) : (
                <div className="flex items-center justify-center flex-col">
                  <div className="flex items-center justify-between bg-blue-50 p-3 rounded-md w-full mb-2">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm font-medium truncate" style={{ maxWidth: "200px" }}>
                        {medicalCertificate.name}
                      </span>
                    </div>
                    <button type="button" onClick={handleRemoveFile} className="text-red-500 hover:text-red-700">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-500"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Cambiar archivo
                  </button>
                </div>
              )}
            </div>
          </div>
          {errors.medicalCertificate && <p className="mt-1 text-sm text-red-500">{errors.medicalCertificate}</p>}
        </div>
      </div>

      {/* Tipo de entrenamiento */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tipo de Entrenamiento</h2>
        <div className="mb-4">
          <Label className="block text-sm font-medium text-gray-700 mb-3">
            Selecciona el tipo de entrenamiento <span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={trainingType} onValueChange={setTrainingType} className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="academia" id="academia" />
              <Label htmlFor="academia" className="cursor-pointer">
                Academia (entrenamiento grupal)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="personalizado" id="personalizado" />
              <Label htmlFor="personalizado" className="cursor-pointer">
                Entrenamiento personalizado
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ambos" id="ambos" />
              <Label htmlFor="ambos" className="cursor-pointer">
                Ambos
              </Label>
            </div>
          </RadioGroup>
          {errors.trainingType && <p className="mt-1 text-sm text-red-500">{errors.trainingType}</p>}
        </div>
      </div>

      {/* Disponibilidad horaria */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Disponibilidad Horaria</h2>
        <p className="text-sm text-gray-500 mb-4">
          Marca todos los horarios en los que podrías asistir a los entrenamientos (selecciona al menos uno)
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border bg-gray-50"></th>
                {weekdays.map((day) => (
                  <th key={day} className="py-2 px-4 border bg-gray-50 text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {availableHours.map((hour) => (
                <tr key={hour}>
                  <td className="py-2 px-4 border bg-gray-50 font-medium">{`${hour}:00 - ${hour + 1}:00`}</td>
                  {weekdays.map((day) => (
                    <td key={`${day}-${hour}`} className="py-2 px-4 border text-center">
                      <Checkbox
                        id={`${day}-${hour}`}
                        checked={availability[day].includes(hour)}
                        onCheckedChange={() => handleAvailabilityChange(day, hour)}
                        className="h-5 w-5"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {errors.availability && <p className="mt-1 text-sm text-red-500">{errors.availability}</p>}
      </div>

      {/* Información médica */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Información Médica</h2>
        <div className="mb-4">
          <Label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
            Alergias o condiciones médicas relevantes
          </Label>
          <textarea
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Describe cualquier alergia o condición médica que debamos conocer"
          ></textarea>
        </div>
      </div>

      {/* Objetivos */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Objetivos</h2>
        <div className="mb-4">
          <Label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-1">
            ¿Qué objetivos buscas mejorar como jugadora? <span className="text-red-500">*</span>
          </Label>
          <textarea
            id="objectives"
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            rows={4}
            className={`w-full px-3 py-2 border ${errors.objectives ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            placeholder="Describe tus objetivos, habilidades que quieres mejorar, etc."
          ></textarea>
          {errors.objectives && <p className="mt-1 text-sm text-red-500">{errors.objectives}</p>}
        </div>
      </div>

      {/* Error general */}
      {errors.submit && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{errors.submit}</p>
            </div>
          </div>
        </div>
      )}

      {/* Botón de envío */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </span>
          ) : (
            "Enviar Solicitud"
          )}
        </Button>
      </div>
    </form>
  )
}
