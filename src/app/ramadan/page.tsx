'use client';
import { useEffect, useState } from 'react';
import { ramadanMenu } from '@/data/ramadan-menu';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { business } from '@/config/business';
function getLagos() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Lagos',
    weekday: 'long',
    hour: 'numeric',
    hour12: false,
  })
    .formatToParts(new Date())
    .reduce<Record<string, string>>(
      (a, p) => ({ ...a, [p.type]: p.value }),
      {},
    );
}
export default function Ramadan() {
  const [time, setTime] = useState<{ day: string; hour: number } | null>(null);
  const [adds, setAdds] = useState<string[]>([]);
  useEffect(() => {
    const update = () => {
      const x = getLagos();
      setTime({ day: x.weekday, hour: Number(x.hour) });
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);
  const today = time?.day || 'Monday';
  const open = (time?.hour ?? 0) < 12;
  return (
    <main>
      <section className="bg-[#3d5550] py-20 text-white">
        <div className="shell max-w-3xl text-center">
          <p className="eyebrow text-[#e7c47a]">Seasonal Ramadan Iftar</p>
          <h1 className="serif mt-4 text-5xl md:text-6xl">
            Make Iftar One Less Thing to Worry About 🌙
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/80">
            Enjoy delicious, freshly prepared meals throughout Ramadan. Simply
            choose your day&apos;s meal and order directly on WhatsApp.
          </p>
          <a className="btn mt-7 bg-[#d9b76c] text-[#2d201b]" href="#menu">
            Order Today&apos;s Iftar
          </a>
          <p className="mt-6 font-bold">⏰ Orders close at 12:00 PM daily.</p>
        </div>
      </section>
      <section className="shell py-10">
        <div
          className={`rounded-2xl border p-5 ${open ? 'border-emerald-300 bg-emerald-50' : 'border-red-200 bg-red-50'}`}
        >
          <p className="font-bold">
            {open
              ? '🟢 Orders are open for today'
              : '🔴 Today’s orders are closed'}
          </p>
          <p className="mt-1 text-sm text-stone-700">
            {open
              ? 'Don’t wait until you’re hungry — order before 12 PM.'
              : 'Please contact us to order for the next available day.'}{' '}
            <span className="font-semibold">Lagos time.</span>
          </p>
        </div>
      </section>
      <section id="menu" className="shell pb-20">
        <div className="text-center">
          <p className="eyebrow">Weekly menu</p>
          <h2 className="serif mt-3 text-4xl">Your Iftar Is Sorted 🌙</h2>
          <p className="mt-3 text-stone-600">
            The menu changes by day. Select your meal and optional add-ons
            below.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-[#f0e5d7] p-5">
          <p className="font-bold">Complete Your Iftar</p>
          <p className="mt-1 text-sm text-stone-600">
            Fresh Fruit Salad and Zobo are available as optional add-ons.
          </p>
          <div className="mt-3 flex gap-5">
            {['Fruit Salad 🍓', 'Zobo 🥤'].map((a) => (
              <label className="flex items-center gap-2 text-sm" key={a}>
                <input
                  type="checkbox"
                  checked={adds.includes(a)}
                  onChange={() =>
                    setAdds(
                      adds.includes(a)
                        ? adds.filter((x) => x !== a)
                        : [...adds, a],
                    )
                  }
                />
                {a}
              </label>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ramadanMenu.map(([day, meals]) => (
            <article
              className={`card p-6 ${day === today ? 'ring-2 ring-[#bc8c47]' : ''}`}
              key={day}
            >
              <p className="eyebrow">{day === today ? 'Today’s menu' : day}</p>
              <h3 className="serif mt-2 text-3xl">{day}</h3>
              <div className="mt-5 grid gap-3">
                {meals.map((meal, i) => {
                  const msg = `Hello ${business.name} 🌙\n\nI'd like to order today's Ramadan Iftar.\n\nDay: ${day}\n\nMeal:\n${meal}\n\nAdd-ons:\n${adds.length ? adds.join('\n') : 'None'}\n\nName:\nPhone:\nDelivery/Pickup:\nAddress:\n\nThank you.`;
                  return (
                    <div className="rounded-xl bg-[#fbf7f0] p-4" key={meal}>
                      <p className="text-xs font-bold text-[#9e7138]">
                        OPTION {i + 1}
                      </p>
                      <p className="mt-1 font-semibold">{meal}</p>
                      <WhatsAppButton
                        className="mt-3 w-full text-sm"
                        message={msg}
                      >
                        Order on WhatsApp
                      </WhatsAppButton>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-[#662f39] p-7 text-center text-white">
          <p className="eyebrow text-[#e7c47a]">Family Iftar deal</p>
          <h2 className="serif mt-2 text-3xl">Good food makes Iftar better.</h2>
          <p className="mt-2 text-white/80">
            Planning Iftar for the family? Ask us about our special packages.
          </p>
        </div>
      </section>
    </main>
  );
}
