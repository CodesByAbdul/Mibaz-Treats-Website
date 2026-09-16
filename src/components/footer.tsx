import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { business } from '@/config/business';
import { generateWhatsAppLink, generalMessage } from '@/lib/whatsapp';
export function Footer() {
  return (
    <footer className="bg-[#2d201b] pb-24 pt-14 text-[#f9f4ec]">
      <div className="shell grid gap-10 md:grid-cols-3">
        <div>
          <p className="serif text-2xl">Mibaz Treats & Events</p>
          <p className="mt-3 max-w-xs text-sm text-[#dfcfc1]">
            Sweet treats. Beautiful moments. Memorable events.
          </p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[#dfcfc1]">
            <Link href="/cakes">Cakes</Link>
            <Link href="/parfaits">Parfaits</Link>
            <Link href="/small-chops">Small Chops</Link>
            <Link href="/events">Events</Link>
            <Link href="/ramadan">Ramadan</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Let&apos;s talk</p>
          <div className="mt-3 grid gap-3 text-sm">
            <a
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
              href={generateWhatsAppLink(generalMessage)}
            >
              <MessageCircle size={16} />
              WhatsApp us
            </a>
            <a
              className="flex items-center gap-2"
              href={`mailto:${business.email}`}
            >
              <Mail size={16} />
              {business.email}
            </a>
            <p className="text-xs text-[#dfcfc1]">
              Replace the placeholder contact details in{' '}
              <code>src/config/business.ts</code>.
            </p>
          </div>
        </div>
      </div>
      <div className="shell mt-10 border-t border-white/15 pt-5 text-xs text-[#dfcfc1]">
        © 2026 Mibaz Treats & Events. All rights reserved.
      </div>
    </footer>
  );
}
