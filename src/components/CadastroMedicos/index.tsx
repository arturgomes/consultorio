import React, { useContext, useState, FormEvent } from 'react';
import { ConsultorioContext, ConsultorioContextType } from '../../context/ConsultorioContext';

interface Medico {
  nome: string;
  email: string;
  telefone: string;
  crm: string;
}

interface MedicoContextType {
  medicos: Medico[];
  setMedicos: React.Dispatch<React.SetStateAction<Medico[]>>;

}
const CadastroMedicos: React.FC = () => {
  const { medicos, setMedicos } = useContext<ConsultorioContextType>(ConsultorioContext);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [crm, setCrm] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setMedicos(medicos => [...medicos, { nome, email, telefone, crm }]);
    setNome('');
    setEmail('');
    setTelefone('');
    setCrm('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome Completo" required />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone" required />
      <input type="text" value={crm} onChange={e => setCrm(e.target.value)} placeholder="CRM" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroMedicos;
