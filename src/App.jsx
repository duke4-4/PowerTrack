import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Tips from './pages/Tips';
import Payments from './pages/Payments';
import FaultReport from './pages/FaultReport';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/fault-report" element={<FaultReport />} />
          </Routes>
        </main>
        <footer className="mt-auto py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PowerTrack. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
