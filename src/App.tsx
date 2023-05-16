// src/App.tsx
import { BrowserRouter, Route, Routes, Link as RouterLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import RegisterDoctor from './components/CadastroMedicos';
import ScheduleAppointment from './components/Agendamento';
import ViewAppointments from './components/ListagemAgendamentos';

function App() {
  return (
    <BrowserRouter>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh', textAlign: 'center' }}
      >
        <nav>
          <Button component={RouterLink} to="/register" variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Registrar Médico
          </Button>
          <Button component={RouterLink} to="/schedule" variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Agendar Consulta
          </Button>
          <Button component={RouterLink} to="/view" variant="contained" color="primary">
            Listar Consultas
          </Button>
        </nav>
        <Routes>
          <Route path="/register" element={<RegisterDoctor />} />
          <Route path="/schedule" element={<ScheduleAppointment />} />
          <Route path="/view" element={<ViewAppointments />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
