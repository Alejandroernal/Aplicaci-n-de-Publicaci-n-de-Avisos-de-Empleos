// Servicio para gestionar empresas

import axios from 'axios'
const API = 'http://localhost:3000/empresas'

export const getEmpresas = () => axios.get(API)
export const addEmpresa = (empresa) => axios.post(API, empresa)
export const deleteEmpresa = (id) => axios.delete(`${API}/${id}`)