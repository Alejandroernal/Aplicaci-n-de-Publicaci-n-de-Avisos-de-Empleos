//Lista de avisos, recibe props desde ListEmpresas y BusquedaEmpresa

// Lista de avisos con filtro y botón de detalle
import { Link } from "react-router-dom"

const AvisoList = ({ avisos, onDelete }) => (
  <div className="empresa-list">
    {avisos.map(a => (
      <div className="empresa-card" key={a.id}>
        <strong>{a.titulo}</strong>
        <p>{a.descripcion}</p>
        <p><b>Ubicación:</b> {a.ubicacion}</p>
        <p><b>Tipo de Contrato:</b> {a.tipodecontrato}</p>
        <p><b>Empresa:</b> {a.empresa?.nombre || a.empresa_id}</p>
        <p><b>Fecha:</b> {a.fecha}</p>
        <Link to={`/avisos/${a.id}`}><button>Ver detalle</button></Link>
        {onDelete && (
          <button onClick={() => onDelete(a.id)}>Eliminar</button>
        )}
      </div>
    ))}
  </div>
)

export default AvisoList