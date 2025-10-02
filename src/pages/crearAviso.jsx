//Página para crear un nuevo aviso de empleo

// Página para crear avisos
// Página para crear avisos
import { useState, useEffect } from "react"
import { getEmpresas } from "../services/empresaService"
import { addAviso } from "../services/avisoService"
import AvisoForm from "../components/avisoForm"
import { Link } from "react-router-dom"

const CrearAviso = () => {
  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    getEmpresas().then(res => setEmpresas(res.data))
  }, [])

  const handleAdd = (aviso) => {
    addAviso(aviso)
    alert("Aviso creado correctamente")
  }

  return (
    <div>
      <h2>Crear Aviso de Empleo</h2>
      <AvisoForm empresas={empresas} onAdd={handleAdd} />
      <Link to="/inicio"><button className="boton-funcional">Volver al inicio</button></Link>
    </div>
  )
}

export default CrearAviso