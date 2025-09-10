import { useState } from 'react'
import './index.css'

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
  <form onSubmit={handleSubmit}>
    <div>
      Título: <input name="titulo" value={newTitulo} onChange={handleInputChange} required />
    </div>
    <div>
      Descripción: <input name="descripcion" value={newDescripcion} onChange={handleInputChange} required />
    </div>
    <div>
      Localidad: <input name="localidad" value={newLocalidad} onChange={handleInputChange} required />
    </div>
    <div>
      Tipo de Contrato: <input name="tipocontrato" value={newTipocontrato} onChange={handleInputChange} required />
    </div>
    <div>
      Compañía: <input name="compania" value={newCompania} onChange={handleInputChange} required />
    </div>
    <div>
      Fecha: <input name="fecha" value={newFecha} onChange={handleInputChange} required />
    </div>
    <div>
      <button type="submit">Agregar</button>
    </div>
  </form>
)

const EmpresaVista = ({ empresa, handleDelete }) => (
  <ul>
    {empresa.map((e, idx) => (
      <li key={idx}>
        {e.titulo} | {e.descripcion} | {e.localidad} | {e.tipocontrato} | {e.compania} | {e.fecha}
        <button onClick={() => handleDelete(idx)}>Eliminar</button>
      </li>
    ))}
  </ul>
)

const App = () => {
  const [empresa, setEmpresa] = useState([])
  const [newTitulo, setNewTitulo] = useState('')
  const [newDescripcion, setNewDescripcion] = useState('')
  const [newLocalidad, setNewLocalidad] = useState('')
  const [newTipocontrato, setNewTipocontrato] = useState('')
  const [newCompania, setNewCompania] = useState('')
  const [newFecha, setNewFecha] = useState('')

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
    setEmpresa([...empresa, nuevaEmpresa])
    setNewTitulo('')
    setNewDescripcion('')
    setNewLocalidad('')
    setNewTipocontrato('')
    setNewCompania('')
    setNewFecha('')
  }

  const handleDelete = (idx) => {
    setEmpresa(empresa.filter((_, i) => i !== idx))
  }

  return (
    <div>
      <h3>Agregar Nueva Empresa</h3>
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

      <h2>Empresas Agregadas</h2>
      <EmpresaVista empresa={empresa} handleDelete={handleDelete} />
    
    </div>
  )
}

export default App
