import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Yan Flüt Dersi | Profesyonel Flüt Eğitimi',
    description: 'Ankara Eryaman bölgesinde konservatuvar mezunu Zeynep Öğretmen\'den her yaşa uygun birebir yan flüt dersleri. Nefes ve teknik çalışmaları.',
});

const pageData = {
    title: 'Yan Flüt Dersi',
    slug: '/eryaman-yan-flut-dersi',
    description: 'Zarif bir tını ve profesyonel teknikle flüt dünyasına adım atın.',
    longDescription: 'Yan flüt, etkileyici tonu ve geniş repertuvarıyla müzik tarihinin en zarif enstrümanlarından biridir. Ankara Müzik ve Güzel Sanatlar Üniversitesi Yan Flüt bölümü mezunu eğitmenimiz eşliğinde, doğru nefes tekniği ve müzikal ifade ile flüt çalmayı öğrenin.',
    audiences: [
        '9 yaş ve üzeri çocuklar (Fiziksel gelişime göre)',
        'Gençler ve yetişkin hobi grupları',
        'Konservatuvar yetenek sınavlarına hazırlananlar',
        'Orkestra veya bando hazırlığı yapanlar'
    ],
    features: [
        'Diyafram nefesi ve doğru duruş teknikleri',
        'Embouchure (Dudak pozisyonu) ve ses üretimi',
        'Nota bilgisi ve temel solfej eğitimi',
        'Klasik ve popüler repertuvar çalışmaları',
        'Etütler ve teknik parmak çalışmaları',
        'Deşifre (İlk bakışta okuma) geliştirme'
    ],
    program: [
        { title: 'Nefes ve Ses Üretimi', desc: 'Flütte en önemli adım olan nefes kontrolü ve temiz ses çıkarma üzerine yoğunlaşıyorum.' },
        { title: 'Temel Parmak Pozisyonları', desc: 'Basit gamlar ve ilk notalarla enstrüman üzerindeki hakimiyetinizi artırıyorum.' },
        { title: 'Melodik Çalışmalar', desc: 'Kısa ve keyifli parçalarla müzikal ifade yeteneğinizi geliştiriyorum.' },
        { title: 'İleri Teknik ve Repertuvar', desc: 'Konçertolar, sonatlar ve modern parçalarla profesyonel seviyeye ilerliyorum.' }
    ],
    faqs: [
        { question: 'Yan flüt çalmak için akciğer kapasitesi çok mu önemli?', answer: 'Normal bir sağlık durumuna sahip herkes flüt çalabilir. Önemli olan akciğer kapasitesi değil, nefesi ekonomik ve doğru kullanma tekniğidir (Diyafram nefesi).' },
        { question: 'Hangi marka flüt almalıyım?', answer: 'Başlangıç seviyesinde Yamaha, Pearl veya Trevor James gibi markaların giriş modelleri önerilir. Almadan önce mutlaka bana danışmanızı tavsiye ederim.' },
        { question: 'Diş telleri flüt çalmaya engel mi?', answer: 'Hayır, diş teli kullanan birçok flüt öğrencimiz mevcuttur. Sadece başlangıçta alışma süreci gerekebilir.' }
    ]
};

export default function FlutePage() {
    return <LessonPageTemplate {...pageData} />;
}
