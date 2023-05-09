import { useContext, useState } from 'react';
import { ConsultorioContext, ConsultorioContextType } from '../../context/ConsultorioContext';

const Agendamento = () => {
  const { medicos } = useContext<ConsultorioContextType>(ConsultorioContext);
  const { setAgendamentos } = useContext<ConsultorioContextType>(ConsultorioContext);
  const [nomePaciente, setNomePaciente] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefonePaciente, setTelefonePaciente] = useState('');
  const [data, setData] = useState('');
  const [medicoSelecionado, setMedicoSelecionado] = useState('');
  console.log(medicos, medicoSelecionado)

  const handleSubmit = e => {
    e.preventDefault();
    setAgendamentos(prevAgendamentos => [
      ...prevAgendamentos,
      { nomePaciente, cpf, telefonePaciente, data, medico: medicoSelecionado },
    ]);
    setNomePaciente('');
    setCpf('');
    setTelefonePaciente('');
    setData('');
    setMedicoSelecionado('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nomePaciente} onChange={e => setNomePaciente(e.target.value)} placeholder="Nome do Paciente" required />
      <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
      <input type="tel" value={telefonePaciente} onChange={e => setTelefonePaciente(e.target.value)} placeholder="Telefone" required />
      <input type="date" value={data} onChange={e => setData(e.target.value)} required />
      <select value={medicoSelecionado} onChange={e => setMedicoSelecionado(e.target.value)} required>
        <option value="">Selecione um médico</option>
        {medicos.map((medico, index) => (
          <option key={index} value={medico.nome}>{medico.nome}</option>
        ))}
      </select>
      <button type="submit">Agendar</button>
    </form>
  );
};

export default Agendamento;
