'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda-zeynep-ogretmen' },
    { name: 'Dersler', href: '/#dersler' }, // Anchor for now, or dropdown
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="block relative h-16 w-52">
                        <Image
                            src="/logo.png"
                            alt="Müzikal Ders Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-rose-500 ${pathname === item.href ? 'text-rose-500' : 'text-slate-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/iletisim"
                            className="bubble-btn bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
                            style={{ '--bubble-color': '#0f172a' } as React.CSSProperties}
                        >
                            Ücretsiz Ön Görüşme
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-800 hover:text-rose-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-3 rounded-lg text-base font-medium ${pathname === item.href
                                    ? 'bg-rose-50 text-rose-600'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-4 border-t border-slate-100">
                            <Link
                                href="/iletisim"
                                className="w-full block text-center bg-slate-900 text-white px-5 py-3 rounded-xl font-medium"
                            >
                                Ücretsiz Ön Görüşme
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
