export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    content: string; // Markdown or HTML
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'muzik-egitimine-ne-zaman-baslanir',
        title: 'Müzik Eğitimine Ne Zaman Başlanmalı?',
        excerpt: 'Çocuklarda müzik yeteneğini keşfetmek için ideal yaş nedir? Suzuki metoduyla erken yaşta eğitimin faydaları.',
        date: '2023-11-15',
        image: '/blog/piyano-cocuk.jpg', // Placeholder
        content: `
      ## Erken Müzik Eğitiminin Önemi
      
      Müzik, insan beyninde en çok alanı aktive eden aktivitelerden biridir. Çocukların zihinsel gelişimi için büyük önem taşır.

      ### 4-5 Yaş: Piyano ve Ritim
      Bu yaşlarda ritim duygusu gelişir. Piyano, tuşlarının görsel anlaşılırlığı nedeniyle en uygun başlangıç enstrümanıdır.

      ### 7-8 Yaş: Gitar ve Flüt
      Fiziksel gelişim ve parmak gücü arttıkça telli ve nefesli enstrümanlara geçiş yapılabilir.

      *Önemli olan, çocuğun ilgisini canlı tutmaktır.*
    `
    },
    {
        slug: 'cocugum-icin-uygun-enstruman',
        title: 'Çocuğum İçin Hangi Enstrüman Uygun?',
        excerpt: 'Piyano mu, keman mı, gitar mı? Çocuğunuzun fiziksel ve zihinsel özelliklerine göre doğru enstrüman seçimi rehberi.',
        date: '2023-12-01',
        image: '/blog/gitar-cocuk.jpg',
        content: `
      ## Doğru Seçim Nasıl Yapılır?

      Enstrüman seçimi, çocuğun hem fiziksel yapısına hem de karakterine uygun olmalıdır.

      1. **Piyano:** Temel müzik eğitimi için en kapsayıcıdır.
      2. **Keman:** İyi bir kulak ve disiplin gerektirir.
      3. **Gitar:** Sosyal ve popüler müzik seven çocuklar için motive edicidir.
      
      Deneme derslerinde öğrencimizin yatkınlığını birlikte gözlemliyoruz.
    `
    }
];

export function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
