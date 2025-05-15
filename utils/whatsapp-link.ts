/**
 * Genera un enlace de WhatsApp válido con un mensaje predeterminado
 * @param message Mensaje opcional para incluir en el enlace
 * @returns URL de WhatsApp formateada correctamente
 */
export function getWhatsAppLink(message?: string): string {
  // Número de teléfono en formato internacional sin símbolos
  const phoneNumber = "5491126578585"

  // Formato correcto para enlaces de WhatsApp
  let url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&type=phone_number&app_absent=0`

  // Añadir mensaje si se proporciona
  //if (message) {
    //url += `&text=${encodeURIComponent(message)}`
  //}

  return url
}
