//Muestra el detalle del aviso seleccionado


// Muestra el detalle de un aviso
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getAvisoById } from "../services/avisoService"

const AvisoDetail = () => {
  const { id } = useParams()
  const [aviso, setAviso] = useState(null)

  useEffect(() => {
    getAvisoById(id).then(res => setAviso(res.data))
  }, [id])

  if (!aviso) return <div>Cargando...</div>

  return (
    <div>
      <h2>{aviso.titulo}</h2>
      <p><b>Descripción:</b> {aviso.descripcion}</p>
      <p><b>Ubicación:</b> {aviso.ubicacion}</p>
      <p><b>Tipo de Contrato:</b> {aviso.tipodecontrato}</p>
      <p><b>Empresa:</b> {aviso.empresa?.nombre || aviso.empresa_id}</p>
      <p><b>Fecha:</b> {aviso.fecha}</p>
      <Link to="/avisos"><button className="boton-funcional">Volver al listado</button></Link>
    </div>
  )
}

export default AvisoDetail