import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Müzik Öğretmenliği Hazırlık | Yetenek Sınavına Sistemli Hazırlık',
    description: 'Ankara Eryaman müzik öğretmenliği hazırlık. Yetenek sınavlarına yönelik solfej, duyum, şan ve enstrüman eğitimi. Akademik ve sistemli hazırlık programı.',
});

const pageData = {
    title: 'Eryaman Müzik Öğretmenliği Hazırlık | Yetenek Sınavına Sistemli Hazırlık – Zeynep Öğretmen',
    slug: '/muzik-ogretmenligi-hazirlik',
    description: 'Ankara Eryaman’da birebir müzik öğretmenliği hazırlık. Sınav formatına uygun, akademik ve sistemli çalışma ile hedefinize ulaşın.',
    longDescription: 'Eryaman müzik öğretmenliği hazırlık süreci, yalnızca enstrüman çalabilmekten ibaret değildir. Müzik öğretmenliği bölümlerinin yetenek sınavları; solfej, duyum, ritim, teori, enstrüman performansı ve çoğu zaman şan yeterliliğini birlikte değerlendirir. Bu nedenle hazırlık programı çok yönlü ve disiplinli planlanmalıdır. Ankara Eryaman’da birebir müzik öğretmenliği hazırlık dersleri ile öğrencileri sınav formatına uygun, akademik ve sistemli bir çalışma sürecine dahil ediyorum. Amaç yalnızca sınavı kazanmak değil; güçlü bir müzikal ve pedagojik altyapı oluşturmaktır.',
    audiences: [
        'Müzik öğretmeni olmak isteyen öğrenciler',
        'Güzel Sanatlar Lisesi mezunları',
        'Konservatuvar hedefleyen fakat pedagojik bölümü tercih eden adaylar',
        'Üniversite müzik bölümlerine hazırlanmak isteyen gençler'
    ],
    featuresTitle: 'Müzik Öğretmenliği Yetenek Sınavında Neler Ölçülür?',
    featuresDescription: 'Üniversitelerin müzik öğretmenliği bölümlerinde genellikle şu alanlar değerlendirilir:',
    features: [
        'Solfej (nota okuma ve deşifre)',
        'Duyum (aralık ve tonalite algısı)',
        'Ritim tekrar ve bona',
        'Enstrüman performansı',
        'Şan veya ses kontrolü',
        'Temel müzik teorisi ve armoni',
        'Müzikal hafıza'
    ],
    programTitle: 'Hazırlık Süreci Nasıl Planlanır?',
    program: [
        { title: 'Seviye Analizi ve Hedef Okul Belirleme', desc: 'Öğrencinin mevcut seviyesi ölçülür. Hedef üniversite ve bölüm netleştirilir.' },
        { title: 'Solfej ve Duyum Çalışmaları', desc: 'Deşifre, aralık okuma, iki sesli çalışmalar ve ton değişimi. Sınavın temelidir.' },
        { title: 'Enstrüman Performansı', desc: 'Seçilen enstrümana (Piyano, Gitar, Yan Flüt vb.) göre teknik etütler, gam ve repertuar çalışmaları.' },
        { title: 'Şan ve Ses Eğitimi', desc: 'Diyafram çalışmaları, entonasyon ve eser yorumlama üzerine planlı ilerleme.' },
        { title: 'Müzik Teorisi ve Armoni', desc: 'Tonalite, akor dizilimleri, modülasyon ve temel armoni analizi.' },
        { title: 'Performans ve Sınav Provası', desc: 'Deneme sınavları, sahne provası, eser sunumu ve zaman yönetimi çalışmaları.' }
    ],
    faqs: [
        { question: 'Müzik öğretmenliği sınavı zor mu?', answer: 'Hazırlıksız girildiğinde zor olabilir. Sistemli çalışmayla başarı oranı artar.' },
        { question: 'Kaç ay önceden başlanmalı?', answer: 'Genellikle 6–12 ay arası önerilir.' },
        { question: 'Sadece enstrüman yeterli mi?', answer: 'Hayır. Solfej, duyum ve teori şarttır.' },
        { question: 'Nota bilmiyorum, hazırlanabilir miyim?', answer: 'Evet. Program sıfırdan planlanabilir.' },
        { question: 'Haftada kaç ders gerekir?', answer: 'Genellikle haftada 1–2 ders önerilir.' },
        { question: 'Evde çalışma süresi ne olmalı?', answer: 'Günde minimum 45–60 dakika düzenli tekrar tavsiye edilir.' },
        { question: 'Sınav provası yapılıyor mu?', answer: 'Evet. Deneme formatında prova yapılır.' }
    ],
    sidebarImage: '/muzik-ogretmenligi-hazirlik.jpg',
    extraContent: [
        {
            title: 'Eryaman’da Birebir Hazırlık Neden Önemli?',
            description: 'Müzik öğretmenliği sınavı, ortalama bir kurs programıyla geçilecek bir süreç değildir. Her öğrencinin teknik seviyesi, nota okuma hızı, kulak gelişimi ve performans özgüveni farklıdır. Birebir hazırlıkta bu farklılıklar analiz edilir ve kişiye özel program hazırlanır. Hatalar anında düzeltilir, zayıf alanlar yoğunlaştırılır.'
        },
        {
            title: 'Müzik Öğretmenliği ile Konservatuvar Arasındaki Fark',
            description: 'Konservatuvar performans ağırlıklıyken, müzik öğretmenliği bölümleri pedagojik ve teorik altyapıyı da değerlendirir.'
        },
        {
            title: 'Neden Zeynep Öğretmen ile Hazırlık?',
            items: [
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                'Yan flüt uzmanlık alanı',
                '7 yıllık enstrüman eğitimi deneyimi',
                '3 yıllık aktif öğretmenlik',
                'Hazırlık öğrencilerinde %99 başarı oranı',
                'Bireysel ve sistemli program yaklaşımı'
            ]
        },
        {
            title: 'Eryaman Müzik Öğretmenliği Hazırlık ile Hedefinize Ulaşın',
            description: 'Müzik öğretmenliği hedefi; teknik bilgi, kulak gelişimi ve pedagojik farkındalığın birleşimini gerektirir. Doğru yönlendirme ve disiplinli program ile bu süreci güvenle ilerletebilirsiniz. Eryaman’da birebir müzik öğretmenliği hazırlık programı ile teknik seviyeniz yükselir, kulak gelişiminiz güçlenir, sınav özgüveniniz artar ve akademik hedefinize sistemli şekilde ilerlersiniz.'
        }
    ]
};

export default function MusicTeachingPage() {
    return <LessonPageTemplate {...pageData} />;
}
