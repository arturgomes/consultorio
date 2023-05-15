// src/types.ts
export interface Doctor {
  email: string;
  phoneNumber: string;
}

export interface Appointment {
  date: string;
  name: string;
  phoneNumber: string;
  doctorEmail: string;
}
