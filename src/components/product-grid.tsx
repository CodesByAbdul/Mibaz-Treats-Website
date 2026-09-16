import Image from 'next/image';
import { Product } from '@/data/products';
import { WhatsAppButton } from './whatsapp-button';
import { business } from '@/config/business';
export function ProductGrid({
  items,
  type,
}: {
  items: Product[];
  type: string;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article className="card" key={p.name}>
          <div className="relative h-60">
            <Image
              src={p.image}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              alt={`${p.name} from Mibaz Treats & Events`}
            />
          </div>
          <div className="p-5">
            <p className="eyebrow">{p.category || type}</p>
            <h3 className="serif mt-2 text-2xl">{p.name}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              {p.description}
            </p>
            <p className="mt-3 text-sm font-semibold text-[#9e7138]">
              Contact us for current pricing.
            </p>
            <WhatsAppButton
              className="mt-5 w-full"
              message={`Hello ${business.name}, I'd like to enquire about ${p.name}.`}
            >
              Order on WhatsApp
            </WhatsAppButton>
          </div>
        </article>
      ))}
    </div>
  );
}
