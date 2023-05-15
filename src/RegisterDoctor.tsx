// src/RegisterDoctor.tsx
import React, { useContext, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import { Doctor } from './types';
import { TextField, Button, Card, Container } from '@mui/material';
import { Box } from '@mui/system';

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
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
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
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Registrar
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default RegisterDoctor;
