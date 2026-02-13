import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
    dersler: [
        { name: 'Piyano Dersi', href: '/eryaman-piyano-dersi' },
        { name: 'Gitar Dersi', href: '/eryaman-gitar-dersi' },
        { name: 'Yan Flüt Dersi', href: '/eryaman-yan-flut-dersi' },
        { name: 'Şan Dersi', href: '/eryaman-san-dersi' },
        { name: 'Solfej / Duyum / Bona', href: '/eryaman-solfej-duyum-bona' },
        { name: 'Bilsem Müzik Hazırlık', href: '/bilsem-muzik-hazirlik' },
        { name: 'Konservatuvar Hazırlık', href: '/konservatuvar-hazirlik' },
        { name: 'Müzik Öğretmenliği Hazırlık', href: '/muzik-ogretmenligi-hazirlik' },
    ],
    kurumsal: [
        { name: 'Hakkımızda', href: '/hakkimizda-zeynep-ogretmen' },
        { name: 'Öğrenci Başarı Hikayeleri', href: '/ogrenci-basari-hikayeleri' },
        { name: 'Yorumlar', href: '/yorumlar' },
        { name: 'Blog', href: '/blog' },
        { name: 'İletişim', href: '/iletisim' },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Contact */}
                    <div>
                        <div className="mb-6 relative h-16 w-60">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Müzikal Ders Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            Ankara Eryaman bölgesinde, konservatuvar mezunu eğitmenlerden profesyonel müzik eğitimi.
                            Hayallerinize nota nota ulaşın.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+905373392701" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Phone className="h-5 w-5 text-rose-400" />
                                <span>+90 (537) 339 27 01</span>
                            </a>
                            <a href="mailto:info@muzikalders.com.tr" className="flex items-center gap-3 hover:text-white transition-colors">
                                <Mail className="h-5 w-5 text-rose-400" />
                                <span>info@muzikalders.com.tr</span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-rose-400 mt-1" />
                                <span className="text-sm">
                                    Eryaman / Ankara
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Lessons */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Müzik Dersleri</h3>
                        <ul className="space-y-2">
                            {footerLinks.dersler.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-rose-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Kurumsal</h3>
                        <ul className="space-y-2">
                            {footerLinks.kurumsal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm hover:text-rose-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Hours */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Beni Takip Edin</h3>
                        <div className="flex space-x-4 mb-8">
                            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-rose-500 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                        <h4 className="text-white font-medium mb-4">Çalışma Saatleri</h4>
                        <ul className="text-sm text-slate-400 space-y-1">
                            <li className="flex justify-between">
                                <span>Pazartesi - Cuma:</span>
                                <span>09:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Cumartesi:</span>
                                <span>09:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Pazar:</span>
                                <span>Kapalı</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} Müzikal Ders. Tüm hakları saklıdır.</p>
                    <div className="flex space-x-6">
                        <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
