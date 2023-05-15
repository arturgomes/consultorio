// src/App.tsx
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { DoctorProvider } from './DoctorContext';
import RegisterDoctor from './RegisterDoctor';
import ScheduleAppointment from './ScheduleAppointment';

function App() {
  return (
    <DoctorProvider>
      <BrowserRouter>
        <nav>
          <Link to="register">Register Doctor</Link>
          <Link to="schedule">Schedule Appointment</Link>
        </nav>
        <Routes>
          <Route path="register" element={<RegisterDoctor />} />
          <Route path="schedule" element={<ScheduleAppointment />} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  );
}

export default App;
