import React, { useContext, useState, useEffect } from 'react';
import { ConsultorioContext } from '../../context/ConsultorioContext';

// Define os tipos para os médicos
interface Medico {
  nome: string;
  email: string;
  telefone: string;
  crm: string;
}

// Define os tipos para os agendamentos
interface Agendamento {
  nomePaciente: string;
  cpf: string;
  telefonePaciente: string;
  data: string;
  medico: string;
}

const ListagemAgendamentos: React.FC = () => {
  const { medicos } = useContext(ConsultorioContext);
  const { agendamentos } = useContext(ConsultorioContext);
  const [medico, setMedico] = useState<string>('');
  const [filtro, setFiltro] = useState<Agendamento[]>([]);

  useEffect(() => {
    if (medico) {
      setFiltro(agendamentos.filter(a => a.medico === medico));
    } else {
      setFiltro(agendamentos);
    }
  }, [medico, agendamentos]);

  return (
    <>
      <select value={medico} onChange={e => setMedico(e.target.value)}>
        <option value="">Todos os médicos</option>
        {medicos.map((medico: Medico, index: number) => (
          <option key={index} value={medico.nome}>{medico.nome}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Médico</th>
          </tr>
        </thead>
        <tbody>
          {filtro.map((agendamento: Agendamento, index: number) => (
            <tr key={index}>
              <td>{agendamento.nomePaciente}</td>
              <td>{agendamento.cpf}</td>
              <td>{agendamento.telefonePaciente}</td>
              <td>{agendamento.data}</td>
              <td>{agendamento.medico}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListagemAgendamentos;
