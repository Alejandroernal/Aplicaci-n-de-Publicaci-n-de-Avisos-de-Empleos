//Página para listar y gestionar avisos de empleo

// Página para listar avisos
// Página para listar avisos
import { useState, useEffect } from "react"
import { getAvisos, deleteAviso } from "../services/avisoService"
import AvisoList from "../components/avisoList"
import { Link } from "react-router-dom"

const Avisos = () => {
  const [avisos, setAvisos] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    getAvisos().then(res => setAvisos(res.data))
  }, [])

  // Filtra avisos por ubicación o tipo de contrato
  const avisosFiltrados = avisos.filter(a =>
    a.ubicacion.toLowerCase().includes(filtro.toLowerCase()) ||
    a.tipodecontrato.toLowerCase().includes(filtro.toLowerCase())
  )

  const handleDelete = (id) => {
    deleteAviso(id).then(() => setAvisos(avisos.filter(a => a.id !== id)))
  }

  return (
    <div>
      <h2>Listado de Avisos</h2>
      <input
        type="text"
        placeholder="Filtrar por ubicación o tipo de contrato..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="input-busqueda"
      />
      <AvisoList avisos={avisosFiltrados} onDelete={handleDelete} />
      <Link to="/inicio"><button className="boton-funcional">Volver al inicio</button></Link>
    </div>
  )
}

export default Avisos