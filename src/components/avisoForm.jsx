//Formulario para crear avios de empleo

// Formulario para crear un aviso de empleo
import { useState } from 'react'

const AvisoForm = ({ empresas, onAdd }) => {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  const [tipodecontrato, setTipodecontrato] = useState('')
  const [empresa_id, setEmpresaId] = useState('')
  const [fecha, setFecha] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ titulo, descripcion, ubicacion, tipodecontrato, empresa_id, fecha: fecha || new Date().toISOString().slice(0,10) })
    setTitulo('')
    setDescripcion('')
    setUbicacion('')
    setTipodecontrato('')
    setEmpresaId('')
    setFecha('')
  }

  return (
    <form onSubmit={handleSubmit} className="empresa-form">
      <div>
        <label>Título:</label>
        <input value={titulo} onChange={e => setTitulo(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input value={descripcion} onChange={e => setDescripcion(e.target.value)} required />
      </div>
      <div>
        <label>Ubicación:</label>
        <input value={ubicacion} onChange={e => setUbicacion(e.target.value)} required />
      </div>
      <div>
        <label>Tipo de Contrato:</label>
        <select value={tipodecontrato} onChange={e => setTipodecontrato(e.target.value)} required>
          <option value="">Selecciona un tipo de contrato</option>
          <option value="full-time">Tiempo Completo</option>
          <option value="part-time">Tiempo Parcial</option>
          <option value="freelance">Freelance</option>
        </select>
      </div>
      <div>
        <label>Empresa:</label>
        <input value={empresa_id} onChange={e => setEmpresaId(e.target.value)} required list="empresas-list" />
      </div>
      <div>
        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
      </div>
      <button type="submit" onClick={handleSubmit}>Agregar Aviso</button>
    </form>
  )
}

export default AvisoForm