import { business } from '@/config/business';
export const generalMessage = `Hello ${business.name}, I'd like to make an enquiry.`;
export function generateWhatsAppLink(message: string) {
  const number = business.whatsapp.replace(/\D/g, '');
  return number && number !== '08143123294'
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
}
