const achievements = [
    { school: 'Bilkent Üniversitesi Müzik Hazırlık', department: 'Piyano', count: 4 },
    { school: 'Ankara Güzel Sanatlar Lisesi', department: 'Müzik', count: 12 },
    { school: 'Hacettepe Konservatuvarı', department: 'Yan Flüt', count: 3 },
    { school: 'Gazi Üniversitesi', department: 'Müzik Öğretmenliği', count: 8 },
    { school: 'Bilsem Müzik Yetenek', department: 'Genel Yetenek', count: 15 },
    { school: 'ABRSM Sınavları', department: 'Grade 1-5', count: 25 },
];

export default function Achievements() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute -left-20 top-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -right-20 bottom-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Gurur Tablom</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Öğrencilerimin azmi ve doğru yönlendirmeyle ulaştığım başarılardan bazıları.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">{item.school}</h3>
                                <p className="text-indigo-600 text-sm font-medium">{item.department}</p>
                            </div>
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                <span className="text-2xl font-bold text-slate-800">{item.count}</span>
                                <span className="text-xs text-slate-500 block">Öğrenci</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-400 italic">
                        * Son 3 yılın kümülatif başarı verileridir.
                    </p>
                </div>
            </div>
        </section>
    );
}
