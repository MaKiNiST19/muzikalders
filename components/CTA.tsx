import Link from 'next/link';

export default function CTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />
            <div className="absolute inset-0 bg-black/10" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
                    Müziğe Başlamak İçin Geç Kalmayın
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10 font-medium">
                    Ücretsiz tanışma dersime katılın, yeteneğinizi birlikte keşfedelim.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/iletisim"
                        className="bubble-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-indigo-600 bg-white shadow-xl active:scale-95 transition-transform"
                        style={{ '--bubble-color': '#ffffff' } as React.CSSProperties}
                    >
                        Randevu Oluştur
                    </Link>
                    <Link
                        href="https://wa.me/905373392701"
                        target="_blank"
                        className="bubble-btn inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-white/20 backdrop-blur-sm border border-white/50 shadow-lg active:scale-95 transition-transform"
                        style={{ '--bubble-color': 'rgba(255,255,255,0.4)' } as React.CSSProperties}
                    >
                        WhatsApp'tan Yaz
                    </Link>
                </div>
            </div>
        </section>
    );
}
