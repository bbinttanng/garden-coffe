import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNavDrawer } from './components/layout/MobileNavDrawer';
import { SearchModal } from './components/modals/SearchModal';
import { ItemDetailModal } from './components/modals/ItemDetailModal';
import { TableReservationModal } from './components/modals/TableReservationModal';
import { Toast } from './components/ui/Toast';

import { HomePage } from './pages/HomePage';
import { CoffeePage } from './pages/CoffeePage';
import { FoodPage } from './pages/FoodPage';
import { PastryPage } from './pages/PastryPage';
import { LokasiPage } from './pages/LokasiPage';

export function App() {
  // Sync state with URL hash (e.g. #coffee, #food, #pastry, #lokasi, #home)
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'coffee', 'food', 'pastry', 'lokasi'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePageState] = useState(getInitialPage);

  const setActivePage = (page) => {
    setActivePageState(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePageState(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col antialiased">
      {/* Sticky Header with Navigation & Cart Actions */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main View Container */}
      <main className="w-full pt-28 bg-background flex-1 flex flex-col">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'coffee' && <CoffeePage setActivePage={setActivePage} />}
        {activePage === 'food' && <FoodPage setActivePage={setActivePage} />}
        {activePage === 'pastry' && <PastryPage setActivePage={setActivePage} />}
        {activePage === 'lokasi' && <LokasiPage setActivePage={setActivePage} />}
      </main>

      {/* Global Sanctuary Footer */}
      <Footer setActivePage={setActivePage} />


      {/* Global Utility Modals */}
      <SearchModal setActivePage={setActivePage} />
      <ItemDetailModal />
      <TableReservationModal />
      <MobileNavDrawer activePage={activePage} setActivePage={setActivePage} />

      {/* Global Toast Notification System */}
      <Toast />
    </div>
  );
}

export default App;
