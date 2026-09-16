import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
const photos = [
  [
    'Cakes',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Parfaits',
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Small Chops',
    'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  ],
  [
    'Event Decoration',
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
  ],
];
export const metadata = { title: 'Gallery | Mibaz Treats & Events' };
export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A glimpse of beautiful moments."
        copy="A collection of image placeholders ready to be replaced by Mibaz’s own cakes, treats and event work."
      />
      <main className="shell grid gap-6 py-16 sm:grid-cols-2">
        {photos.map(([name, src]) => (
          <figure className="card" key={name}>
            <div className="relative h-80">
              <Image
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
                src={src}
                alt={`${name} gallery placeholder`}
              />
            </div>
            <figcaption className="serif p-5 text-2xl">{name}</figcaption>
          </figure>
        ))}
      </main>
    </>
  );
}
