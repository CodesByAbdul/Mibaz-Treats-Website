import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { business } from '@/config/business';
export const metadata = {
  title: 'Events & Decoration | Mibaz Treats & Events',
};
const images = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=80',
];
export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events & decoration"
        title="Let’s Make Your Event Beautiful."
        copy="Mibaz provides thoughtful decoration and event styling for birthdays, weddings, engagements, naming ceremonies, bridal showers, anniversaries, private celebrations and corporate events."
      />
      <main className="shell py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {images.map((src, i) => (
            <div
              className="relative h-72 overflow-hidden rounded-3xl"
              key={src}
            >
              <Image
                fill
                sizes="(max-width:768px) 100vw,33vw"
                className="object-cover"
                src={src}
                alt={`Mibaz event decoration inspiration ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="card p-7">
            <p className="eyebrow">Event decoration</p>
            <h2 className="serif mt-3 text-3xl">
              A setting made for your occasion.
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Beautiful, thoughtful decoration designed around your occasion.
            </p>
          </article>
          <article className="card p-7">
            <p className="eyebrow">Event styling</p>
            <h2 className="serif mt-3 text-3xl">Details that work together.</h2>
            <p className="mt-3 leading-7 text-stone-600">
              From colour themes to the final details, we help create a cohesive
              event experience.
            </p>
          </article>
        </div>
        <div className="mt-10 text-center">
          <WhatsAppButton
            message={`Hello ${business.name}, I'd like to discuss event decoration and styling.`}
          >
            Discuss My Event
          </WhatsAppButton>
        </div>
      </main>
    </>
  );
}
