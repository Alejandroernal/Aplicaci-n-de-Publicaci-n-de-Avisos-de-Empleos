// Lista de avisos con filtro y botón de detalle
import { Link } from 'react-router-dom'; // Solo Link; no useParams ni axios aquí

const AvisoList = ({ avisos, onDelete }) => {
  if (avisos.length === 0) {
    return <div>No hay avisos para mostrar.</div>;
  }

  return (
    <div className="empresa-list">
      {avisos.map(a => (
        <div className="empresa-card" key={a.id}>
          <strong>{a.titulo}</strong>
          <p>{a.descripcion}</p>
          <p><b>Ubicación:</b> {a.ubicacion}</p>
          <p><b>Tipo de Contrato:</b> {a.tipodecontrato}</p>
          <p><b>Empresa:</b> {a.empresa?.nombre || a.empresa_id}</p>
          <p><b>Fecha:</b> {a.fecha}</p>
          <Link to={`/aviso/${a.id}`}> {/* Asume ruta /aviso/:id en tu router */}
            <button>Ver detalle</button>
          </Link>
          {onDelete && (
            <button onClick={() => onDelete(a.id)}>Eliminar</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvisoList;
