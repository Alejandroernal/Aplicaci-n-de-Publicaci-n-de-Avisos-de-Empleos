//Lista de avisos, recibe props desde ListEmpresas y BusquedaEmpresa

// Lista de avisos con filtro y botón de detalle
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const AvisoList = ({ avisos, onDelete }) => {

  const { id } = useParams();
  const [aviso, setAviso] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/api/avisos/${id}`)
      .then(res => {
        setAviso(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <div className="text-center py-8">Cargando...</div>;
  if (!aviso) return <div className="text-center py-8">Aviso no encontrado</div>;


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
};

export default AvisoList