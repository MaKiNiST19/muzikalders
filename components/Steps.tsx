import Image from 'next/image';

const steps = [
    {
        title: 'Tanışma & Hedef Belirleme',
        description: 'İlk görüşmemizde müzikal ilgi alanlarınızı, hedeflerinizi ve beklentilerinizi konuşuyorum.',
        image: '/bir.svg',
    },
    {
        title: 'Seviye Tespiti & Program',
        description: 'Mevcut seviyenize ve yaş grubunuza en uygun kişiselleştirilmiş ders programını oluşturuyorum.',
        image: '/iki.svg',
    },
    {
        title: 'Düzenli Ders & Gelişim',
        description: 'Disiplinli çalışma ve sürekli geri bildirim ile adım adım ilerliyor, yeteneklerinizi geliştiriyorum.',
        image: '/uc.svg',
    },
];

export default function Steps() {
    return (
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/music-pattern.svg')] bg-repeat opacity-5 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nasıl İlerliyorum?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Müzik yolculuğuna başlamak hiç bu kadar kolay ve planlı olmamıştı. Sadece 3 adımda bana katılın.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-amber-500 opacity-20 transform -translate-y-1/2 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 text-center relative z-10">
                            <div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-700 shadow-xl mb-6 relative group overflow-hidden transition-all duration-300 hover:border-indigo-500/50">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative w-12 h-12">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-slate-400 px-4 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
