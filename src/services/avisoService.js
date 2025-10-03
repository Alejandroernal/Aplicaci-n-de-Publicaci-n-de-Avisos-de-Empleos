// Servicio para gestionar avisos de empleo
import axios from 'axios';
const API = 'http://localhost:3000/api/avisos'; // Consistente: puerto 3000

export const getAvisos = () => axios.get(API).catch(err => {
  console.error('Error fetching avisos:', err);
  throw err;
});

export const addAviso = (aviso) => {
  console.log('Enviando datos al backend:', aviso); // Log para debug: ver qué se envía
  return axios.post(API, aviso).catch(err => {
    console.error('Error adding aviso:', err.response?.data || err.message);
    throw err; // Re-lanza para manejo en componente
  });
};

export const deleteAviso = (id) => axios.delete(`${API}/${id}`).catch(err => {
  console.error('Error deleting aviso:', err);
  throw err;
});

export const getAvisoById = (id) => axios.get(`${API}/${id}`).catch(err => {
  console.error('Error fetching aviso by ID:', err);
  throw err;
});
