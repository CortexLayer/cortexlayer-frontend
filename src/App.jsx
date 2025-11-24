import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SelectedPlan from './pages/SelectedPlan';
import PaymentComingSoon from './pages/PaymentComingSoon';
import TryDemo from './pages/TryDemo';
import LearnMore from './pages/LearnMore';
import Lenis from 'lenis';



// main app
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-mono">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/selected-plan" element={<SelectedPlan />} />
          <Route path="/payment-coming-soon" element={<PaymentComingSoon />} />
          <Route path="/try-demo" element={<TryDemo />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
