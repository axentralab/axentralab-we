import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { AuthProvider }  from './context/AuthContext';
import { CartProvider }  from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './styles/global.css';

import HomePage        from './pages/HomePage';
import AboutPage       from './pages/AboutPage';
import ShopPage        from './pages/ShopPage';
import ProductsPage    from './pages/ProductsPage';
import PricingPage     from './pages/PricingPage';
import PortfolioPage   from './pages/PortfolioPage';
import TeamPage        from './pages/TeamPage';
import ContactPage     from './pages/ContactPage';
import MeetingWithCEOPage from './pages/MeetingWithCEOPage';
import ReferralPage    from './pages/ReferralPage';
import HostingPage     from './pages/HostingPage';
import MaintenancePage from './pages/MaintenancePage';
import SupportPage     from './pages/SupportPage';
import ClientPortalPage from './pages/ClientPortalPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NotFoundPage     from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      <Footer />
    </>
  );
}

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <ToastProvider>
              <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
                <div className="grid-bg" />
                <ScrollToTop />
                <Routes>
                  <Route path="/"          element={<PublicLayout><HomePage /></PublicLayout>} />
                  <Route path="/about"     element={<PublicLayout><AboutPage /></PublicLayout>} />
                  <Route path="/services"  element={<PublicLayout><ShopPage /></PublicLayout>} />
                  <Route path="/hosting"   element={<PublicLayout><HostingPage /></PublicLayout>} />
                  <Route path="/maintenance" element={<PublicLayout><MaintenancePage /></PublicLayout>} />
                  <Route path="/pricing"   element={<PublicLayout><PricingPage /></PublicLayout>} />
                  <Route path="/support"   element={<PublicLayout><SupportPage /></PublicLayout>} />
                  <Route path="/client-portal" element={<PublicLayout><ClientPortalPage /></PublicLayout>} />
                  <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />
                  <Route path="/products"  element={<PublicLayout><ProductsPage /></PublicLayout>} />
                  <Route path="/portfolio" element={<PublicLayout><PortfolioPage /></PublicLayout>} />
                  <Route path="/team"      element={<PublicLayout><TeamPage /></PublicLayout>} />
                  <Route path="/contact"   element={<PublicLayout><ContactPage /></PublicLayout>} />
                  <Route path="/ceo-meeting" element={<PublicLayout><MeetingWithCEOPage /></PublicLayout>} />
                  <Route path="/referral"  element={<AppLayout><ReferralPage /></AppLayout>} />
                  <Route path="*" element={<PublicLayout><NotFoundPage /></PublicLayout>} />
                </Routes>
              </div>
            </ToastProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}