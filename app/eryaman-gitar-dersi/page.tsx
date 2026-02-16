import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Gitar Dersi | Klasik, Akustik, Elektro Eğitimi',
    description: 'Ankara Eryaman bölgesinde, profesyonel gitar eğitmenlerinden her seviyeye uygun klasik, akustik ve elektro gitar dersleri.',
});

const pageData = {
    title: 'Eryaman Gitar Dersi | Birebir Özel Gitar Eğitimi – Zeynep Öğretmen',
    slug: '/eryaman-gitar-dersi',
    description: 'Ankara Eryaman’da birebir özel klasik, akustik ve elektro gitar dersleri. Her yaş ve seviyeye uygun, teknik ve müzikal gelişimi önemseyen kişiye özel programlar.',
    longDescription: 'Eryaman gitar dersi arayışındaysanız, hem teknik hem müzikal gelişimi önemseyen, kişiye özel planlama ile ilerleyen profesyonel bir eğitim süreci arıyor olabilirsiniz. Ankara Eryaman’da birebir özel gitar dersleri veriyor; klasik, akustik ve başlangıç seviyesinden ileri düzeye kadar her yaştan öğrenciyle çalışıyorum. Gitar öğrenmek yalnızca akor basmak değildir. Doğru teknik, el pozisyonu, ritim duygusu, müzikal ifade ve disiplinli çalışma alışkanlığıyla birlikte ilerlediğinde kalıcı olur.',
    audiences: [
        '6 yaş ve üzeri çocuklar (Oyun temelli Suzuki yaklaşımı)',
        'Güzel Sanatlar ve Konservatuvar hazırlık öğrencileri',
        'Yetişkin hobi öğrencileri (İş stresi ve keyifli repertuar)',
        'Grupla müzik yapmak isteyen gençler'
    ],
    featuresTitle: 'Neden Eryaman’da Birebir Gitar Dersi?',
    featuresDescription: 'Eryaman bölgesinde grup kursları yerine bireysel özel ders tercih edilmesinin en büyük nedeni, kişisel gelişim hızının farklı olmasıdır. Her öğrencinin öğrenme biçimi, motor kontrol seviyesi ve müzikal algısı farklıdır. Bu nedenle ders programı tamamen kişiye özel hazırlanır.',
    features: [
        'El ve bilek pozisyonu doğru şekilde oturtulur',
        'Akor geçişleri sistemli çalışılır',
        'Ritim ve metronom disiplini kazandırılır',
        'Nota okuma ve temel müzik teorisi entegre edilir',
        'Repertuar öğrencinin seviyesine göre oluşturulur',
        'Solfej / Duyum / Bona destekli çalışmaları'
    ],
    programTitle: 'Ders Programı Nasıl İlerliyor?',
    program: [
        { title: 'Seviye Analizi', desc: 'İlk derste mevcut bilgi, hedefler, ritim duygusu ve müzikal algı belirlenir.' },
        { title: 'Teknik Temel', desc: 'Doğru oturuş, gitar tutuşu ve el pozisyonu çalışmalarıyla sağlam bir başlangıç yapılır.' },
        { title: 'Ritim ve Akor Çalışmaları', desc: 'Metronom eşliğinde sistemli geçişler ve ritim varyasyonları çalışılır.' },
        { title: 'Nota ve Teori Entegrasyonu', desc: 'Sadece ezbere dayalı değil, temel müzik bilgisi ve nota okuma becerisi kazandırılır.' },
        { title: 'Repertuar', desc: 'Seviyeye uygun, motive edici eser seçimiyle performans hazırlığı yapılır.' }
    ],
    faqs: [
        { question: 'Klasik gitarla mı başlamalıyım?', answer: 'Genellikle evet. Naylon tellerin yumuşaklığı ve parmak adaptasyonu için klasik gitar önerilir. Ancak hedef repertuar ve motivasyona göre akustik gitarla da başlanabilir.' },
        { question: 'Gitarım yok, ne almalıyım?', answer: 'Başlangıç için orta segment bir klasik gitar yeterlidir. İlk derste boyunuza ve bütçenize uygun marka ve model konusunda detaylı yönlendirme yapıyorum.' },
        { question: 'Solak gitar gerekli mi?', answer: 'Çoğu solak öğrenci standart gitarla rahatlıkla öğrenebilir. Solak gitar almadan önce ders öncesi değerlendirme ile karar vermek en doğrusudur.' },
        { question: 'Haftada kaç ders önerilir?', answer: 'Başlangıç için haftada 1 ders ve düzenli bireysel çalışma idealdir. İleri seviye veya sınav hazırlığı için yoğunlaştırılmış program uygulanabilir.' },
        { question: 'Evde ne kadar çalışmalıyım?', answer: 'Günde minimum 15–20 dakika düzenli tekrar yeterlidir. Süreklilik, uzun süreli seyrek çalışmadan çok daha önemlidir.' },
        { question: 'Nota bilmek şart mı?', answer: 'Hayır, nota bilmek şart değildir. Ders süreci içinde nota okumayı ve teoriyi sistemli ve keyifli bir şekilde öğreniyoruz.' },
        { question: 'Kaç ayda şarkı çalabilirim?', answer: 'Düzenli çalışmayla 2–3 ay içinde temel düzeyde şarkılar çalmaya başlayabilirsiniz.' },
        { question: 'Online ders veriliyor mu?', answer: 'Şu an ağırlıklı olarak Eryaman’da yüz yüze bireysel dersler yapmaktayım.' },
        { question: 'Çocuklar için yaş sınırı var mı?', answer: 'Genellikle 6 yaş ve üzeri, okuma yazma veya sayısal algının başladığı dönem başlangıç için uygundur.' },
        { question: 'İleri seviye için repertuar çalışması yapılır mı?', answer: 'Evet, teknik gelişimle paralel olarak repertuar çalışmaları derinleştirilir ve performans odaklı ilerlenir.' }
    ],
    sidebarImage: '/gitar-ozel-ders-eryaman.jpg',
    extraContent: [
        {
            title: 'Hangi Gitar Türüyle Başlamalıyım?',
            description: 'En sık sorulan sorulardan biri budur: Klasik gitar mı, akustik gitar mı? Başlangıç seviyesinde genellikle klasik gitar önerilir. Bunun nedeni naylon tellerin daha yumuşak olması, parmak adaptasyonunun daha rahat gelişmesi ve temel tekniklerin daha kontrollü oturmasıdır. Ancak hedef repertuar ve öğrencinin motivasyonu da önemlidir. Pop, eşlik, akor odaklı çalışmak isteyen öğrenciler için akustik gitar tercih edilebilir. Ders öncesi yapılan kısa ön görüşmede bu konuda net bir yönlendirme yapılır.'
        },
        {
            title: 'Çocuklar İçin Gitar Dersi (6+ Yaş)',
            description: 'Eryaman’da çocuklar için gitar dersi verirken pedagojik yaklaşım önemlidir. Özellikle 6–12 yaş arası öğrencilerde dikkat süresi, el kas gelişimi, motivasyon ve oyun temelli öğrenme faktörleri göz önünde bulundurulur. Suzuki yaklaşımından esinlenen sistematik ilerleyişle çocuk öğrenciler ritim duygusu kazanır, enstrüman sevgisi geliştirir ve disiplinli çalışma alışkanlığı edinir.'
        },
        {
            title: 'Gençler ve Sınav Hazırlık Süreci',
            description: 'Güzel Sanatlar Liseleri, Bilsem, konservatuvar veya müzik öğretmenliği bölümlerine hazırlanan öğrenciler için gitar çalışması daha sistemli yürütülür.',
            items: [
                'Teknik etütler',
                'Arpej ve sağ el kontrolü',
                'Ritim varyasyonları',
                'Teori ve armoni temelleri',
                'Performans hazırlığı'
            ]
        },
        {
            title: 'Yetişkinler İçin Hobi Amaçlı Gitar',
            description: '“Hiç geç mi kaldım?” sorusu en çok yetişkin öğrencilerden gelir. Müziğin yaşı yoktur. 30, 40, hatta 50 yaşından sonra gitar öğrenen birçok öğrencim bulunmaktadır. Yetişkin derslerinde iş stresinden uzaklaşma, keyifli repertuar oluşturma, kendi temposunda ilerleme ve hedef şarkıları çalabilme ön plandadır. Burada teknik kadar motivasyon ve süreklilik önemlidir.'
        },
        {
            title: 'Dersler Nerede Yapılıyor?',
            description: 'Dersler Eryaman’da bireysel olarak yapılmaktadır. Genellikle Eryaman merkezli çalışmakla birlikte çevre ilçelerden gelen öğrenciler de bulunmaktadır.'
        },
        {
            title: 'Neden Zeynep Öğretmen?',
            items: [
                '12 yaşından beri müzikle ilgileniyor',
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                '7 yıldır gitar eğitimi veriyor',
                '20’ye yakın aktif özel öğrenci',
                '%99 hazırlık başarısı',
                'Suzuki yaklaşımı ve bireysel program sistemi'
            ]
        },
        {
            title: 'Sonuç: Eryaman’da Gitar Öğrenmek İstiyorsanız',
            description: 'Eryaman gitar dersi arıyorsanız, teknik ve müzikal gelişimi birlikte ele alan, bireysel programla ilerleyen bir eğitim süreciyle çalışmak büyük fark yaratır. Gitar bir hobi, bir sınav hazırlık aracı ya da hayat boyu sürecek bir tutku olabilir. Doğru başlangıç, doğru yönlendirme ve disiplinli çalışma ile bu süreç hem keyifli hem verimli olur.'
        }
    ],
    testimonials: [
        {
            id: 1,
            name: 'Duru 8-9 yaş velisi Umut Bey',
            role: 'Veli',
            comment: "Zeynep Hocam ilk okul çağındaki çocuklarınızın gitar ya da piyanoya başlaması aşamasında karşınıza çıkacak en doğru öğretmendir diyebilirim. Malumunuz, çocuklar çabuk sıkılırlar..(Benim kızımın olimpiyat madalyası var bu konuda😅) Zeynep Hocam derslerde ( ki çok kez şahit oldum :) sıkılan öğrenciyi tekrar motive etmek için hep bir eğlence katar. Dersin her dk'sı verimli geçsin ister. Ayrıca derste miniklere hayata dair bir anne bir abla gibi hayata dair tavsiyelerde de bulunur ki...inanın enstrüman dersi kadar değerlidir. Zeynep Hocamla tanışınca miniğinizi emanet edecek en doğru yerde olduğunuzu anlarsınız🙏🏻 Not: Based on a true story 😄",
            rating: 5
        },
        {
            id: 10,
            name: 'Enes Bey 30 yaş öğrenci',
            role: 'Öğrenci',
            comment: 'Merhabalar, yaşım 30 Zeynep hocayla armut uygulaması üzerinden tanıştım. Bu tanışmada kendisinin ilgilisi sayesinde gerçekleşti, başvurum üzerinden bana ulaşarak dönüş yaptı ve özverisi ile hızlıca derslerimize başladık. Alanın da yetkin ve her geçen gün üstüne koyduğuna şahit oluyorum, işini böyle severek yapan bir hocanın öğrenciside kendi üzerine düşen özveriyi göstermesi halinde ilerleme kaydetmesi kaçınılmaz. Teşekkür ederim hocam.🙏',
            rating: 5
        }
    ]
};

export default function GuitarPage() {
    return <LessonPageTemplate {...pageData} />;
}
