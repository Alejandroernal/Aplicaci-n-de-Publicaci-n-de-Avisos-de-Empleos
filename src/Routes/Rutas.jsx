//define las rutas de la aplicación
import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from '../pages/inicio.jsx'
import ListEmpresas from '../pages/ListEmpresas.jsx'
import BusquedaEmpresa from '../pages/BusquedaEmpresa.jsx'
import CrearAviso from '../pages/crearAviso.jsx'
import Avisos from '../pages/avisos.jsx'
import AvisoDetail from '../pages/AvisoDetail.jsx'

const Rutas = () => (
  <Routes>
    {/* Redirige la raíz a /inicio */}
    <Route path="/" element={<Navigate to="/inicio" />} />
    {/* Página principal */}
    <Route path="/inicio" element={<Inicio />} />
    {/* Página para agregar empresas */}
    <Route path="/listempresas" element={<ListEmpresas />} />
    {/* Página para buscar empresas */}
    <Route path="/busquedas" element={<BusquedaEmpresa />} />
    {/* Página para crear avisos */}
    <Route path="/crear-aviso" element={<CrearAviso />} />
    {/* Página para listar avisos */}
    <Route path="/avisos" element={<Avisos />} />
    {/* Página de detalle de aviso */}
    <Route path="/avisos/:id" element={<AvisoDetail />} />
  </Routes>
);

export default Rutas;