// src/App.tsx
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { DoctorProvider } from './DoctorContext';
import RegisterDoctor from './RegisterDoctor';
import ScheduleAppointment from './ScheduleAppointment';
import ViewAppointments from './ViewAppointments';

function App() {
  return (
    <DoctorProvider>
      <BrowserRouter>
        <nav>
          <Link to="register">Registrar Médico</Link>
          <Link to="schedule">Agendar Consulta</Link>
          <Link to="view">listar contultas</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterDoctor />} />
          <Route path="/schedule" element={<ScheduleAppointment />} />
          <Route path="/view" element={<ViewAppointments />} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  );
}

export default App;
