import { Link as RouterLink, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import CadastroMedicos from './components/CadastroMedicos';
import Agendamento from './components/Agendamento';
import ListagemAgendamentos from './components/ListagemAgendamentos';

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/cadastro-medicos" element={<CadastroMedicos />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/listagem-agendamentos" element={<ListagemAgendamentos />} />
        <Route path="*" element={<Navigate to="/agendamento" replace />} />


      </Routes>
    </Router>

  );
}

export default App;