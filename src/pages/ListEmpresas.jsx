// Página para agregar empresas
// Página para agregar empresas y mostrar mensaje de éxito
import { useState, useEffect } from "react"
import { addEmpresa, getEmpresas, deleteEmpresa } from "../services/empresaService"
import EmpresaForm from "../components/empresaForm"
import EmpresaList from "../components/empresaList"
import { Link } from "react-router-dom"

const ListEmpresas = () => {
  const [empresas, setEmpresas] = useState([])

  useEffect(() => {
    getEmpresas().then(res => setEmpresas(res.data))
  }, [])

  const handleAdd = (empresa) => {
    addEmpresa(empresa).then(res => setEmpresas([...empresas, res.data]))
  }

  const handleDelete = (empresa_id) => {
    deleteEmpresa(empresa_id).then(() => setEmpresas(empresas.filter(e => e.empresa_id !== empresa_id)))
  }

  return (
    <div>
      <h2>Agregar Nueva Empresa</h2>
      <EmpresaForm onAdd={handleAdd} />
      <h2>Empresas</h2>
      <EmpresaList empresas={empresas} onDelete={handleDelete} />
      <Link to="/inicio"><button className="boton-funcional">Volver al inicio</button></Link>
    </div>
  )
}

export default ListEmpresas