import { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'
import { Link } from "react-router-dom";


const Empresa = ({
  newTitulo,
  newDescripcion,
  newLocalidad,
  newTipocontrato,
  newCompania,
  newFecha,
  handleInputChange,
  handleSubmit,
}) => (
  <form className="empresa-form" onSubmit={handleSubmit}>
    <div>
      <label>Título del puesto:</label>
      <input name="titulo" value={newTitulo} onChange={handleInputChange} required />
    </div>
    <div>
      <label>Descripción:</label>
      <input name="descripcion" value={newDescripcion} onChange={handleInputChange} required />
    </div>
    <div>
      <label>Localidad:</label>
      <input name="localidad" value={newLocalidad} onChange={handleInputChange} required />
    </div>
    <div>
      <label>Tipo de Contrato:</label>
      <input name="tipocontrato" value={newTipocontrato} onChange={handleInputChange} required />
    </div>
    <div>
      <label>Empresa:</label>
      <input name="compania" value={newCompania} onChange={handleInputChange} required />
    </div>
    <div>
      <label>Fecha:</label>
      <input name="fecha" value={newFecha} onChange={handleInputChange} required />
    </div>
    <div>
      <button type="submit">Agregar</button>
    </div>
  </form>
)

const EmpresaVista = ({ empresa, handleDelete }) => (
  <div className="empresa-list">
    {empresa.map((e, idx) => (
      <div className="empresa-card" key={e.id}>
        <strong>{e.titulo}</strong>
        <p>{e.descripcion}</p>
        <p><b>Localidad:</b> {e.localidad}</p>
        <p><b>Tipo de Contrato:</b> {e.tipocontrato}</p>
        <p><b>Compañía:</b> {e.compania}</p>
        <p><b>Fecha:</b> {e.fecha}</p>
        <button onClick={() => handleDelete(e.id)}>Eliminar</button>
      </div>
    ))}
  </div>
)

const ListEmpresas = () => {
  const [empresa, setEmpresa] = useState([])
  const [newTitulo, setNewTitulo] = useState('')
  const [newDescripcion, setNewDescripcion] = useState('')
  const [newLocalidad, setNewLocalidad] = useState('')
  const [newTipocontrato, setNewTipocontrato] = useState('')
  const [newCompania, setNewCompania] = useState('')
  const [newFecha, setNewFecha] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/empresa')
      .then(res => setEmpresa(res.data))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'titulo') setNewTitulo(value)
    if (name === 'descripcion') setNewDescripcion(value)
    if (name === 'localidad') setNewLocalidad(value)
    if (name === 'tipocontrato') setNewTipocontrato(value)
    if (name === 'compania') setNewCompania(value)
    if (name === 'fecha') setNewFecha(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevaEmpresa = {
      titulo: newTitulo,
      descripcion: newDescripcion,
      localidad: newLocalidad,
      tipocontrato: newTipocontrato,
      compania: newCompania,
      fecha: newFecha,
    }
    axios.post('http://localhost:3000/empresa', nuevaEmpresa)
      .then(res => setEmpresa([...empresa, res.data]))
    setNewTitulo('')
    setNewDescripcion('')
    setNewLocalidad('')
    setNewTipocontrato('')
    setNewCompania('')
    setNewFecha('')
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/empresa/${id}`)
      .then(() => setEmpresa(empresa.filter(e => e.id !== id)))
  }

  return (
    <div>
      <h1>Agregar Nuevo Aviso de Empleos</h1>
      <Empresa
        newTitulo={newTitulo}
        newDescripcion={newDescripcion}
        newLocalidad={newLocalidad}
        newTipocontrato={newTipocontrato}
        newCompania={newCompania}
        newFecha={newFecha}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      <h2>Avisos Registrados</h2>
      <EmpresaVista empresa={empresa} handleDelete={handleDelete} />
      <div className='botones-container'>
      <Link to="/inicio"><button type="button" className='boton-funcional'>Volver al Inicio</button></Link>
      </div>
    </div>
  )
}

export default ListEmpresas
