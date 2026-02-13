import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';

const baseUrl = 'https://www.muzikalders.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/hakkimizda-zeynep-ogretmen',
        '/iletisim',
        '/blog',
        '/eryaman-piyano-dersi',
        '/eryaman-gitar-dersi',
        '/eryaman-yan-flut-dersi',
        '/eryaman-san-dersi',
        '/eryaman-solfej-duyum-bona',
        '/bilsem-muzik-hazirlik',
        '/konservatuvar-hazirlik',
        '/muzik-ogretmenligi-hazirlik',
        '/ogrenci-basari-hikayeleri',
        '/yorumlar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogRoutes];
}
