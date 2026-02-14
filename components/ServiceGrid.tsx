import Link from 'next/link';
import Image from 'next/image';

const lessons = [
    {
        title: 'Piyano Dersi',
        slug: '/eryaman-piyano-dersi',
        description: 'Klasik, popüler ve caz repertubuarı ile her seviyeye uygun piyano eğitimi.',
        image: '/piyano.png'
    },
    {
        title: 'Gitar Dersi',
        slug: '/eryaman-gitar-dersi',
        description: 'Klasik gitar ve eşlik teknikleri, akor bilgisi ve solo çalım alıştırmaları.',
        image: '/gitar.png'
    },
    {
        title: 'Yan Flüt Dersi',
        slug: '/eryaman-yan-flut-dersi',
        description: 'Nefes teknikleri, ton geliştirme ve zengin repertuvar çalışmaları.',
        image: '/flut.png'
    },
    {
        title: 'Şan Dersi',
        slug: '/eryaman-san-dersi',
        description: 'Doğru nefes, ses kullanımı, entonasyon ve sahne performansı gelişimi.',
        image: '/san.png'
    },
    {
        title: 'Solfej Dersi',
        slug: '/eryaman-solfej-duyum-bona',
        description: 'Müziğin temeli: Nota okuma, ritim duygusu ve duyum gelişimi eğitimi.',
        image: '/solfej.png'
    },
    {
        title: 'Bilsem Müzik Hazırlık',
        slug: '/bilsem-muzik-hazirlik',
        description: 'Bilsem sınavı yetenek sınavlarına yönelik özel program ve kulak eğitimi.',
        image: '/bilsem.png'
    },
    {
        title: 'Konservatuvar Hazırlık',
        slug: '/konservatuvar-hazirlik',
        description: 'Güzel Sanatlar Liseleri ve Konservatuvarlara yönelik yoğun hazırlık.',
        image: '/konservatuvar.png'
    },
    {
        title: 'Müzik Öğretmenliği Hazırlık',
        slug: '/muzik-ogretmenligi-hazirlik',
        description: 'Eğitim Fakültesi Müzik Öğretmenliği bölümü yetenek sınavlarına hazırlık.',
        image: '/ogretmenlik.png'
    },
];

export default function ServiceGrid() {
    return (
        <section id="dersler" className="py-24 bg-white relative">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-rose-600 uppercase tracking-widest mb-3">EĞİTİM PROGRAMLARIMIZ</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display text-balance">
                        Hangi Enstrümanla <span className="text-indigo-600">Başlamak İstersin?</span>
                    </h3>
                    <p className="text-lg text-slate-600">
                        İster hobi amaçlı, ister akademik kariyer hedefiyle; size en uygun programı birlikte belirleyelim.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {lessons.map((lesson) => (
                        <div key={lesson.slug} className="relative w-full max-w-[420px] h-[260px] mx-auto group">
                            {/* Card Background SVG */}
                            <svg fill="none" viewBox="0 0 342 175" className="absolute inset-0 w-full h-[220px] drop-shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                                <path fill="url(#cardGradient)" d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z" />
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" y2={128} x2="354.142" y1={128} x1={0} id="cardGradient">
                                        <stop stopColor="#0B2B5B" />
                                        <stop stopColor="#1e3a8a" offset={1} />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Lesson Image (Cloud replacement) */}
                            <div className="absolute right-0 -top-12 w-44 h-44 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                                <Image
                                    src={lesson.image}
                                    alt={lesson.title}
                                    width={176}
                                    height={176}
                                    className="object-contain"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end h-[220px] pointer-events-none">
                                <div className="z-10 mb-4">
                                    <h4 className="text-xl font-bold text-white leading-tight">
                                        {lesson.title}
                                    </h4>
                                    <p className="text-[10px] text-indigo-100/80 mt-1 max-w-[180px] leading-tight line-clamp-2">
                                        {lesson.description}
                                    </p>
                                </div>
                                <div className="z-10 pointer-events-auto">
                                    <Link
                                        href={lesson.slug}
                                        aria-label={`${lesson.title} hakkında detaylı bilgi`}
                                        className="bubble-btn inline-block bg-rose-600 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-lg shadow-rose-950/20 active:scale-95 transition-transform"
                                        style={{ '--bubble-color': '#e11d48' } as React.CSSProperties}
                                    >
                                        Detaylı Bilgi
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
