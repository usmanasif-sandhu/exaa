/**
 * Build https://wa.me/{digits} from international-style input (0092…, +92…, spaces).
 */
export function whatsappChatUrl(input) {
  let d = String(input ?? '').replace(/\D/g, '')
  if (d.startsWith('00')) d = d.slice(2)
  if (!d) return 'https://wa.me/'
  return `https://wa.me/${d}`
}
