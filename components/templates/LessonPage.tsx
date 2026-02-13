"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import FAQ from '@/components/FAQ';
import Testimonials, { TestimonialItem } from '@/components/Testimonials';
import CTA from '@/components/CTA';
import { Check, Target, BookOpen, Clock, Calendar, MessageCircle } from 'lucide-react';

interface LessonPageProps {
    title: string;
    description: string;
    longDescription: string;
    audiences: string[];
    features: string[];
    program: { title: string; desc: string }[];
    faqs: { question: string; answer: string }[];
    slug: string;
    sidebarImage?: string;
    extraContent?: {
        title: string;
        description?: string;
        items?: string[];
    }[];
    featuresTitle?: string;
    featuresDescription?: string;
    programTitle?: string;
    testimonials?: TestimonialItem[];
}

export default function LessonPageTemplate({
    title,
    description,
    longDescription,
    audiences,
    features,
    program,
    faqs,
    slug,
    sidebarImage,
    extraContent,
    featuresTitle,
    featuresDescription,
    programTitle,
    testimonials,
}: LessonPageProps) {
    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Ana Sayfa', item: 'https://www.muzikalders.com.tr' },
        { name: 'Dersler', item: 'https://www.muzikalders.com.tr/#dersler' },
        { name: title, item: `https://www.muzikalders.com.tr${slug}` },
    ]);

    // Loader Logic
    const [startLoader, setStartLoader] = useState(false);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartLoader(true);
                }
            },
            { threshold: 0.2 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="pt-24 pb-0">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-indigo-50 to-rose-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-indigo-100">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-6xl mx-auto">
                            {longDescription}
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm shadow-sm">
                                <Target className="w-4 h-4 mr-2 text-rose-500" />
                                Birebir Eğitim
                            </span>
                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm shadow-sm">
                                <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                                Esnek Saatler
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Audience Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                Kimler İçin Uygun?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {audiences.map((item, i) => (
                                    <div key={i} className="relative overflow-hidden w-full bg-white rounded-lg p-4 flex items-center gap-4"
                                        style={{
                                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                            minHeight: '80px'
                                        }}
                                    >
                                        <svg className="absolute -left-[31px] top-[32px] w-[80px] fill-[#04e4003a] rotate-90" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z" fillOpacity={1} />
                                        </svg>
                                        <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#04e40048] shrink-0 z-10 ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-[17px] h-[17px] text-[#269b24]">
                                                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col justify-center items-start flex-grow z-10">
                                            <p className="text-slate-900 font-bold text-sm leading-tight">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content / Features Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                {featuresTitle || 'Ders İçeriği'}
                            </h2>
                            {featuresDescription && (
                                <p className="text-slate-700 mb-6 leading-relaxed whitespace-pre-wrap">
                                    {featuresDescription}
                                </p>
                            )}
                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Extra Content Sections */}
                        {extraContent && extraContent.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                    {section.title}
                                </h2>
                                {section.description && (
                                    <p className="text-slate-700 mb-6 leading-relaxed">
                                        {section.description}
                                    </p>
                                )}
                                {section.items && (
                                    <ul className="space-y-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-slate-700">
                                                <span className="w-2 h-2 bg-rose-400 rounded-full mr-4 mt-2 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {/* Program Section with Vertical Loader */}
                        <div ref={loaderRef}>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                {programTitle || 'Program ve İlerleyiş'}
                            </h2>
                            <div className="relative pl-10">
                                {/* Vertical Loader Track */}
                                <div className="absolute left-0 top-0 bottom-0 w-[16px] bg-[#535353] rounded-full overflow-hidden">
                                    {/* Animated Bar */}
                                    <div
                                        className={`w-full bg-[#00cd00] rounded-full ${startLoader ? 'vertical-loader-bar' : 'h-0'}`}
                                    />
                                </div>

                                {/* Steps */}
                                <div className="flex flex-col justify-between h-full space-y-12">
                                    {program.map((step, i) => {
                                        // Calculate exact delay for each check to turn green based on its position
                                        // Total animation time 4s. Steps at 0%, 33%, 66%, 100%.
                                        const delays = [0, 1.3, 2.6, 3.9];
                                        const delay = delays[i] || 0;

                                        return (
                                            <div key={i} className="relative group">
                                                {/* Check Circle on Loader */}
                                                <div
                                                    className="absolute -left-[44px] top-1 w-6 h-6 rounded-full p-1 z-10 flex items-center justify-center transition-all duration-300"
                                                    style={{
                                                        backgroundColor: '#535353',
                                                        transform: 'scale(0.75)',
                                                        animation: startLoader ? `checkScale 0.5s linear ${delay}s forwards` : 'none',
                                                    }}
                                                >
                                                    <svg stroke="white" strokeWidth="3" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                                        <path d="m4.5 12.75 6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round" />
                                                    </svg>
                                                </div>

                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section (Specific) */}
                        <div>
                            <FAQ items={faqs} />
                        </div>

                    </div>

                    {/* Sidebar / CTA */}
                    <div className="relative h-full">
                        {sidebarImage && (
                            <div className="mb-6 max-w-[350px] mx-auto w-full rounded-[20px] overflow-hidden shadow-lg border border-slate-100 relative h-[250px]">
                                <Image
                                    src={sidebarImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div
                            className="sticky top-24 max-w-[350px] mx-auto w-full p-5 rounded-[20px] flex flex-col"
                            style={{
                                background: 'linear-gradient(to top right, rgb(7 16 45), rgb(58 60 84))',
                                border: '1px solid rgb(84 90 106)',
                            }}
                        >
                            <span className="text-[#488aec] text-sm font-semibold">Hemen Başlayın!</span>
                            <span className="text-white text-[26px] leading-[26px] font-semibold my-2">
                                Hayallerini Erteleme.
                            </span>
                            <span className="text-[rgb(151,153,167)] text-[13px] font-medium my-2">
                                İlk dersiniz benden! Ücretsiz tanışma dersi için hemen randevu oluşturun.
                            </span>
                            <div className="flex items-center justify-center gap-[10px] mt-[10px]">
                                <a
                                    href="/iletisim"
                                    className="flex flex-1 items-center justify-between rounded-[10px] p-[6px] no-underline bg-[#488aec] hover:brightness-110 transition-all"
                                    style={{
                                        boxShadow: '0 4px 6px -1px #488aec31, 0 2px 4px -1px #488aec17'
                                    }}
                                >
                                    <div className="w-[25px] h-[25px] flex items-center justify-center">
                                        <Calendar className="text-white w-full h-full p-0.5" />
                                    </div>
                                    <div className="flex flex-col ml-2 mr-auto">
                                        <span className="text-[10px] font-semibold text-[rgb(219,206,253)]">Online</span>
                                        <span className="text-xs font-extrabold text-white">Randevu Al</span>
                                    </div>
                                </a>
                                <a
                                    href="https://wa.me/905373392701"
                                    className="flex flex-1 items-center justify-between rounded-[10px] p-[6px] no-underline bg-[#25D366] hover:bg-[#128c7e] transition-all"
                                    style={{
                                        boxShadow: '0 4px 6px -1px #0b162531, 0 2px 4px -1px #0e192b17'
                                    }}
                                >
                                    <div className="w-[25px] h-[25px] flex items-center justify-center">
                                        <MessageCircle className="text-white w-full h-full p-0.5" />
                                    </div>
                                    <div className="flex flex-col ml-2 mr-auto">
                                        <span className="text-[10px] font-semibold text-white/90">WhatsApp</span>
                                        <span className="text-xs font-extrabold text-white">Bana Yazın</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {testimonials && <Testimonials data={testimonials} />}

                <CTA />
            </main>
        </>
    );
}
