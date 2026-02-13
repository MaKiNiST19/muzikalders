import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-100 bg-white shadow-sm text-sm font-medium text-indigo-600 mb-4 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                            Eryaman'ın En Kapsamlı Özel Müzik Dersi
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Eryaman Özel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">Müzik Dersi</span> <br />
                            <span className="text-3xl lg:text-4xl font-semibold text-slate-600 mt-2 block">Piyano, Gitar, Yan Flüt, Şan</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Konservatuvar mezunu öğretmenden, her yaş ve seviyeye uygun birebir müzik dersleri.
                            Hayalinizdeki enstrümanı çalmayı ertelemeyin. Ücretsiz deneme dersi ile tanışalım.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/iletisim"
                                className="bubble-btn inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-rose-500 shadow-lg shadow-rose-500/30 active:scale-95 transition-transform w-full sm:w-auto"
                                style={{ '--bubble-color': '#f43f5e' } as React.CSSProperties}
                            >
                                Ücretsiz Ön Görüşme
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#dersler"
                                className="bubble-btn inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-700 bg-white border border-slate-200 shadow-sm active:scale-95 transition-transform w-full sm:w-auto"
                                style={{ '--bubble-color': '#cbd5e1' } as React.CSSProperties}
                            >
                                <PlayCircle className="mr-2 h-5 w-5 text-indigo-500" />
                                Dersleri İncele
                            </Link>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group animate-fade-in-up">
                            <Image
                                src="/almila-zeynep-muzik-ogretmeni.jpg"
                                alt="Almila Zeynep Müzik Öğretmeni"
                                fill
                                priority
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-fade-in-up delay-100">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <span className="text-2xl">♪</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">60'dan fazla</p>
                                <p className="text-xs text-slate-500 font-medium">Başarılı Öğrenci</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
