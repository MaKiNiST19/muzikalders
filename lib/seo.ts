import { Metadata } from 'next';

export const siteConfig = {
    name: 'Müzikal Ders',
    description: 'Ankara Eryaman bölgesinde profesyonel piyano, gitar, yan flüt, şan ve solfej dersleri. Konservatuvar ve BİLSEM müzik hazırlık kursları.',
    url: 'https://www.muzikalders.com.tr',
    ogImage: 'https://www.muzikalders.com.tr/og.jpg',
    links: {
        twitter: 'https://twitter.com/muzikalders',
        github: 'https://github.com/muzikalders',
    },
}

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    icons = '/favicon.ico',
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`,
        },
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@muzikalders',
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
