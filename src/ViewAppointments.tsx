// src/ViewAppointments.tsx
import React, { useContext, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import { Appointment } from './types';
import { Card, Container, Tabs, Tab, Box, Select, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { startOfDay, endOfDay, isWithinInterval } from 'date-fns';

const ViewAppointments: React.FC = () => {
  const { appointments, doctors } = useContext(DoctorContext);
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const isAppointmentToday = (date: Date) => {
    const todayStart = startOfDay(new Date());
    const todayEnd = endOfDay(new Date());
    return isWithinInterval(date, { start: todayStart, end: todayEnd });
  };

  let filteredAppointments: Appointment[] = [];
  switch (currentTab) {
    case 0: // All appointments
      filteredAppointments = appointments;
      break;
    case 1: // Today's appointments
      filteredAppointments = appointments.filter(appointment => isAppointmentToday(new Date(appointment.date)));
      break;
    case 2: // Appointments filtered by doctor
      filteredAppointments = appointments.filter(appointment => appointment.doctorEmail === selectedDoctor);
      break;
    default:
      break;
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nome', width: 130 },
    { field: 'date', headerName: 'Data', width: 130, valueFormatter: ({ value }) => new Date(value as string).toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) },
    { field: 'phoneNumber', headerName: 'Telefone', width: 130 },
    { field: 'doctorEmail', headerName: 'Médico', width: 130 },
  ];

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Tabs value={currentTab} onChange={handleChange}>
            <Tab label="Todos os agendamentos" />
            <Tab label="Agendamentos de Hoje" />
            <Tab label="Por médico" />
          </Tabs>
          {currentTab === 2 && (
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value as string)}
              fullWidth
              sx={{ mt: 2 }}
            >
              {doctors.map((doctor, index) => (
                <MenuItem key={index} value={doctor.email}>
                  {doctor.email}
                </MenuItem>
              ))}
            </Select>
          )}
          <Box sx={{ mt: 2, height: 400, width: '100%' }}>
            <DataGrid rows={filteredAppointments} columns={columns} pageSize={5} />
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default ViewAppointments;
