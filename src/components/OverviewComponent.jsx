import React from 'react';

const OverviewComponent = ({ onBack }) => {
    const summaries = [
        {
            id: "axis4",
            title: "المحور الرابع: النظام السياسي والدستور",
            content: "يتناول هذا المحور نشأة الدولة الأردنية وتطور نظامها السياسي النيابي الملكي الوراثي. يركز على الدستور الأردني لعام 1952 وتعديلاته كضمانة للحقوق والحريات، ويوضح السلطات الثلاث (التنفيذية، التشريعية، والقضائية) والعلاقة بينها. كما يستعرض أبرز المحطات التاريخية مثل الاستقلال، وتعريب قيادة الجيش، ومعركة الكرامة، ودور الهاشميين في بناء الدولة الحديثة."
        },
        {
            id: "axis5",
            title: "المحور الخامس: الأمن الوطني",
            content: "يركز هذا المحور على مفهوم الأمن الوطني الشامل بأبعاده العسكرية، السياسية، الاقتصادية، والاجتماعية. يسلط الضوء على دور القوات المسلحة والأجهزة الأمنية في حماية الوطن، ويناقش التحديات التي تواجه الأمن الوطني مثل شح المياه، قضايا الطاقة، واللجوء. كما يتطرق لمفاهيم الأمن الفكري، الأمن السيبراني، ومكافحة التطرف والإرهاب."
        },
        {
            id: "axis6",
            title: "المحور السادس: المجتمع الأردني",
            content: "يستعرض هذا المحور خصائص المجتمع الأردني كنسيج متماسك ومتسامح، ودور العشيرة كركيزة اجتماعية. يناقش قضايا التغير الاجتماعي، دور الشباب والمرأة في التنمية، وأهمية العمل التطوعي. كما يعالج التحديات الاجتماعية مثل الفقر، البطالة، العنف المجتمعي، وآفة المخدرات، مؤكداً على قيم المواطنة الصالحة وسيادة القانون."
        },
        {
            id: "axis7",
            title: "المحور السابع: الإعلام الوطني",
            content: "يتناول دور الإعلام الوطني المسؤول في الدفاع عن قضايا الوطن وتشكيل الرأي العام. يناقش أخلاقيات العمل الإعلامي، والتعامل مع الإعلام الجديد ومنصات التواصل الاجتماعي. يركز على مفاهيم التربية الإعلامية، محاربة الشائعات واغتيال الشخصية، والجرائم الإلكترونية، مؤكداً على أهمية الوعي الرقمي وحماية الخصوصية."
        },
        {
            id: "axis8",
            title: "ملحق: تحديث المنظومة السياسية",
            content: "يغطي هذا الملحق مخرجات اللجنة الملكية لتحديث المنظومة السياسية، بما في ذلك قانون الانتخاب الجديد وقانون الأحزاب السياسية لعام 2022. يهدف لتعزيز المشاركة السياسية والحزبية، وتمكين الشباب والمرأة، والوصول إلى حكومات برلمانية، مستنداً إلى الرؤى الملكية والأوراق النقاشية لتعميق النهج الديمقراطي."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-fade-in-up pb-20">
            <div className="w-full max-w-5xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">
                        نظرة عامة عن المادة
                    </h2>
                    <button
                        onClick={onBack}
                        className="px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        عودة للرئيسية
                    </button>
                </div>

                {/* Introduction Card */}
                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/60 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        في هذا القسم تجد ملخصاً شاملاً وسريعاً لأبرز الأفكار والمواضيع التي تتناولها محاور مادة التربية الوطنية، لتكوين صورة متكاملة عن المساق.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {summaries.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl border border-white/40 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4 border-b border-emerald-100 pb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-lg leading-loose text-justify">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Back Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        عودة للصفحة الرئيسية
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OverviewComponent;
