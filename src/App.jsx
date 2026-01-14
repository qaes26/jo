import React, { useState } from 'react';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import OverviewComponent from './components/OverviewComponent';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'overview', or axis ID
  const [selectedAxis, setSelectedAxis] = useState(null);

  const handleNavigate = (view, axisId = null) => {
    setCurrentView(view);
    if (axisId) setSelectedAxis(axisId);
  };

  return (
    <div className="min-h-screen font-cairo text-right relative" dir="rtl">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/background2.jpg')",
        }}
      />
      {/* Overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {currentView === 'home' && (
          <HomeComponent
            onSelectAxis={(axis) => handleNavigate('quiz', axis)}
            onOpenOverview={() => handleNavigate('overview')}
          />
        )}

        {currentView === 'quiz' && (
          <QuizComponent
            axis={selectedAxis}
            onBack={() => handleNavigate('home')}
          />
        )}

        {currentView === 'overview' && (
          <OverviewComponent
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 py-4 text-center shadow-lg z-50">
        <p className="text-emerald-800 font-bold text-lg">
          من اعداد قيس جازي
        </p>
      </footer>
    </div>
  );
}

export default App;
