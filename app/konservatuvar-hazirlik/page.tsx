import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Konservatuvar Hazırlık | Müzik Yetenek Sınavı Hazırlık Programı',
    description: 'Ankara Eryaman konservatuvar hazırlık. Müzik yetenek sınavlarına sistemli, disiplinli ve akademik hazırlık. Solfej, duyum ve performans eğitimi.',
});

const pageData = {
    title: 'Eryaman Konservatuvar Hazırlık | Müzik Yetenek Sınavı Hazırlık Programı – Zeynep Öğretmen',
    slug: '/konservatuvar-hazirlik',
    description: 'Ankara Eryaman’da birebir konservatuvar hazırlık. Yetenek sınavlarına yönelik sistemli, disiplinli ve sınav formatına uygun akademik eğitim.',
    longDescription: 'Eryaman konservatuvar hazırlık süreci, yalnızca enstrüman çalabilmekten ibaret değildir. Konservatuvar ve müzik fakültesi sınavları; teknik yeterlilik, kulak eğitimi, solfej, ritim, teori ve performans bütünlüğünü birlikte değerlendirir. Ankara Eryaman’da birebir konservatuvar hazırlık programı ile öğrencileri sistemli, disiplinli ve sınav formatına uygun bir çalışma sürecine dahil ediyorum. Hedef yalnızca sınavı geçmek değil, sağlam bir müzikal altyapı oluşturmaktır.',
    audiences: [
        'Müzik kariyeri hedefleyen öğrenciler',
        'Güzel Sanatlar Lisesi mezunları',
        'Üniversite müzik bölümü hedefleyenler',
        'Yetenek sınavına hazırlanan gençler'
    ],
    featuresTitle: 'Konservatuvar Sınavında Neler Değerlendirilir?',
    featuresDescription: 'Konservatuvar ve müzik bölümü giriş sınavlarında genellikle şu alanlar ölçülür:',
    features: [
        'Solfej (nota okuma) ve Teori',
        'Duyum (kulak eğitimi)',
        'Ritim tekrar',
        'Aralık ve tonalite algısı',
        'Enstrüman performansı'
    ],
    programTitle: 'Hazırlık Süreci Nasıl İlerliyor?',
    program: [
        { title: 'Seviye Analizi ve Hedef Belirleme', desc: 'Mevcut enstrüman seviyesi, nota bilgisi, kulak algısı ve ritim disiplini tespit edilir. Hedef okul netleştirilir.' },
        { title: 'Solfej ve Duyum Eğitimi', desc: 'Aralık okuma, ton geçişleri, iki sesli çalışmalar ve deşifre çalışmaları. Sınavın temelini oluşturur.' },
        { title: 'Teknik Enstrüman Çalışmaları', desc: 'Bölüme göre piyano teknik etütleri, gitar arpej çalışmaları veya yan flüt ton kontrolü üzerine yoğunlaşılır.' },
        { title: 'Müzik Teorisi ve Armoni', desc: 'Tonalite, majör-minör yapı, akor dizilimleri ve temel armoni bilgisi.' },
        { title: 'Performans ve Sahne Hazırlığı', desc: 'Sınav provası, sahne duruşu, eser yorumlama ve psikolojik hazırlık çalışmaları.' }
    ],
    faqs: [
        { question: 'Konservatuvar sınavı zor mu?', answer: 'Hazırlıksız girildiğinde zor olabilir. Sistemli çalışmayla başarı ihtimali artar.' },
        { question: 'Nota bilmiyorum, yine de hazırlanabilir miyim?', answer: 'Evet. Program sıfırdan başlayacak şekilde planlanabilir.' },
        { question: 'Haftada kaç ders gerekir?', answer: 'Genellikle haftada 1–2 ders önerilir.' },
        { question: 'Evde çalışma süresi ne olmalı?', answer: 'Günde minimum 30–60 dakika düzenli tekrar önerilir.' },
        { question: 'Sadece enstrüman çalışmak yeterli mi?', answer: 'Hayır. Solfej ve duyum eğitimi şarttır.' },
        { question: 'Şan zorunlu mu?', answer: 'Bölüme göre değişir.' },
        { question: 'Sınav provası yapılıyor mu?', answer: 'Evet. Deneme formatında prova yapılır.' }
    ],
    sidebarImage: '/konservatuvar-hazirlik.jpg',
    extraContent: [
        {
            title: 'Eryaman’da Birebir Konservatuvar Hazırlık Neden Önemli?',
            description: 'Grup kurslarında ilerleme hızı ortalama seviyeye göre belirlenir. Ancak konservatuvar hedefleyen bir öğrencinin teknik eksikleri, kulak gelişim seviyesi, nota okuma hızı ve sahne özgüveni farklıdır. Birebir programda bu eksikler tek tek analiz edilir ve kişiye özel çalışma planı oluşturulur.'
        },
        {
            title: 'Hangi Okullara Hazırlık Yapılıyor?',
            items: [
                'Devlet konservatuvarları',
                'Üniversitelerin müzik öğretmenliği bölümleri',
                'Güzel Sanatlar Fakülteleri',
                'Bilkent Yarı Zamanlı Konservatuvar',
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi'
            ]
        },
        {
            title: 'Konservatuvar Hazırlık Kaç Ay Sürer?',
            description: 'Öğrencinin mevcut seviyesine bağlı olarak 6 ay (yoğunlaştırılmış), 9–12 ay (standart) veya 1–2 yıl (sıfırdan başlayanlar) şeklinde planlanabilir.'
        },
        {
            title: 'Neden Zeynep Öğretmen ile Konservatuvar Hazırlık?',
            items: [
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                'Yan flüt üzerine uzmanlık',
                '7 yıllık enstrüman eğitimi deneyimi',
                '3 yıllık aktif öğretmenlik',
                'Hazırlık öğrencilerinde yüksek başarı oranı',
                'Bireysel program yaklaşımı',
                'Sistemli ve disiplinli çalışma modeli'
            ]
        },
        {
            title: 'Eryaman Konservatuvar Hazırlık ile Sistemli İlerleyin',
            description: 'Konservatuvar hedefi ciddi bir disiplini gerektirir. Doğru teknik, güçlü kulak, sağlam teori bilgisi ve performans hazırlığı birlikte ilerlediğinde başarı şansı artar. Eryaman’da birebir konservatuvar hazırlık programı ile teknik gelişiminiz hızlanır, sınav özgüveniniz artar ve akademik hedefinize sistemli şekilde ilerlersiniz.'
        }
    ]
};

export default function ConservatoryPage() {
    return <LessonPageTemplate {...pageData} />;
}
