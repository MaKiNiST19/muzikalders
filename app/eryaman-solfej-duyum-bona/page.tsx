import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Solfej, Duyum ve Bona Dersi | Müzik Teorisi',
    description: 'Müziğin alfabesini öğrenin. Ankara Eryaman solfej, dikte, duyum ve bona dersleri. Sınavlara hazırlık ve temel müzik eğitimi.',
});

const pageData = {
    title: 'Solfej / Duyum / Bona',
    slug: '/eryaman-solfej-duyum-bona',
    description: 'Müziğin dilini konuşun, notaları duyun ve ritmi hissedin.',
    longDescription: 'Solfej ve duyum eğitimi, bir enstrüman çalmanın ötesinde, müziği anlama ve deşifre etme sürecidir. Nota okuma hızı (Bona), sesleri ayırt etme (Duyum) ve ritmik doğruluk üzerine kurulu bu eğitim, akademik müzik kariyerinin temelidir.',
    audiences: [
        'Enstrüman eğitimini teorik bilgilerle desteklemek isteyenler',
        'Konservatuvar ve BİLSEM müzik hazırlık öğrencileri',
        'Müzik öğretmenliği adayları',
        'Koro ve topluluklarda yer alan amatör müzisyenler'
    ],
    features: [
        'Nota okuma (Bona) ve hızlandırma çalışmaları',
        'Aralık ve akor duyumu geliştirme',
        'Ritmik dikte ve vuruş çalışmaları',
        'Melodik dikte (Duyduğunu notaya dökme)',
        'Temel armoni ve müzik teorisi bilgileri',
        'Müzikal terimler ve form bilgisi'
    ],
    program: [
        { title: 'Nota ve Ritim Giriş', desc: 'Porteyi tanıma, anahtarlar ve temel vuruş sürelerini öğreniyorum.' },
        { title: 'Intervaller ve Tek Ses Duyum', desc: 'Sesleri frekans olarak ayırt etme ve temel aralıkları duyma çalışmaları.' },
        { title: 'Bona ve Dikte', desc: 'Karmaşık ritim kalıplarını okuma ve basit melodileri notaya dökme aşaması.' },
        { title: 'İleri Teori ve Çok Seslilik', desc: 'İki ve daha çok sesli duyum çalışmalarıyla işitsel zekayı zirveye taşıyorum.' }
    ],
    faqs: [
        { question: 'Zorunlu bir ders mi?', answer: 'Akademik bir başarı hedefleniyorsa solfej eğitimi müziğin olmazsa olmazıdır. Enstrüman çalımınızı %100 hızlandırır.' },
        { question: 'Online ders yapılabilir mi?', answer: 'Evet, solfej ve teori dersleri interaktif olarak online platformlarda da verimli şekilde işlenebilir.' },
        { question: 'Kaç ay sürer?', answer: 'Temel düzey 6-8 ayda tamamlanır. Akademik hazırlık için 1-2 yıllık bir süreç idealdir.' }
    ]
};

export default function SolfegePage() {
    return <LessonPageTemplate {...pageData} />;
}
