import { constructMetadata } from '@/lib/seo';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const metadata = constructMetadata({
    title: 'İletişim | Müzikal Ders Eryaman',
    description: 'Ankara Eryaman müzik kursu iletişim bilgileri. Adres, telefon ve konum bilgileri için tıklayın.',
});

export default function ContactPage() {
    const localBusinessSchema = generateLocalBusinessSchema({
        name: 'Müzikal Ders - İletişim',
        description: 'Eryaman Müzik Kursu İletişim Bilgileri',
        url: 'https://www.muzikalders.com.tr/iletisim',
        address: {
            streetAddress: 'Eryaman',
            addressLocality: 'Ankara',
            addressRegion: 'Ankara',
            postalCode: '06824',
            addressCountry: 'TR',
        },
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-slate-50 min-h-screen">
                <div className="max-w-[1440px] mx-auto">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Benimle İletişime Geçin</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Ücretsiz tanışma dersi randevusu veya merak ettikleriniz için bana ulaşın.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info & Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Adresim</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Eryaman / Ankara
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-rose-100 p-3 rounded-xl text-rose-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Telefon & WhatsApp</h3>
                                        <p className="text-slate-600 text-sm mb-2">
                                            Randevu ve bilgi için arayabilirsiniz.
                                        </p>
                                        <a href="tel:+905373392701" className="text-lg font-bold text-slate-900 hover:text-rose-500 transition-colors">
                                            +90 (537) 339 27 01
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-xl text-amber-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">E-Posta</h3>
                                        <a href="mailto:info@muzikalders.com.tr" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">
                                            info@muzikalders.com.tr
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-xl text-green-600 shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Çalışma Saatleri</h3>
                                        <p className="text-slate-600 text-sm">
                                            Hafta İçi: 09:00 - 20:00<br />
                                            Cumartesi: 09:00 - 18:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Mesaj Gönderin</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Adınız Soyadınız</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="Adınız" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefon Numaranız</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" placeholder="0555..." />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Konu / Ders Seçimi</label>
                                    <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-white">
                                        <option value="">Seçiniz...</option>
                                        <option value="piyano">Piyano Dersi</option>
                                        <option value="gitar">Gitar Dersi</option>
                                        <option value="yanflut">Yan Flüt Dersi</option>
                                        <option value="san">Şan Dersi</option>
                                        <option value="bilsem">Bilsem Hazırlık</option>
                                        <option value="diger">Diğer</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none" placeholder="Sorunuz veya talebiniz..."></textarea>
                                </div>

                                <button
                                    type="button"
                                    className="bubble-btn w-full py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                                    style={{ '--bubble-color': '#4f46e5' } as React.CSSProperties}
                                >
                                    <Send className="w-5 h-5" />
                                    Mesajı Gönder
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
