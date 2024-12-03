import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Tips from './pages/Tips';
import Payments from './pages/Payments';
import FaultReport from './pages/FaultReport';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/fault-report" element={<FaultReport />} />
    </Routes>
  );
}

export default AppRoutes; 