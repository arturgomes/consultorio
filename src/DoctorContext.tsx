// src/DoctorContext.tsx
import React, { createContext, useState } from 'react';
import { Doctor, Appointment } from './types';

interface ContextProps {
  doctors: Doctor[];
  appointments: Appointment[];
  addDoctor: (doctor: Doctor) => void;
  scheduleAppointment: (appointment: Appointment) => void;
}

export const DoctorContext = createContext<Partial<ContextProps>>({});

export const DoctorProvider: React.FC = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addDoctor = (doctor: Doctor) => setDoctors([...doctors, doctor]);

  const scheduleAppointment = (appointment: Appointment) => setAppointments([...appointments, appointment]);

  return (
    <DoctorContext.Provider value={{ doctors, appointments, addDoctor, scheduleAppointment }}>
      {children}
    </DoctorContext.Provider>
  );
};
