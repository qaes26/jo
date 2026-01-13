import React, { useState } from 'react';
import { questions } from '../questions';

export default function QuizComponent({ axis, onBack }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);

    const currentAxisQuestions = questions[axis];
    const currentQuestion = currentAxisQuestions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        if (isAnswerChecked) return;
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === currentQuestion.answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < currentAxisQuestions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedOption(null);
            setIsAnswerChecked(false);
        } else {
            setShowScore(true);
        }
    };

    const checkAnswer = () => {
        if (!selectedOption) return;
        setIsAnswerChecked(true);
    }

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsAnswerChecked(false);
    };

    if (showScore) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 animate-scale-in">
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-12 max-w-xl w-full text-center border border-white/50">
                    <div className="mb-6 animate-bounce">
                        {score >= 25 ? (
                            <span className="text-7xl">🌟</span>
                        ) : score >= 15 ? (
                            <span className="text-7xl">🎉</span>
                        ) : (
                            <span className="text-7xl">💪</span>
                        )}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">النتيجة النهائية</h2>

                    <div className="relative inline-block mb-8">
                        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            {score}
                        </div>
                        <div className="text-2xl text-gray-400 font-bold mt-2">
                            من {currentAxisQuestions.length}
                        </div>
                    </div>

                    <p className="text-2xl text-gray-700 mb-10 font-medium">
                        {score >= 25 ? 'ممتاز! أداء استثنائي.' : score >= 15 ? 'جيد جداً! استمر في التقدم.' : 'حاول مرة أخرى، يمكنك فعل الأفضل.'}
                    </p>

                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={restartQuiz}
                            className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xl rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
                        >
                            إعادة الاختبار
                        </button>
                        <button
                            onClick={onBack}
                            className="w-full py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold text-xl rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all"
                        >
                            العودة للرئيسية
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 flex justify-between items-center bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                <span className="text-emerald-800 font-bold text-xl flex items-center gap-2">
                    <span className="bg-emerald-100 p-2 rounded-lg">📊</span>
                    السؤال {currentQuestionIndex + 1} <span className="text-gray-400 text-sm">/ {currentAxisQuestions.length}</span>
                </span>
                <button onClick={onBack} className="px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-bold transition-colors">
                    خروج
                </button>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden min-h-[500px] flex flex-col relative">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gray-100">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                        style={{ width: `${((currentQuestionIndex + 1) / currentAxisQuestions.length) * 100}%` }}
                    />
                </div>

                <div className="p-10 border-b border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                        {currentQuestion.question}
                    </h2>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-center space-y-4">
                    {currentQuestion.options.map((option, index) => {
                        let btnClass = "w-full text-right p-6 rounded-2xl border-2 transition-all duration-200 font-bold text-xl group relative overflow-hidden ";
                        if (isAnswerChecked) {
                            if (option === currentQuestion.answer) {
                                btnClass += "bg-green-100 border-green-500 text-green-900 ";
                            } else if (option === selectedOption) {
                                btnClass += "bg-red-100 border-red-500 text-red-900 ";
                            } else {
                                btnClass += "bg-gray-50 border-transparent text-gray-400 opacity-60 ";
                            }
                        } else {
                            if (selectedOption === option) {
                                btnClass += "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-md scale-[1.01] ";
                            } else {
                                btnClass += "bg-white border-gray-100 hover:border-emerald-300 hover:bg-emerald-50/30 text-gray-700 shadow-sm ";
                            }
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={btnClass}
                                disabled={isAnswerChecked}
                            >
                                <div className="flex items-center relative z-10">
                                    <span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold ml-6 border transition-colors ${isAnswerChecked && option === currentQuestion.answer ? 'bg-green-500 text-white border-green-500' :
                                            isAnswerChecked && option === selectedOption ? 'bg-red-500 text-white border-red-500' :
                                                selectedOption === option ? 'bg-emerald-500 text-white border-emerald-500' :
                                                    'bg-gray-100 text-gray-500 border-gray-200 group-hover:border-emerald-300'
                                        }`}>
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    {option}
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="p-8 bg-gray-50/80 border-t border-gray-100 flex justify-end">
                    {!isAnswerChecked ? (
                        <button
                            onClick={checkAnswer}
                            disabled={!selectedOption}
                            className={`px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-lg ${selectedOption
                                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-emerald-500/30 transform hover:-translate-y-1'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                                }`}
                        >
                            تأكيد الإجابة
                        </button>
                    ) : (
                        <button
                            onClick={handleNextQuestion}
                            className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-xl hover:shadow-emerald-500/30 transition-all shadow-lg transform hover:-translate-y-1 animate-pulse-slow"
                        >
                            {currentQuestionIndex === currentAxisQuestions.length - 1 ? 'عرض النتيجة' : 'السؤال التالي'}
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}
