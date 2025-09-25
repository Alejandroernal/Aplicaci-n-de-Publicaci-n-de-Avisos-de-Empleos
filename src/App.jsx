import { Routes, Route } from "react-router-dom";
import ListEmpresas from './pages/ListEmpresas.jsx'
import Inicio from './pages/inicio.jsx'
import Busquedaempresas from "./pages/BusquedaEmpresa.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/listempresas" element={<ListEmpresas />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/busquedas" element={<Busquedaempresas />} />
      </Routes>
    </div>
  )
}

export default App
