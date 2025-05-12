/**
 * Genera un enlace de WhatsApp válido con un mensaje predeterminado
 * @returns URL de WhatsApp formateada correctamente
 */
export function getWhatsAppLink(): string {
  // Número de teléfono en formato internacional sin símbolos
  const phoneNumber = "5491126578585"

  // Mensaje predeterminado codificado para URL
  const message = encodeURIComponent(
    "Hola, me gustaria obtener mas informacion sobre los planes de entrenamiento. Muchas gracias!",
  )

  // Formato correcto para enlaces de WhatsApp
  return `https://wa.me/${phoneNumber}?text=${message}`
}
