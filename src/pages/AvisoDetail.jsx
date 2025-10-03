// Muestra el detalle de un aviso
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAvisoById } from "../services/avisoService";

const AvisoDetail = () => {
  const { id } = useParams();
  const [aviso, setAviso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAvisoById(id)
      .then(res => {
        setAviso(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching aviso:', err);
        setError('Aviso no encontrado o error en servidor');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error || !aviso) return <div>{error || 'Aviso no encontrado'}</div>;

  return (
    <div>
      <h2>{aviso.titulo}</h2>
      <p><b>Descripción:</b> {aviso.descripcion}</p>
      <p><b>Ubicación:</b> {aviso.ubicacion}</p>
      <p><b>Tipo de Contrato:</b> {aviso.tipodecontrato}</p>
      <p><b>Empresa:</b> {aviso.empresa?.nombre || aviso.empresa_id}</p>
      <p><b>Fecha:</b> {aviso.fecha}</p>
      <Link to="/avisos">
        <button className="boton-funcional">Volver al listado</button>
      </Link>
    </div>
  );
};

export default AvisoDetail;
