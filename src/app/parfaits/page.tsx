import { PageHero } from '@/components/page-hero';
import { ProductGrid } from '@/components/product-grid';
import { parfaits } from '@/data/products';
export const metadata = { title: 'Parfaits | Mibaz Treats & Events' };
export default function Parfaits() {
  return (
    <>
      <PageHero
        eyebrow="Layered with delight"
        title="A little fresh indulgence, beautifully served."
        copy="From classic cups to party-perfect portions, our parfaits are made for simple enjoyment and special moments alike."
      />
      <main className="shell py-16">
        <ProductGrid items={parfaits} type="Parfait" />
      </main>
    </>
  );
}
