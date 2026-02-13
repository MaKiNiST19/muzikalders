import Hero from '@/components/Hero';
import ServiceGrid from '@/components/ServiceGrid';
import Steps from '@/components/Steps';
import Audience from '@/components/Audience';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { defaultFAQs } from '@/lib/constants';
import CTA from '@/components/CTA';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Eryaman Müzik Dersi | Piyano, Gitar, Yan Flüt, Şan Eğitimi',
  description: 'Ankara Eryaman bölgesinde konservatuvar mezunu eğitmenlerden birebir piyano, gitar, yan flüt ve şan dersleri. Ücretsiz tanışma dersi için hemen arayın.',
});

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Müzikal Ders - Eryaman Müzik Kursu',
    description: 'Ankara Eryaman bölgesinde profesyonel müzik eğitimi ve sınav hazırlık kursları.',
    url: 'https://www.muzikalders.com.tr',
    image: 'https://www.muzikalders.com.tr/og.jpg',
    address: {
      streetAddress: 'Eryaman',
      addressLocality: 'Ankara',
      addressRegion: 'Ankara',
      postalCode: '06824',
      addressCountry: 'TR',
    },
  });

  const faqSchema = generateFAQSchema(defaultFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <ServiceGrid />
        <Steps />
        <Audience />
        <Achievements />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
