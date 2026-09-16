'use client';
import { useState } from 'react';
import { PageHero } from '@/components/page-hero';
import { generateWhatsAppLink } from '@/lib/whatsapp';
import { business } from '@/config/business';
export default function Consultation() {
  const [form, setForm] = useState<Record<string, string>>({});
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = `Hello ${business.name}, I'd like to book an event hall consultation.\n\nName: ${form.name || ''}\nPhone: ${form.phone || ''}\nEvent type: ${form.event || ''}\nPreferred date: ${form.date || ''}\nExpected guests: ${form.guests || ''}\nPreferred location: ${form.location || ''}\nBudget range: ${form.budget || ''}\nAdditional information: ${form.info || ''}`;
    window.open(generateWhatsAppLink(m), '_blank', 'noopener,noreferrer');
  };
  const field = (label: string, key: string, type = 'text') => (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        required={key === 'name' || key === 'phone'}
        type={type}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="rounded-xl border border-stone-300 bg-white p-3 font-normal"
      />
    </label>
  );
  return (
    <>
      <PageHero
        eyebrow="Event hall consultation"
        title="Not Sure Where to Host Your Event?"
        copy="We help you make better venue decisions by considering your guest size, event type, location, budget and decoration needs."
      />
      <main className="shell grid gap-12 py-16 lg:grid-cols-2">
        <section>
          <p className="eyebrow">What we consider</p>
          <h2 className="serif mt-3 text-4xl">Find a venue with confidence.</h2>
          <ul className="mt-6 grid gap-3 text-stone-700">
            {[
              'Venue selection guidance',
              'Event hall suitability',
              'Guest capacity planning',
              'Location considerations',
              'Decoration considerations',
              'Budget considerations',
            ].map((x) => (
              <li className="rounded-xl bg-[#f0e5d7] p-4" key={x}>
                {x}
              </li>
            ))}
          </ul>
        </section>
        <form onSubmit={submit} className="card grid gap-4 p-6">
          <h2 className="serif text-3xl">Book a Consultation</h2>
          {field('Name', 'name')}
          {field('Phone number', 'phone', 'tel')}
          {field('Event type', 'event')}
          {field('Preferred date', 'date', 'date')}
          {field('Expected guests', 'guests')}
          {field('Preferred location', 'location')}
          <label className="grid gap-2 text-sm font-semibold">
            Budget range
            <select
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="rounded-xl border border-stone-300 bg-white p-3 font-normal"
            >
              <option value="">Select a range</option>
              <option>To be discussed</option>
              <option>Budget conscious</option>
              <option>Flexible</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Additional information
            <textarea
              onChange={(e) => setForm({ ...form, info: e.target.value })}
              rows={4}
              className="rounded-xl border border-stone-300 bg-white p-3 font-normal"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Continue on WhatsApp
          </button>
          <p className="text-xs text-stone-500">
            Nothing is stored here. Submitting simply creates your WhatsApp
            enquiry.
          </p>
        </form>
      </main>
    </>
  );
}
