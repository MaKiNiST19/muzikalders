import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Solfej Dersi | Duyum, Bona ve Müzik Teorisi Eğitimi – Zeynep Öğretmen',
    description: 'Ankara Eryaman’da birebir solfej, duyum ve bona dersleri. Müzik okuryazarlığı, ritim algısı ve işitsel eğitim ile sağlam bir müzikal altyapı edinin.',
});

const pageData = {
    title: 'Solfej / Duyum / Bona',
    slug: '/eryaman-solfej-duyum-bona',
    description: 'Müziğin alfabesini öğrenin. Ankara Eryaman solfej, dikte, duyum ve bona dersleri. Sınavlara hazırlık ve temel müzik eğitimi.',
    longDescription: 'Eryaman solfej dersi arıyorsanız, yalnızca nota okumayı değil; müziği anlamayı, duymayı ve bilinçli şekilde icra etmeyi öğrenmek istiyorsunuz demektir. Solfej eğitimi, enstrüman çalan ya da şan eğitimi alan herkes için temel yapı taşlarından biridir. Ankara Eryaman’da birebir solfej, duyum ve bona dersleri vererek öğrencilerime sağlam bir müzikal altyapı kazandırıyorum. Bu dersler, hem hobi amaçlı öğrenciler hem de sınav hazırlık sürecindeki gençler için büyük fark yaratır.',
    audiences: [
        'Enstrüman eğitimini teorik bilgilerle desteklemek isteyenler',
        'Konservatuvar ve BİLSEM müzik hazırlık öğrencileri',
        'Müzik öğretmenliği adayları',
        'Koro ve topluluklarda yer alan amatör müzisyenler'
    ],
    featuresTitle: 'Solfej Nedir ve Neden Önemlidir?',
    featuresDescription: 'Solfej, notaların doğru perde ve ritimde seslendirilmesidir. Ancak bundan daha fazlasıdır:',
    features: [
        'Nota okuma becerisi',
        'Ritim algısı',
        'Aralık duyma',
        'Ton kontrolü',
        'Müzikal hafıza gelişimi'
    ],
    programTitle: 'Ders Süreci Nasıl İlerliyor?',
    program: [
        { title: 'Seviye Tespiti', desc: 'Öğrencinin mevcut nota bilgisi ve ritim seviyesi belirlenir.' },
        { title: 'Temel Okuma', desc: 'Anahtar bilgisi, ölçü, nota değerleri.' },
        { title: 'Aralık ve Ton Çalışmaları', desc: 'Majör, minör, temel aralık algısı.' },
        { title: 'Ritim Disiplini', desc: 'Metronom eşliğinde bona.' },
        { title: 'İleri Seviye', desc: 'İki sesli, modülasyon, tonalite değişimi.' }
    ],
    faqs: [
        { question: 'Solfej zor mu?', answer: 'Düzenli ve sistemli çalışıldığında zor değildir. Başlangıçta sabır gerektirir.' },
        { question: 'Nota bilmiyorum, başlayabilir miyim?', answer: 'Evet. Sıfırdan başlanabilir.' },
        { question: 'Sınav için ne kadar sürede hazırlanırım?', answer: 'Hedefe göre 6–12 ay arası planlanabilir.' },
        { question: 'Enstrüman çalıyorum, yine de solfej gerekli mi?', answer: 'Evet. İlerlemenizi hızlandırır ve eseri çözümlemenizi kolaylaştırır.' },
        { question: 'Duyum geliştirilebilir mi?', answer: 'Kesinlikle. Sistemli kulak egzersizleri ile gelişir.' },
        { question: 'Haftada kaç ders önerilir?', answer: 'Genellikle haftada 1 ders yeterlidir.' }
    ],
    sidebarImage: '/solfej-ozel-ders-eryaman.jpg',
    extraContent: [
        {
            title: 'Duyum (Kulak Eğitimi) Nedir?',
            description: 'Duyum çalışmaları, müziği duyarak anlayabilme becerisini geliştirir. Bu süreçte aralık tanıma, akor duyma, melodi tekrar etme ve ton merkezi algılama çalışılır. Şan ve enstrüman öğrencileri için duyum gelişimi kritik öneme sahiptir. Özellikle Şan Dersi ve Piyano Dersi alan öğrenciler için duyum eğitimi büyük katkı sağlar.'
        },
        {
            title: 'Bona Nedir?',
            description: 'Bona, ritim odaklı okuma çalışmasıdır. Nota isimleri yerine ritim değerleri seslendirilir. Bona çalışmaları ritim doğruluğu, tempo disiplini ve ölçü farkındalığı geliştirir. Bu özellikle gitar ve piyano öğrencileri için teknik ilerlemede hız kazandırır. Gitar Dersi alan öğrenciler için bona desteği oldukça faydalıdır.'
        },
        {
            title: 'Solfej Dersi Kimler İçin Uygundur?',
            description: '🎓 Sınav Hazırlık Öğrencileri: Güzel Sanatlar Liseleri, Bilsem müzik bölümleri, Konservatuvar sınavları ve Müzik öğretmenliği bölümleri için solfej zorunlu bir altyapıdır. Hazırlık sürecinde aralık okuma, deşifre, iki sesli çalışmalar ve ton geçişleri planlı şekilde ilerler.\n\n🎶 Enstrüman Öğrencileri: Enstrüman çalan öğrenciler için solfej nota bağımlılığını azaltır, hızlı öğrenme sağlar ve eser çözümlemeyi kolaylaştırır. Özellikle piyano ve yan flüt öğrencileri için önemlidir.\n\n🎤 Şan Öğrencileri: Şan dersinde entonasyon hatalarının düzelmesi için solfej çalışmaları büyük destek sağlar. Duyum gelişimi olmadan sağlıklı ses kontrolü mümkün değildir.'
        },
        {
            title: 'Eryaman’da Solfej Dersi Avantajı',
            description: 'Eryaman bölgesinde birebir solfej dersi almak, grup derslerine kıyasla daha hızlı ilerleme sağlar. Çünkü hatalar anında düzeltilir, aralık çalışmaları kişiye göre planlanır ve ritim zayıflıkları bireysel olarak çalışılır.'
        },
        {
            title: 'Neden Zeynep Öğretmen ile Solfej?',
            items: [
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                '12 yaşından beri müzikle iç içe',
                '%99 sınav hazırlık başarısı',
                'Bireysel program yaklaşımı',
                'Enstrüman ve şan ile entegre çalışma'
            ]
        },
        {
            title: 'Eryaman Solfej Dersi ile Müzikal Altyapınızı Güçlendirin',
            description: 'Solfej, müziğin matematiği ve dili gibidir. Bu altyapı olmadan teknik gelişim sınırlı kalabilir. Eryaman’da birebir solfej dersi ile nota okuma hızınız artar, ritim algınız güçlenir, duyum gelişir ve sınav süreciniz sağlamlaşır.'
        }
    ]
};

export default function SolfegePage() {
    return <LessonPageTemplate {...pageData} />;
}
