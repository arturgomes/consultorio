// src/ScheduleAppointment.tsx
import React, { useContext, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import { Appointment } from './types';
import { TextField, Button, Card, Container, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { addMinutes, setHours, setMinutes } from 'date-fns';

const ScheduleAppointment: React.FC = () => {
  const { doctors, scheduleAppointment, appointments } = useContext(DoctorContext);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorEmail, setDoctorEmail] = useState(doctors[0]?.email || '');
  const [time, setTime] = useState('08:00');

  const times = [];
  for (let i = 8; i < 18; i++) {
    times.push(i < 10 ? `0${i}:00` : `${i}:00`);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const localDate = new Date(date);
    const [hours, minutes] = time.split(':');
    const dateWithTime = setMinutes(setHours(localDate, Number(hours)), Number(minutes));
    const offset = dateWithTime.getTimezoneOffset();
    const utcDate = addMinutes(dateWithTime, offset).toISOString();
    scheduleAppointment!({ id: appointments.length, date: utcDate, name, phoneNumber, doctorEmail });
    setDate('');
    setName('');
    setPhoneNumber('');
    setDoctorEmail(doctors[0]?.email || '');
    setTime('08:00');
  };


  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Data"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
              required
            />
            <Select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              fullWidth
              sx={{ mt: 2 }}
            >
              {times.map((time, index) => (
                <MenuItem key={index} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <TextField
              label="Telefone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            />
            <Select
              value={doctorEmail}
              onChange={(e) => setDoctorEmail(e.target.value)}
              fullWidth
              required
              sx={{ mt: 2 }}
            >
              {doctors.map((doctor, index) => (
                <MenuItem key={index} value={doctor.email}>
                  {doctor.email}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Agendar
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default ScheduleAppointment;
