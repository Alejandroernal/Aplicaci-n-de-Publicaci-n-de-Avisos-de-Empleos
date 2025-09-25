import '../index.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'





const EmpresaVista = ({ empresa, handleDelete }) => (
  <div className="empresa-list">
    {empresa.map((e, idx) => (
      <div className="empresa-card" key={e.id}>
        <strong>{e.compania}</strong>
        <p>{e.descripcion}</p>
        <p><b>Localidad:</b> {e.localidad}</p>
        <p><b>Tipo de Contrato:</b> {e.tipocontrato}</p>
        <p><b>Titulo del puesto:</b> {e.titulo}</p>
        <p><b>Fecha:</b> {e.fecha}</p>
        <button onClick={() => handleDelete(e.id)}>Eliminar</button>
      </div>
    ))}
  </div>
)

const Busquedaempresas = () => {
  const [empresa, setEmpresa] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/empresa')
      .then(res => setEmpresa(res.data))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/empresa/${id}`)
      .then(() => setEmpresa(empresa.filter(e => e.id !== id)))
  }

  const empresasFiltradas = empresa.filter(e =>
    e.compania.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>
      <h2>Empresas Agregadas</h2>

      <input
        type="text"
        className='input-busqueda'
        placeholder="Buscar empresa..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <EmpresaVista empresa={empresasFiltradas} handleDelete={handleDelete} />

      <div className="botones-container">
        <Link to="/listempresas"><button type="button" className='boton-funcional'>Listas de empresas</button></Link>
      <Link to="/inicio"><button type="button" className='boton-funcional'>Volver al Inicio</button></Link>
</div>
    </div>
  )
}

export default Busquedaempresas
