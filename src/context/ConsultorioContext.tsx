import React, { createContext, useState, ReactNode } from 'react';

export interface Medico {
  nome: string;
  email: string;
  telefone: string;
  crm: string;
}

export interface Agendamento {
  nomePaciente: string;
  cpf: string;
  telefonePaciente: string;
  data: string;
  medico: string;
}
export interface ConsultorioContextType {
  medicos: Medico[];
  setMedicos: React.Dispatch<React.SetStateAction<Medico[]>>;
  agendamentos: Agendamento[];
  setAgendamentos: React.Dispatch<React.SetStateAction<Agendamento[]>>;

}

export const ConsultorioContext = createContext<ConsultorioContextType>({
  medicos: [],
  setMedicos: () => { },
  agendamentos: [],
  setAgendamentos: () => { },
});

interface ConsultorioProviderProps {
  children: ReactNode;
}

export const ConsultorioProvider: React.FC<ConsultorioProviderProps> = ({ children }) => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  return (
    <ConsultorioContext.Provider value={{ medicos, setMedicos, agendamentos, setAgendamentos }}>
      {children}
    </ConsultorioContext.Provider>
  );
};
