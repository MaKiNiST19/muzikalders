import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Müzik Öğretmenliği Hazırlık Kursu | Eryaman',
    description: 'Eğitim Fakültesi Müzik Öğretmenliği bölümü yetenek sınavlarına hazırlık. Ankara Eryaman bölgesinde uzman piyano, ses ve teori eğitimi.',
});

const pageData = {
    title: 'Müzik Öğretmenliği Hazırlık',
    slug: '/muzik-ogretmenligi-hazirlik',
    description: 'Geleceğin müzik eğitimcileri arasında yerinizi alın.',
    longDescription: 'Müzik öğretmenliği sınavları, hem enstrüman hem de ses (şan) ve duyum yeteneklerinin dengeli bir şekilde ölçüldüğü sınavlardır. Gazi Üniversitesi, Ankara Müzik ve Güzel Sanatlar Üniversitesi gibi okulların sınav formatlarına uygun komple bir hazırlık paketi sunuyorum.',
    audiences: [
        'Lise mezunu olup üniversite hedefleyenler',
        'İkinci üniversite olarak müzik öğretmenliği okumak isteyenler',
        'Yurt dışı müzik eğitimi diplomalarını denklik için hazırlayanlar'
    ],
    features: [
        'Şan (Ses) yeteneği geliştirme çalışmaları',
        'Piyano ve ana çalgı sınavı hazırlığı',
        '2, 3 ve 4 sesli duyum (Kulak) pratikleri',
        'Dikte ve solfej hızlandırma teknikleri',
        'Mülakat ve pedagojik yaklaşım bilgilendirmesi',
        'YKS (TYT) puan ve tercih danışmanlığı'
    ],
    program: [
        { title: 'Branş Seçimi', desc: 'Sınavda seçilecek ana enstrüman ve yardımcı piyano üzerine yol haritası çiziyorum.' },
        { title: 'Vokal Hazırlık', desc: 'İstiklal Marşı ve sınavda istenecek eserlerin ses tekniğiyle çalışılması.' },
        { title: 'Teorik Paket', desc: 'Sınavın barajı olan duyum ve solfej derslerini yoğunlaştırılmış periyotlarla işliyorum.' },
        { title: 'Mock Sınavlar', desc: 'Daha önce çıkmış sınav sorularıyla süre yönetimi ve sınav psikolojisi üzerine denemeler.' }
    ],
    faqs: [
        { question: 'TYT puanı önemli mi?', answer: 'Yetenek sınavına girebilmek için YÖK\'ün belirlediği baraj puanını almış olmanız gerekmektedir. %50 YKS, %50 yetenek sınavı etkili olmaktadır.' },
        { question: 'Dersler grup mu yapılıyor?', answer: 'Duyum dersleri 2-3 kişilik mini gruplarla, enstrüman ve şan dersleri birebir yapılmaktadır.' },
        { question: 'Sınav içeriği nedir?', answer: 'Genelde 1 ses, 2 ses, 3 ses, 4 ses duyma, ritim, melodi tekrarı ve eser icrasıdır.' }
    ]
};

export default function MusicTeachingPage() {
    return <LessonPageTemplate {...pageData} />;
}
