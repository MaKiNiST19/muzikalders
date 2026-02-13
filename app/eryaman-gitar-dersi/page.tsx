import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Gitar Dersi | Klasik, Akustik, Elektro Eğitimi',
    description: 'Ankara Eryaman bölgesinde, profesyonel gitar eğitmenlerinden her seviyeye uygun klasik, akustik ve elektro gitar dersleri.',
});

const pageData = {
    title: 'Gitar Dersi',
    slug: '/eryaman-gitar-dersi',
    description: 'Her yaş ve seviye için özel gitar eğitimi.',
    longDescription: 'Gitar, her tür müzikte kendine yer bulan en popüler ve çok yönlü enstrümanlarından biridir. Klasik teknikten modern eşliğe kadar geniş bir yelpazede size özel program.',
    audiences: [
        '7 yaş ve üzeri çocuklar',
        'Yetişkin hobi öğrencileri',
        'Elektro veya akustik gitara geçiş yapmak isteyenler',
        'Grupla müzik yapmak isteyen gençler'
    ],
    features: [
        'Klasik teknik ve sağ el / sol el koordinasyonu',
        'Akor dizileri ve geçiş alıştırmaları',
        'Tablatür okuma ve nota bilgisi',
        'Popüler şarkı eşliği',
        'Solo teknikleri ve doğaçlama temelleri',
        'Perküsif teknikler'
    ],
    program: [
        { title: 'Tutum ve Temel Akorlar', desc: 'Doğru tutuş ve basit akor kalıplarıyla (Open Chords) hemen şarkı çalmaya başlayın.' },
        { title: 'Ritim ve Arpej', desc: 'Farklı ritim kalıplarını ve parmak stilini (fingerstyle) geliştirin.' },
        { title: 'Bare ve İleri Akorlar', desc: 'Daha karmaşık akorlar ve barre teknikleriyle el gücünüzü artırın.' },
        { title: 'Solo ve İleri Teknik', desc: 'Gam çalışmaları, solo cümleleri ve müzikal ifadeyi derinleştirin.' }
    ],
    faqs: [
        { question: 'Klasik gitarla mı başlamalıyım?', answer: 'Genellikle klasik gitar, telleri naylon olduğu için başlangıçta parmakları daha az yorar ve temel teknik için iyi bir temel oluşturur. Ancak öğrencinin isteğine göre akustik veya elektro ile de başlanabilir.' },
        { question: 'Gitarım yok, ne almalıyım?', answer: 'İlk derslerde benimle görüşüp boyunuza ve çalmak istediğiniz tarza uygun bir gitar seçmenizde yardımcı oluyorum.' },
        { question: 'Solak gitar gerekli mi?', answer: 'Solaklar için özel solak gitarlar mevcuttur veya teller ters takılabilir. Ancak bazı öğrenciler sağ el gitarı da rahatlıkla çalabilir. İlk derste bunu test ediyorum.' }
    ]
};

export default function GuitarPage() {
    return <LessonPageTemplate {...pageData} />;
}
