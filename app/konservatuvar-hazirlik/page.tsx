import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Konservatuvar Hazırlık Kursu Eryaman | Yetenek Sınavları',
    description: 'Ankara Eryaman konservatuvar hazırlık. Hacettepe, Bilkent ve diğer konservatuvarların yetenek sınavlarına yönelik yoğun kulak ve solfej eğitimi.',
});

const pageData = {
    title: 'Konservatuvar Hazırlık',
    slug: '/konservatuvar-hazirlik',
    description: 'Hayallerinizdeki konservatuvarın kapılarını profesyonel hazırlıkla açın.',
    longDescription: 'Konservatuvar (Ortaokul, Lise ve Lisans düzeyi) sınavları oldukça seçicidir. Hacettepe Üniversitesi Ankara Devlet Konservatuvarı veya Bilkent Müzik Hazırlık gibi prestijli okullara yönelik, her kurumun kendi sınav sistemine özel yoğunlaştırılmış bir program hazırlıyorum.',
    audiences: [
        'Konservatuvar ortaokul/lise giriş sınavı adayları',
        'Üniversite düzeyinde konservatuvar/beşeri bilimler hedefleyenler',
        'Yurt dışı müzik okullarına başvuru yapacak öğrenciler'
    ],
    features: [
        'Yoğun duyum (Dikte - Solfej) programı',
        'Enstrüman sınavı repertuvar hazırlığı',
        'Teorik müzik bilgisi ve armoniye giriş',
        'Müzik tarihi ve genel kültür bilgilendirmesi',
        'Geçmiş yılların sınav soruları simülasyonu',
        'Performans koçluğu ve sahne duruşu'
    ],
    program: [
        { title: 'Durum Tespiti', desc: 'Hedeflenen okula göre öğrencinin mevcut seviyesini ve enstrüman kapasitesini analiz ediyorum.' },
        { title: 'Teknik Derinleşme', desc: 'Duyum ve solfej yeteneklerini her akşam düzenli ödevlerle en üst seviyeye çıkarıyorum.' },
        { title: 'Eser Yorumlama', desc: 'Sınav jürisi önünde çalınacak eserlerin teknik kusursuzluğu ve müzikalitesi üzerine çalışıyorum.' },
        { title: 'Genel Prova', desc: 'Dış gözlemciler eşliğinde yapılan deneme sınavlarıyla öğrenciyi pskolojik ve teknik olarak hazırlıyorum.' }
    ],
    faqs: [
        { question: 'Hangi konservatuvarlar için hazırlık veriyorsunuz?', answer: 'Ankara Devlet Konservatuvarı, Bilkent Müzik Hazırlık ve Ankara Müzik ve Güzel Sanatlar Üniversitesi başta olmak üzere tüm kurumlar için hazırlık yapıyorum.' },
        { question: 'Dersler ne kadar süreyle yapılır?', answer: 'Genellikle haftalık 2 veya 3 ders saati (Enstrüman + Solfej) önerilir.' },
        { question: 'Mezuniyet sonrası başarı garantili mi?', answer: 'Öğrencinin düzenli çalışması ve eğitmen yönlendirmesiyle başarı oranımız oldukça yüksektir.' }
    ]
};

export default function ConservatoryPage() {
    return <LessonPageTemplate {...pageData} />;
}
