import React from 'react';

const axisTitles = {
    axis4: "المحور الرابع: النظام السياسي والدستور",
    axis5: "المحور الخامس: الأمن الوطني",
    axis6: "المحور السادس: المجتمع الأردني",
    axis7: "المحور السابع: الإعلام الوطني"
};

export default function HomeComponent({ onSelectAxis }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center space-y-10 animate-fade-in-up">
            <header className="space-y-6 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50 w-full max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600 drop-shadow-sm">
                    تطبيق لحل أسئلة التربية الوطنية
                </h1>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                <p className="text-2xl text-emerald-800 font-semibold">
                    جامعة أربد الاهلية
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
                {Object.keys(axisTitles).map((axis) => (
                    <button
                        key={axis}
                        onClick={() => onSelectAxis(axis)}
                        className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-white/60 hover:border-emerald-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                            <span className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                                {axisTitles[axis]}
                            </span>
                            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                30 سؤال
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-12 p-8 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/50 max-w-3xl text-gray-700 text-lg leading-relaxed shadow-xl">
                <p className="font-medium">
                    اختبر معلوماتك في محاور مادة التربية الوطنية. هذا التطبيق مصمم لمساعدتك على المراجعة وتثبيت المعلومات بشكل تفاعلي وممتع.
                </p>
            </div>
        </div>
    );
}
