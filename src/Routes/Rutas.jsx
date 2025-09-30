import { Routes, Route, Navigate } from "react-router-dom";
import ListEmpresas from '../pages/ListEmpresas.jsx'
import Inicio from '../pages/inicio.jsx'
import Busquedaempresas from "../pages/BusquedaEmpresa.jsx";

const Rutas = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/inicio" />} />
    <Route path="/inicio" element={<Inicio />} />
    <Route path="/listempresas" element={<ListEmpresas />} />
    <Route path="/busquedas" element={<Busquedaempresas />} />
  </Routes>
);

export default Rutas;