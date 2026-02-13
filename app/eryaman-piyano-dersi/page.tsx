import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Piyano Dersi | Birebir Özel Piyano Eğitimi',
    description: 'Ankara Eryaman bölgesinde, konservatuvar mezunu eğitmenlerden her yaşa ve seviyeye uygun özel piyano dersleri. Ücretsiz tanışma dersi ile başlayın.',
});

const pageData = {
    title: 'Piyano Dersi',
    slug: '/eryaman-piyano-dersi',
    description: 'Her yaş ve seviye için özel piyano eğitimi.',
    longDescription: 'Piyano, müziğin temelini oluşturan en kapsamlı enstrümandır. İster hobi olarak, ister akademik bir kariyere hazırlık için; size özel programımla piyano çalmayı keyifle öğrenin. Nota okuma, teknik gelişim ve repertuvar çalışmalarını birleştiriyorum.',
    audiences: [
        '5 yaş ve üzeri çocuklar (Okul öncesi piyano)',
        'Okul çağı çocukları ve gençler',
        'Yetişkin hobi öğrencileri',
        'Konservatuvar / Bilsem sınavlarına hazırlananlar'
    ],
    features: [
        'Doğru oturuş ve el pozisyonu',
        'Temel müzik teorisi ve solfej',
        'Teknik egzersizler (Hanon, Czerny vb.)',
        'Klasik, Popüler ve Caz parça çalışmaları',
        'Duyum ve ritim geliştirme',
        'Düzenli yıl sonu konser performansları'
    ],
    program: [
        { title: 'Tanışma ve Seviye Belirleme', desc: 'İlk derste müzikal kulağınızı, ritim duygunuzu ve fiziksel yatkınlığınızı analiz ediyorum.' },
        { title: 'Temel Teknik ve Nota', desc: 'Nota okumayı ve tuşları tanımayı oyunlaştırarak veya sistematik egzersizlerle öğreniyorum.' },
        { title: 'Repertuvar Oluşturma', desc: 'Seviyenize uygun, sevdiğiniz parçalardan oluşan bir repertuvar ile motivasyonunuzu yüksek tutuyorum.' },
        { title: 'İleri Teknik ve Yorum', desc: 'Müzikaliteyi artıracak nüans, pedal kullanımı ve sahne performansı üzerine çalışıyorum.' }
    ],
    faqs: [
        { question: 'Piyanom yok, derse başlayabilir miyim?', answer: 'Evet, başlangıç aşamasında evinizde piyano olması şart değildir. Kendi piyanomla ders yapabilir, ilerleyen süreçte benim yönlendirmemle dijital veya akustik piyano edinebilirsiniz.' },
        { question: 'Piyano öğrenmenin yaşı var mı?', answer: 'Hayır. 5 yaşından itibaren üst yaş sınırı olmaksızın herkes piyano çalmayı öğrenebilir. Yetişkinler için özel hızlandırılmış programlarım mevcuttur.' },
        { question: 'Haftada kaç saat ders almalıyım?', answer: 'Genellikle haftada 1 ders (45-50 dk) idealdir. İleri seviye veya sınav hazırlık öğrencileri için haftada 2 ders önerilebilir.' }
    ]
};

export default function PianoPage() {
    return <LessonPageTemplate {...pageData} />;
}
