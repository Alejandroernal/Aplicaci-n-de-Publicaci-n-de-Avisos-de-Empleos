// Página para buscar y listar empresas
// Página para buscar y listar empresas
import { useState, useEffect } from "react"
import { getEmpresas, deleteEmpresa } from "../services/empresaService"
import EmpresaList from "../components/empresaList"
import { Link } from "react-router-dom"

const BusquedaEmpresa = () => {
  const [empresas, setEmpresas] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    getEmpresas().then(res => setEmpresas(res.data))
  }, [])

  const handleDelete = (empresa_id) => {
    deleteEmpresa(empresa_id).then(() => setEmpresas(empresas.filter(e => e.empresa_id !== empresa_id)))
  }

  // Filtra empresas por nombre
  const empresasFiltradas = empresas.filter(e =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )
  
  return (
    <div>
      <h2>Buscar Empresas</h2>
      <input
        type="text"
        placeholder="Buscar empresa por nombre..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        className="input-busqueda"
      />
      <EmpresaList empresas={empresasFiltradas} onDelete={handleDelete} />
      <Link to="/inicio"><button className="boton-funcional">Volver al inicio</button></Link>
    </div>
  )
}

export default BusquedaEmpresa