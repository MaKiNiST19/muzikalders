import { Quote } from 'lucide-react';

export interface TestimonialItem {
    id: number;
    name: string;
    role: string;
    comment: string;
    rating: number;
}

const realTestimonials: TestimonialItem[] = [
    {
        id: 1,
        name: 'Elif Zehra 7-8 yaş velisi Yasemin hanım',
        role: 'Veli',
        comment: 'Yaklasik bir bucuk yildir Zeynep Hocadan piyano dersi aliyoruz. Kendisine cok yetkin ve alaninda cok iyi bir ogretmen. Ayni zamanda ogrencileriyle cok guzel iletisim kuruyor. Ayrica derslerde sadece piyano eserleri ogretmekle kalmiyor muzik teorisi egitimi de vererek ogrencinin teknik bilgisini de gelistiriyor. Bu yonuyle de piyadadaki diger hocalardan ayrisiyor. Kendisine cok tesekkur ediyoruz.',
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
        comment: 'Zeynep Hocam ilk okul çağındaki çocuklarınızın gitar ya da piyanoya başlaması aşamasında karşınıza çıkacak en doğru öğretmendir diyebilirim. Malumunuz, çocuklar çabuk sıkılırlar..(Benim kızımın olimpiyat madalyası var bu konuda😅) Zeynep Hocam derslerde ( ki çok kez şahit oldum :) sıkılan öğrenciyi tekrar motive etmek için hep bir eğlence katar. Dersin her dk\'sı verimli geçsin ister. Ayrıca derste miniklere hayata dair bir anne bir abla gibi hayata dair tavsiyelerde de bulunur ki...inanın enstrüman dersi kadar değerlidir. Zeynep Hocamla tanışınca miniğinizi emanet edecek en doğru yerde olduğunuzu  anlarsınız🙏🏻 Not: Based on a true story 😄',
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
        comment: 'Piyano için geç kaldığımı düşünmüştüm Zeynep hocanın ders verme anlayışı beni korkularımdan uzaklaştırdı ve şuan piyanoya aşık olduğumu rahatlıkla söyleyebilirim gözü kapalı herkese rahatlıkla önerebileceğim müthiş bi öğretmendir.',
        rating: 5
    },
    {
        id: 7,
        name: 'Elif 11-12 yaş velisi Hatice hanım',
        role: 'Veli',
        comment: 'Zeynep Hanım ile internet üzerinden bir ilanı vasıtasıyla tanıştık. Daha ilk dersten sıcaklığı ve samimiyeti kızımın motivasyonunu artırdı. İşindeki ustalığı da göz dolduruyordu. Zamanla ailemizden biri gibi oldu. Derslerin çok keyifli geçtiğini görüyordum. Kızımdaki ilerleme de bizi çok mutlu etti. Kendisi hem bir abla hem de harika bir müzik öğretmeni oldu kızıma. Teşekkür ediyoruz.',
        rating: 5
    },
    {
        id: 8,
        name: 'Nihan Hanım 35 yaş öğrenci',
        role: 'Öğrenci',
        comment: 'Zeynep hocam çok tatlı ve anlayışlı,  yaş olarak  biraz geç kaldım ve artık benden olmaz derken bile bana inandı, şimdi piyano çalmaya başladım. Bir çocukluk hayalimi gerçekleştirdim Zeynep hocam sayesinde.Özverili anlatılışı ve sabrı  için ayrıca teşekkür ediyorum.🥰🌺',
        rating: 5
    },
    {
        id: 9,
        name: 'Sudenur 18-19 yaş öğrenci',
        role: 'Öğrenci',
        comment: 'Zeynep hocayla 16 yaşımda tanıştım. Yetenek sınavına hazırlanma sürecimde kendisiyle birlikte çalışma fırsatı buldum. Bu süreçte bana yalnızca teknik anlamda değil; müzik teorisi, çalgı çalışması ve sınav psikolojisi açısından da büyük destek oldu. Alanındaki birikimi ve disiplinli yaklaşımı sayesinde sınava hem donanımlı hem de özgüvenli bir şekilde hazırlanmamı sağladı ve sınavı kazanmamda önemli bir rol oynadı. Kendisi, benim için sadece bir öğretmen değil; aynı zamanda bir abla gibi yanımda olan, motivasyonumu ve özgüvenimi geliştirmeme katkı sağlayan çok kıymetli bir rehber oldu.',
        rating: 5
    }
];

const placeholders: TestimonialItem[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 5,
    name: `Veli / Öğrenci ${i + 1}`,
    role: 'Veli',
    comment: 'Zeynep öğretmen ile tanıştığımızdan beri kızımızın müziğe ilgisi inanılmaz arttı. Piyano çalmayı çok seviyor ve ders günlerini iple çekiyor.',
    rating: 5,
}));

const defaultTestimonials = [...realTestimonials, ...placeholders];

interface TestimonialsProps {
    data?: TestimonialItem[];
}

export default function Testimonials({ data }: TestimonialsProps) {
    const items = data || defaultTestimonials;

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Mutlu Veliler & Öğrenciler</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Bana güvenen ve müziği benimle keşfeden yüzlerce ailenin deneyimleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((t) => (
                        <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                            <Quote className="h-8 w-8 text-indigo-100 mb-4" />
                            <p className="text-slate-600 mb-6 italic leading-relaxed text-sm">
                                "{t.comment}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                                    <div className="flex text-amber-400 text-xs">
                                        {'★'.repeat(t.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
