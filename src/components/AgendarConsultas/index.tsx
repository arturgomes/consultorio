import { Container, Box, Card, TextField, Button, Select, MenuItem } from "@mui/material"
import { ConsultasContext } from "../../context/ConsultasContext"
import { useContext, useState } from 'react'

export default function AgendarConsultas() {
  /**
   * id: number;
   * data: string;
   * nomePaciente: string;
   * numeroTel: string;
   * emailDoutor: string
   */
  const { consultas, doutores, agendarConsulta } = useContext(ConsultasContext)

  const [data, setData] = useState('')
  const [nomePaciente, setNomePaciente] = useState('')
  const [numeroTel, setNumeroTel] = useState('')
  const [emailDoutor, setEmailDoutor] = useState('')
  const [time, setTime] = useState('08:00')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    agendarConsulta!({ id: consultas?.length || 0, nomePaciente, numeroTel, emailDoutor, data: '' })

  }
  const horarios: string[] = []
  for (let i = 8; i < 18; i++) {
    horarios.push(i < 10 ? `0${i}:00` : `${i}:00`)
  }
  // [] => id: 0
  // [{ id: 0 }] => id: 1
  // [{ id: 0 }, { id: 1 }] => id: 2
  // console.log(doutores)
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card elevation={3} sx={{ padding: 4, borderRadius: 2, minWidth: '500px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
            <TextField
              label="Nome do Paciente"
              type="text"
              value={nomePaciente}
              onChange={(e) => setNomePaciente(e.target.value)}
            />
            <TextField
              label="Telefone"
              type="tel"
              value={numeroTel}
              onChange={(e) => setNumeroTel(e.target.value)}
            />
            <TextField
              label="Data"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <Select
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {horarios.map((hora, index) => (
                <MenuItem key={index} value={hora}>
                  {hora}
                </MenuItem>
              ))}
            </Select>
            <Select
              value={emailDoutor}
              onChange={(e) => setEmailDoutor(e.target.value)
              }
            >
              {doutores?.map((doutor, index) => (
                <MenuItem key={index} value={doutor.email}>
                  {doutor.email}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit">
              Agendar!
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  )
}