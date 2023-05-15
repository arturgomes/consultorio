// src/RegisterDoctor.tsx
import React, { useContext, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import { Doctor } from './types';

const RegisterDoctor: React.FC = () => {
  const { addDoctor } = useContext(DoctorContext);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDoctor!({ email, phoneNumber });
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterDoctor;
