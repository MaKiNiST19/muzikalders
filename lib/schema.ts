export interface LocalBusinessSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
    telephone?: string;
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        latitude: string;
        longitude: string;
    };
    openingHours?: string[];
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps) {
    return {
        "@context": "https://schema.org",
        "@type": "MusicSchool",
        "name": props.name,
        "image": props.image,
        "@id": props.url,
        "url": props.url,
        "telephone": props.telephone || "+905373392701",
        "description": props.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": props.address?.streetAddress || "Eryaman",
            "addressLocality": props.address?.addressLocality || "Ankara",
            "addressRegion": props.address?.addressRegion || "Ankara",
            "postalCode": props.address?.postalCode || "06824",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": props.geo?.latitude || "39.975",
            "longitude": props.geo?.longitude || "32.618"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "21:00"
        }
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item,
        })),
    };
}
