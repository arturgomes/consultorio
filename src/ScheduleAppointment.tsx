// src/ScheduleAppointment.tsx
import React, { useContext, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import { Appointment } from './types';

const ScheduleAppointment: React.FC = () => {
  const { doctors, scheduleAppointment } = useContext(DoctorContext);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorEmail, setDoctorEmail] = useState(doctors[0]?.email || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scheduleAppointment!({ date, name, phoneNumber, doctorEmail });
    setDate('');
    setName('');
    setPhoneNumber('');
    setDoctorEmail(doctors[0]?.email || '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <select value={doctorEmail} onChange={(e) => setDoctorEmail(e.target.value)} required>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.email}>
            {doctor.email}
          </option>
        ))}
      </select>
      <button type="submit">Schedule</button>
    </form>
  );
};

export default ScheduleAppointment;
