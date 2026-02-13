import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Şan Dersi | Ses Eğitimi ve Teknikleri',
    description: 'Ankara Eryaman şan dersi. Sesinizi doğru kullanmayı öğrenin, teknik ve performansınızı geliştirin. Birebir özel ses eğitimi.',
});

const pageData = {
    title: 'Şan Dersi',
    slug: '/eryaman-san-dersi',
    description: 'Enstrümanınız sesiniz olsun. Profesyonel ses eğitimi ile parlayın.',
    longDescription: 'Şan eğitimi, ses tellerini yormadan, doğal ve sağlıklı bir şekilde şarkı söyleme sanatıdır. Doğru nefes, entonasyon (detone olmama) ve sahne performansını kapsayan bütüncül bir eğitim programı sunuyorum.',
    audiences: [
        'Şarkı söylemeyi seven her yaş grubu',
        'Konservatuvar ve Müzik Öğretmenliği sınav hazırlığı yapanlar',
        'Koro sanatçısı adayları',
        'Profesyonel konuşmacılar ve eğitmenler'
    ],
    features: [
        'Vokal ısınma ve ses açma egzersizleri',
        'Diyafram ve nefes kontrolü çalışmaları',
        'Diksiyon ve artikülasyon (Anlaşılır söyleme)',
        'Ses genişliği (Range) artırma çalışmaları',
        'Farklı tarzlarda repertuvar (Pop, Klasik, Jazz vb.)',
        'Mikrofon ve sahne kullanımı teknikleri'
    ],
    program: [
        { title: 'Ses Analizi ve Nefes', desc: 'Ses renginizi ve aralığınızı belirliyorum, temel nefes egzersizlerine başlıyorum.' },
        { title: 'Vokal Teknik Temelleri', desc: 'Ağız yapısı, tını bölgeleri (kafa sesi, göğüs sesi) ve register geçişlerini çalışıyorum.' },
        { title: 'Eser Çalışması', desc: 'Belirlenen repertuvar üzerinden parçanın teknik ve duygusal analizini yapıyorum.' },
        { title: 'Performans Hazırlığı', desc: 'Yıl sonu konserleri ve sınavlar için sahne hakimiyeti ve yorumlama üzerine yoğunlaşıyorum.' }
    ],
    faqs: [
        { question: 'Sesim kötü olsa da şan dersi alabilir miyim?', answer: 'Şan eğitimi sadece "güzel sesli" olanlar için değil, sesini kullanmayı öğrenmek isteyen herkes içindir. Teknik çalışmalarla her ses geliştirilebilir.' },
        { question: 'Dersler birebir mi?', answer: 'Evet, şan dersleri öğrencinin sesine özel yapılması gerektiği için birebir işlenmektedir.' },
        { question: 'Ne kadar sürede sonuç alırım?', answer: 'Ses tellerinin kas hafızası geliştirmesi zaman alır. Belirgin bir değişim için genellikle 3-6 aylık düzenli çalışma önerilir.' }
    ]
};

export default function VocalPage() {
    return <LessonPageTemplate {...pageData} />;
}
