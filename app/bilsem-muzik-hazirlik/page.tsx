import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Bilsem Müzik Hazırlık Kursu Eryaman | Özel Yetenek Sınavı',
    description: 'Bilsem müzik alanı yetenek sınavlarına hazırlık. Eryaman bölgesinde uzman eğitmenlerle kulak, ritim ve müzikal hafıza eğitimi.',
});

const pageData = {
    title: 'Bilsem Müzik Hazırlık',
    slug: '/bilsem-muzik-hazirlik',
    description: 'Geleceğin dâhilerini BİLSEM sınavlarına profesyonelce hazırlıyorum.',
    longDescription: 'BİLSEM Müzik alanı sınavları, öğrencilerin müzikal potansiyelini (kulak, ritim, bellek) ölçen aşamalardan oluşur. Zeynep Öğretmen rehberliğinde, sınav formatına %100 uyumlu simülasyonlar ve kulak eğitimi ile öğrencinizin başarısını garantiliyorum.',
    audiences: [
        'BİLSEM müzik alanı adayları (1., 2. ve 3. sınıf öğrencileri)',
        'Üstün yetenekli çocukların keşfi ve yönlendirilmesi',
        'Akademik müzik eğitimine erken yaşta başlamak isteyenler'
    ],
    features: [
        'Tek ses, çift ses, üç ses ve dört ses duyum çalışmaları',
        'Melodik ve ritmik bellek (Hafıza) güçlendirme',
        'Ritmik tekrar ve vuruş doğruluğu çalışmaları',
        'Sınav simülasyonları ve teknik ipuçları',
        'Kaygı yönetimi ve sınav motivasyonu',
        'Bireysel yetenek analizi ve enstrüman yönlendirme'
    ],
    program: [
        { title: 'Yetenek Analizi', desc: 'Öğrencinin mevcut duyum seviyesini ölçüyor ve zayıf olduğu alanlara odaklanıyorum.' },
        { title: 'Yoğun Kulak Eğitimi', desc: 'Sınavın en kritik parçası olan çok sesli duyum üzerine her hafta sistemli çalışma.' },
        { title: 'Hafıza ve Ritim Tekrarı', desc: 'Duyulan melodiyi ve ritmi hatasız geri verme pratikleri yapıyorum.' },
        { title: 'Sınav Denemeleri', desc: 'Gerçek sınav ortamı yaratarak öğrencinin heyecanını yenmesini ve formatı ezberlemesini sağlıyorum.' }
    ],
    faqs: [
        { question: 'Sınava ne kadar süre kala başlanmalı?', answer: 'Genellikle en az 3-4 ay önceden başlamak kulak gelişiminin oturması için önemlidir.' },
        { question: 'Başarı oranınız nedir?', answer: 'Doğru metodoloji ile hazırlanan öğrencilerimde başarı oranım %95 ve üzeridir.' },
        { question: 'Sınav sadece duyum mu?', answer: 'İkinci aşama mülakattır; burada öğrencinin ritim, melodi ve genel müzikal yatkınlığı puanlanır.' }
    ]
};

export default function BilsemPage() {
    return <LessonPageTemplate {...pageData} />;
}
