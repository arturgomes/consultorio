import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CadastroMedicos from './components/CadastroMedicos';
import Agendamento from './components/Agendamento';
import ListagemAgendamentos from './components/ListagemAgendamentos';
import { ConsultorioProvider } from './context/ConsultorioContext';

function App() {
  return (
    <ConsultorioProvider>
      <Router>
        <Routes>
          <Route path="/cadastro-medicos" element={<CadastroMedicos />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/listagem-agendamentos" element={<ListagemAgendamentos />} />
          <Route path="*" element={<Navigate to="/agendamento" replace />} />


        </Routes>
      </Router>
    </ConsultorioProvider>

  );
}

export default App;