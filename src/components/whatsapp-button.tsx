import { MessageCircle } from 'lucide-react'; import { generateWhatsAppLink } from '@/lib/whatsapp';
export function WhatsAppButton({message,children,className='' }:{message:string;children:React.ReactNode;className?:string}){return <a target="_blank" rel="noreferrer" className={`btn btn-primary ${className}`} href={generateWhatsAppLink(message)}><MessageCircle size={18}/>{children}</a>}
