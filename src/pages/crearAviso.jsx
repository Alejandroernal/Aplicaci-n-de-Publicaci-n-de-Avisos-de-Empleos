// Página para crear avisos
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Agrega useNavigate para redirigir
import { getEmpresas } from "../services/empresaService";
import { addAviso } from "../services/avisoService";
import AvisoForm from "../components/avisoForm";

const CrearAviso = () => {
  const [empresas, setEmpresas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmpresas()
      .then(res => setEmpresas(res.data))
      .catch(err => console.error('Error fetching empresas:', err));
  }, []);

  const handleAdd = async (aviso) => {
    try {
      await addAviso(aviso); // Espera y maneja error si 500
      alert("Aviso creado correctamente");
      navigate("/avisos"); // Redirige a lista de avisos
    } catch (err) {
      // Maneja el 500: Muestra mensaje amigable
      const errorMsg = err.response?.data?.error || err.message || 'Error interno del servidor. Verifica los datos.';
      alert(`Error al crear aviso: ${errorMsg}`);
      console.error('Error en handleAdd:', err);
    }
  };

  return (
    <div>
      <h2>Crear Aviso de Empleo</h2>
      <AvisoForm empresas={empresas} onAdd={handleAdd} />
      <Link to="/inicio">
        <button className="boton-funcional">Volver al inicio</button>
      </Link>
    </div>
  );
};

export default CrearAviso;
