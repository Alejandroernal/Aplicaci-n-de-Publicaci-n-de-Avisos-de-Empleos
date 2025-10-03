//Formulario para crear/editar empresas

// Formulario para crear una empresa
import { useState } from 'react'

const EmpresaForm = ({ onAdd }) => {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [website, setWebsite] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ nombre, descripcion, website, email })
    setNombre('')
    setDescripcion('')
    setWebsite('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="empresa-form">
      <div>
        <label>Nombre:</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <input value={descripcion} onChange={e => setDescripcion(e.target.value)} />
      </div>
      <div>
        <label>Website:</label>
        <input value={website} onChange={e => setWebsite(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
      </div>
      <button type="submit">Agregar Empresa</button>
    </form>
  )
}

export default EmpresaForm