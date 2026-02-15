import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Piyano Dersi | Birebir Özel Piyano Eğitimi',
    description: 'Ankara Eryaman bölgesinde, konservatuvar mezunu eğitmenlerden her yaşa ve seviyeye uygun özel piyano dersleri. Ücretsiz tanışma dersi ile başlayın.',
});

const pageData = {
    title: 'Eryaman Piyano Dersi | Birebir Özel Piyano Eğitimi – Zeynep Öğretmen',
    slug: '/eryaman-piyano-dersi',
    description: 'Ankara Eryaman’da birebir özel piyano dersleri. Çocuklar, gençler ve yetişkinler için teknik, müzikal ve sınav hazırlık odaklı kişiye özel eğitim.',
    longDescription: 'Eryaman piyano dersi arayışındaysanız, doğru teknik temelle, sistemli ilerleyen ve bireysel programa dayalı bir eğitim süreci sizin için en sağlıklı başlangıç olacaktır. Ankara Eryaman’da birebir özel piyano dersleri veren Zeynep Öğretmen olarak; çocuklardan yetişkinlere, hobi amaçlı öğrencilerden sınav hazırlık sürecindeki gençlere kadar her seviyede öğrenciyle çalışıyorum. Piyano öğrenmek yalnızca tuşlara basmak değildir. Doğru oturuş, el pozisyonu, kas kontrolü, nota okuma, ritim disiplini ve müzikal ifade birlikte gelişmelidir. Bu nedenle derslerimde hem teknik hem müzikal gelişimi dengeli şekilde ele alıyorum.',
    audiences: [
        '6 yaş ve üzeri çocuklar (Oyun temelli Suzuki yaklaşımı)',
        'Güzel Sanatlar ve Konservatuvar hazırlık öğrencileri',
        'Yetişkin hobi öğrencileri (Stresten uzaklaşma ve motivasyon)',
        'Bilsem ve Müzik Öğretmenliği sınavlarına hazırlananlar'
    ],
    featuresTitle: 'Neden Eryaman’da Birebir Piyano Dersi?',
    featuresDescription: 'Eryaman’da grup kursları yerine bireysel özel piyano dersi tercih edilmesinin en büyük avantajı kişisel ilerleme hızına göre planlama yapılabilmesidir. Her öğrencinin motor gelişimi, dikkat süresi, müzikal algısı, hedefi ve çalışma disiplini farklıdır. Bu yüzden ders programı standart değildir. Tamamen kişiye özel hazırlanır.',
    features: [
        'Doğru oturuş ve el pozisyonu',
        'Parmak egzersizleri ve teknik güçlendirme',
        'Teknik etütler (Czerny, Hanon vb.)',
        'Nota okuma ve deşifre',
        'Ritim çalışmaları',
        'Repertuar geliştirme'
    ],
    programTitle: 'Ders Süreci Nasıl İlerliyor?',
    program: [
        { title: 'Seviye Analizi', desc: 'İlk derste mevcut bilgi, ritim kulağı ve hedefler belirlenir.' },
        { title: 'Teknik Temel', desc: 'Doğru oturuş, bilek kontrolü ve parmak pozisyonu çalışmaları.' },
        { title: 'Ritim ve Nota', desc: 'Nota okuma ve metronom disiplini ile eş zamanlı ilerleme.' },
        { title: 'Etüt ve Gam', desc: 'Teknik gelişim için sistemli egzersizler ve gam çalışmaları.' },
        { title: 'Repertuar', desc: 'Seviyeye uygun, motive edici eser çalışmaları.' }
    ],
    faqs: [
        { question: 'Piyano için yaş sınırı var mı?', answer: 'Genellikle 6 yaş ve üzeri önerilir. Üst yaş sınırı yoktur, yetişkinler de her yaşta başlayabilir.' },
        { question: 'Evimde piyano yoksa ne yapmalıyım?', answer: 'Başlangıç için 61 veya 88 tuşlu, tuş hassasiyetli bir dijital piyano yeterlidir. İlk derste bütçenize uygun model önerisi yapıyorum.' },
        { question: 'Nota bilmek şart mı?', answer: 'Hayır. Ders süreci içinde notayı sistemli ve uygulamalı olarak öğreniyoruz.' },
        { question: 'Haftada kaç ders alınmalı?', answer: 'Başlangıç için haftada 1 ders idealdir. İleri seviye veya sınav hazırlığı için sıklık artırılabilir.' },
        { question: 'Günde ne kadar çalışmalıyım?', answer: 'Günde 15–30 dakika düzenli tekrar yeterlidir. Düzenli çalışma, uzun süreli seyrek çalışmadan daha verimlidir.' },
        { question: 'Kaç ayda bir eser çalabilirim?', answer: 'Düzenli çalışmayla 2–3 ay içinde temel düzeyde parçalar çalmaya başlayabilirsiniz.' },
        { question: 'Çocuklar için ders süresi ne kadar?', answer: 'Çocuklar için odak süresine göre genellikle 40–50 dakika olarak planlanmaktadır.' },
        { question: 'Online ders var mı?', answer: 'Ağırlıklı olarak Eryaman’da yüz yüze bireysel dersler yapmaktayım.' },
        { question: 'Sınav hazırlık programı ne kadar sürer?', answer: 'Öğrencinin seviyesine ve hedefine göre 6–12 ay veya daha uzun sürebilir.' },
        { question: 'Yazın dersler devam ediyor mu?', answer: 'Evet, yaz döneminde de ders programı devam etmektedir.' }
    ],
    sidebarImage: '/piyano-ozel-ders-eryaman.jpg',
    extraContent: [
        {
            title: 'Çocuklar İçin Piyano Dersi (6+ Yaş)',
            description: 'Eryaman’da çocuklar için piyano dersi verirken pedagojik yaklaşım çok önemlidir. 6 yaş ve üzeri çocuklarla çalışırken oyun temelli öğrenme, ritim duygusu geliştirme, kas kontrolü kazandırma ve nota algısını eğlenceli yöntemlerle öğretme öncelikli hedeflerdir. Suzuki yaklaşımından ilham alan sistemli çalışma modeli ile çocuk öğrenciler enstrümanla bağ kurar, düzenli çalışma alışkanlığı edinir ve sahne deneyimine hazırlanır.'
        },
        {
            title: 'Gençler ve Sınav Hazırlık (Güzel Sanatlar / Konservatuvar)',
            description: 'Piyano, sınav hazırlık sürecinde kritik bir enstrümandır. Özellikle Güzel Sanatlar Liseleri, Bilsem müzik bölümü, Konservatuvar sınavları ve Müzik öğretmenliği bölümleri için hazırlanan öğrencilerle daha yoğun ve disiplinli bir program uygulanır.',
            items: [
                'Teknik etütler (Czerny, Hanon vb.)',
                'Arpej ve gam çalışmaları',
                'Deşifre becerisi',
                'Teori ve armoni temeli',
                'Performans hazırlığı'
            ]
        },
        {
            title: 'Yetişkinler İçin Piyano Dersi',
            description: '“Piyano öğrenmek için geç mi kaldım?” sorusu yetişkin öğrencilerden sık gelir. Hayır, geç değil. 30, 40 hatta 50 yaş üstü öğrencilerimle çalışıyorum. Yetişkin derslerinde iş stresinden uzaklaşma, hedef şarkılar üzerinden motivasyon, nota bilgisi kazanma ve kendi temposunda ilerleme ön plandadır. Yetişkin öğrenciler genellikle düzenli çalışma disiplinine sahip oldukları için hızlı ilerleyebilirler.'
        },
        {
            title: 'Piyano Derslerinde Teori ve Solfej',
            description: 'Piyano eğitimi yalnızca çalma değildir. Sağlam bir müzikal altyapı için solfej, duyum çalışmaları, bona ve temel armoni entegre edilir.'
        },
        {
            title: 'Yaz Konserleri ve Sahne Deneyimi',
            description: 'Yaz aylarına doğru öğrenci yoğunluğuna bağlı olarak küçük konser organizasyonları yapılmaktadır. Bu etkinlikler sahne özgüveni kazandırır, performans deneyimi sağlar ve özellikle çocuk ve genç öğrenciler için motivasyonu artırır.'
        },
        {
            title: 'Neden Zeynep Öğretmen ile Piyano Dersi?',
            items: [
                '12 yaşından beri müzikle ilgileniyor',
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                '7 yıldır piyano eğitimi veriyor',
                '20’ye yakın aktif özel ders öğrencisi',
                '%99 hazırlık başarısı',
                'Suzuki yaklaşımı ve bireysel program sistemi',
                '6–58 yaş arası öğrencilerle tecrübe'
            ]
        },
        {
            title: 'Eryaman’da Piyano Öğrenmek',
            description: 'Eryaman piyano dersi arıyorsanız, teknik ve müzikal gelişimi birlikte ele alan bir sistemle ilerlemek kalıcı sonuç sağlar. Piyano; çocuklar için disiplin ve koordinasyon, gençler için akademik hazırlık, yetişkinler için zihinsel rahatlama ve ileri seviye öğrenciler için profesyonel gelişim anlamına gelebilir. Doğru yönlendirme, düzenli çalışma ve bireysel programla bu süreç hem verimli hem keyifli olur.'
        }
    ],
    testimonials: [
        {
            id: 1,
            name: 'Elif Zehra 7-8 yaş velisi Yasemin hanım',
            role: 'Veli',
            comment: 'Yaklasik bir bucuk yildir Zeynep Hocadan piyano dersi aliyoruz. Kendisi cok yetkin ve alaninda cok iyi bir ogretmen. Ayni zamanda ogrencileriyle cok guzel iletisim kuruyor. Ayrica derslerde sadece piyano eserleri ogretmekle kalmiyor muzik teorisi egitimi de vererek ogrencinin teknik bilgisini de gelistiriyor. Bu yonuyle de piyadadaki diger hocalardan ayrisiyor. Kendisine cok tesekkur ediyoruz.',
            rating: 5
        },
        {
            id: 2,
            name: 'Asya/ Arya 5-6 yaş velisi Sezgi hanım',
            role: 'Veli',
            comment: 'Zeynep öğretmenle ikiz kızlarımın piyano dersleri sayesinde tanıştık. Kızlarımın piyanoyu sevmesinin sebebidir. Çocuklarla pozitif iletişimi, canayakınlığı ve anlayışı için teşekkür ediyorum',
            rating: 5
        },
        {
            id: 3,
            name: 'Duru 8-9 yaş velisi Umut Bey',
            role: 'Veli',
            comment: "Zeynep Hocam ilk okul çağındaki çocuklarınızın gitar ya da piyanoya başlaması aşamasında karşınıza çıkacak en doğru öğretmendir diyebilirim. Malumunuz, çocuklar çabuk sıkılırlar..(Benim kızımın olimpiyat madalyası var bu konuda😅) Zeynep Hocam derslerde ( ki çok kez şahit oldum :) sıkılan öğrenciyi tekrar motive etmek için hep bir eğlence katar. Dersin her dk'sı verimli geçsin ister. Ayrıca derste miniklere hayata dair bir anne bir abla gibi hayata dair tavsiyelerde de bulunur ki...inanın enstrüman dersi kadar değerlidir. Zeynep Hocamla tanışınca miniğinizi emanet edecek en doğru yerde olduğunuzu anlarsınız🙏🏻 Not: Based on a true story 😄",
            rating: 5
        },
        {
            id: 4,
            name: 'Elif Neva 7-8 yaş velisi Serap hanım',
            role: 'Veli',
            comment: 'Piyano öğrenme konusunda isteksiz olan kızıma dersi eğlenceli hale getirerek öğrenme yolculuğunda eşlik eden Zeynep hocamıza teşekkür ediyorum.',
            rating: 5
        },
        {
            id: 5,
            name: 'Nursare 15-16 yaş öğrenci',
            role: 'Öğrenci',
            comment: 'Zeynep Hoca ile yaklaşık 6 aydır piyano dersi yapıyoruz ve bu süreçte sıfırdan başlayarak gerçekten güzel bir ilerleme kaydettik. Derslerde ezbere dayalı bir öğretim yerine, notaları, teknikleri ve püf noktalarını anlamamı sağlayan bir yöntem izliyor. Bu sayede sadece parçaları çalmakla kalmayıp, müziği gerçekten kavramayı adım adım öğreniyorum. Derslerde enerjik ve motive edici bir yaklaşımı var. Yumuşak bir üslubu olmasına rağmen disiplinli bir çalışma ortamı sağlıyor. Zorlandığım noktalarda sabırla yardımcı oluyor ve gerektiğinde kendisi bizzat göstererek konuyu daha iyi anlamamı sağlıyor. Beraber ders yaparken kendimi rahat hissediyorum. En önemlisi, piyanonun sadece tuşlara basmaktan ibaret olmadığını; müziğin duyguya ve ruha hitap eden bir yönü olduğunu bana öğretti. Bu nedenle kendisinden ders aldığım için çok memnunum. Teşekkürler Zeynep Hocam…',
            rating: 5
        },
        {
            id: 6,
            name: 'Batuhan bey 25-26 yaş öğrenci',
            role: 'Öğrenci',
            comment: 'Piyano için geç kaldığımı düşünmüştüm zeynep hocanın ders verme anlayışı beni korkularımdan uzaklaştırdı ve şuan piyanoya aşık olduğumu rahatlıkla söyleyebilirim gözü kapalı herkese rahatlıkla önerebileceğim müthiş bi öğretmendir',
            rating: 5
        },
        {
            id: 8,
            name: 'Nihan Hanım 35 yaş öğrenci',
            role: 'Öğrenci',
            comment: 'Zeynep hocam çok tatlı ve anlayışlı,  yaş olarak  biraz geç kaldım ve artık benden olmaz derken bile bana inandı, şimdi piyano çalmaya başladım. Bir çocukluk hayalimi gerçekleştirdim Zeynep hocam sayesinde.Özverili anlatılışı ve sabrı  için ayrıca teşekkür ediyorum.🥰🌺',
            rating: 5
        }
    ]
};

export default function PianoPage() {
    return <LessonPageTemplate {...pageData} />;
}
