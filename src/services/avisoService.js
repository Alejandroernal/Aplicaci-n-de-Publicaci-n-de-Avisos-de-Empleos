// Servicio para gestionar avisos de empleo

// Funciones para consumir la API de avisos
import axios from 'axios'
const API = 'http://localhost:3000/avisos'

export const getAvisos = () => axios.get(API)
export const addAviso = (aviso) => axios.post(API, aviso)
export const deleteAviso = (id) => axios.delete(`${API}/${id}`)
export const getAvisoById = (id) => axios.get(`${API}/${id}`)