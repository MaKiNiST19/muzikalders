import { constructMetadata } from '@/lib/seo';
import LessonPageTemplate from '@/components/templates/LessonPage';

export const metadata = constructMetadata({
    title: 'Eryaman Şan Dersi | Ses Eğitimi ve Teknikleri',
    description: 'Ankara Eryaman şan dersi. Sesinizi doğru kullanmayı öğrenin, teknik ve performansınızı geliştirin. Birebir özel ses eğitimi.',
});

const pageData = {
    title: 'Eryaman Şan Dersi | Birebir Ses Eğitimi ve Nefes Teknikleri – Zeynep Öğretmen',
    slug: '/eryaman-san-dersi',
    description: 'Ankara Eryaman’da birebir şan dersi. Doğru nefes, diyafram kontrolü, entonasyon ve sahne özgüveni için kişiye özel ses eğitimi programları.',
    longDescription: 'Eryaman şan dersi arıyorsanız, yalnızca şarkı söylemeyi değil; doğru nefes kullanımı, diyafram kontrolü, entonasyon, rezonans ve sahne özgüveni gibi temel ses tekniklerini de geliştiren sistemli bir eğitim süreci önemlidir. Ankara Eryaman’da birebir şan dersi veren Zeynep Öğretmen olarak, her seviyeden öğrenciyle kişiye özel planlama ile çalışıyorum. Şan eğitimi yalnızca sesi yükseltmek değildir. Ses bir enstrümandır ve doğru teknikle kullanıldığında hem sağlıklı hem güçlü bir hale gelir. Yanlış teknik ise ses yorgunluğu ve hasara neden olabilir. Bu nedenle derslerimde öncelik her zaman sağlıklı ses kullanımıdır.',
    audiences: [
        'Şarkı söylemeyi seven her yaş grubu',
        'Konservatuvar ve Güzel Sanatlar sınavlarına hazırlananlar',
        'Sesini profesyonel kullanmak isteyenler (Öğretmen, Konuşmacı)',
        'Hobi amaçlı kendini geliştirmek isteyen yetişkinler'
    ],
    featuresTitle: 'Neden Eryaman’da Birebir Şan Dersi?',
    featuresDescription: 'Şan eğitimi grup ortamında verildiğinde kişisel ses yapısına yeterince odaklanılamaz. Her bireyin ses rengi, ses aralığı, nefes kapasitesi, artikülasyon yapısı ve ton kontrolü farklıdır. Bu nedenle Eryaman’da verdiğim şan dersleri bireyseldir.',
    features: [
        'Diyafram kontrolünün doğru oturtulması',
        'Ses açma egzersizlerinin kişiye göre belirlenmesi',
        'Entonasyon hatalarının hızlı düzeltilmesi',
        'Sahne özgüveni geliştirme',
        'Repertuarın ses aralığına uygun seçilmesi'
    ],
    programTitle: 'Ders Süreci Nasıl Planlanıyor?',
    program: [
        { title: 'İlk Görüşme', desc: 'Ses aralığı ve hedef belirleme.' },
        { title: 'Teknik Temel', desc: 'Nefes ve rezonans çalışmaları.' },
        { title: 'Ton ve Aralık', desc: 'Entonasyon ve kulak eğitimi çalışmaları.' },
        { title: 'Repertuar', desc: 'Seviyeye uygun eser seçimi ve çalışılması.' },
        { title: 'Performans', desc: 'Sahne özgüveni ve yorumlama teknikleri.' }
    ],
    faqs: [
        { question: 'Şan dersi için yaş sınırı var mı?', answer: 'Genellikle 12 yaş ve üzeri önerilir. Yetişkinler için üst sınır yoktur.' },
        { question: 'Sesim kötü, yine de şan dersi alabilir miyim?', answer: 'Evet. Doğru teknikle ses gelişir ve kontrol edilebilir hale gelir.' },
        { question: 'Haftada kaç ders önerilir?', answer: 'Başlangıç için haftada 1 ders yeterlidir.' },
        { question: 'Kaç ayda gelişim görülür?', answer: 'Düzenli çalışmayla 2–3 ay içinde kontrol artışı hissedilir.' },
        { question: 'Sınav hazırlığı ne kadar sürer?', answer: 'Hedefe göre 6–12 ay planlanabilir.' },
        { question: 'Dersler grup mu?', answer: 'Bireysel ya da maksimum 2 kişilik mini çalışma şeklinde yapılmaktadır.' },
        { question: 'Evde nasıl çalışmalıyım?', answer: 'Verilen egzersizler günlük kısa tekrarlarla yapılmalıdır.' }
    ],
    sidebarImage: '/san-ozel-ders-eryaman.jpg',
    extraContent: [
        {
            title: 'Şan Dersinde Neler Çalışıyoruz?',
            description: '1️⃣ Nefes ve Diyafram Tekniği: Sesin temeli nefes kontrolüdür. Diyafram farkındalığı, nefes alma–verme dengesi ve destekli ses üretimi çalışılır.\n\n2️⃣ Ses Açma Egzersizleri: Her derste kontrollü ısınma (Lip trill, Humming) yapılır. Bu egzersizler sesi yormadan güçlendirmeyi amaçlar.\n\n3️⃣ Entonasyon ve Ton Geliştirme: Doğru perdeyi tutabilmek için piyano eşliğinde aralık çalışmaları ve kulak eğitimi yapılır.\n\n4️⃣ Repertuar Çalışması: Öğrencinin hedefine göre Popüler müzik, Türk sanat müziği, Müzikal veya Klasik eserler seçilir.'
        },
        {
            title: 'Kimler İçin Şan Dersi Uygundur?',
            description: '🎤 Hobi Amaçlı Öğrenciler: Şarkı söylemeyi seven yetişkinler için şan dersi fark yaratır. Ses kontrolü artar, nefes kapasitesi gelişir ve güven yükselir.\n\n🎓 Güzel Sanatlar ve Konservatuvar Hazırlık: Yetenek sınavlarında teknik doğruluk, performans hazırlığı ve sahne duruşu kritik öneme sahiptir.'
        },
        {
            title: 'Ses Sağlığı Neden Önemlidir?',
            description: 'Yanlış teknikle şarkı söylemek ses tellerinde zorlanma, kısıklık ve çabuk yorulma gibi sorunlara yol açabilir. Şan derslerimde kontrollü ilerleme, ses aralığına uygun çalışma ve aşamalı güçlendirme ilkesi uygulanır.'
        },
        {
            title: 'Çocuklar İçin Şan Dersi Var mı?',
            description: 'Çocuk öğrencilerde ses gelişimi henüz tamamlanmadığı için şan dersleri daha dikkatli planlanır. Genellikle temel ritim ve doğru nefes alışkanlığı üzerine çalışılır. Çocuklar için alternatif olarak Piyano Dersi veya Gitar Dersi daha uygun başlangıç olabilir.'
        },
        {
            title: 'Neden Zeynep Öğretmen ile Şan Dersi?',
            items: [
                'Ankara Müzik ve Güzel Sanatlar Üniversitesi mezunu',
                '3 yıldır aktif öğretmenlik tecrübesi',
                '7 yıldır enstrüman eğitimi',
                '%99 hazırlık başarısı',
                'Bireysel program yaklaşımı',
                'Suzuki temelli sistemli ilerleme',
                '6–58 yaş arası öğrencilerle tecrübe'
            ]
        },
        {
            title: 'Eryaman’da Şan Dersi Almak',
            description: 'Eryaman şan dersi arayışındaysanız, sesi doğru teknikle ve sağlıklı biçimde geliştirmek uzun vadede en önemli yatırımdır. Şan; hobi, akademik hedef veya sahne kariyerinin başlangıcı olabilir. Doğru nefes, doğru teknik ve disiplinli çalışma ile ses potansiyeliniz ortaya çıkar.'
        }
    ]
};

export default function VocalPage() {
    return <LessonPageTemplate {...pageData} />;
}
