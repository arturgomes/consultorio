/**
 * aqui a gente vai armazenar de forma global, o conteúdo de cada página/component
 * 
 * então, o que é essencial aqui, é que tenhamos duas listas:
 * -listas de médicos
 * -listas de consultas
 */

import { createContext, useState } from "react";


export interface Doutor {
  nome: string;
  email: string;
  telefone: string;
}

export interface Consulta {
  id: number;
  data: string;
  nomePaciente: string;
  numeroTel: string;
  emailDoutor: string
}

interface ContextProps {
  doutores: Doutor[]
  consultas: Consulta[]
  adicionarDoutor: (doutor: Doutor) => void;
  agendarConsulta: (consulta: Consulta) => void
}

export const ConsultasContext = createContext<Partial<ContextProps>>({})

export const ConsultasProvider = ({ children }) => {
  const [doutores, setDoutores] = useState<Doutor[]>([])
  const [consultas, setConsultas] = useState<Consulta[]>([])

  const adicionarDoutor = (doutor: Doutor) => {
    setDoutores([...doutores, doutor])
  }
  const agendarConsulta = (consulta: Consulta) => {
    setConsultas([...consultas, consulta])
  }
  return (
    <ConsultasContext.Provider value={{ doutores, consultas, adicionarDoutor, agendarConsulta }}>
      {children}
    </ConsultasContext.Provider>
  )
}

