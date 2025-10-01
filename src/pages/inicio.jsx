//Página de inicio con enlaces a las funcionalidades principales
import '../index.css'
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <h1>Aplicación de Publicación de Avisos de Empleo</h1>

     <div className='botones-container'>
      <Link to="/listempresas"><button type="button" className='boton-funcional'>Agregar Avisos</button></Link>
      <Link to="/busquedas"><button type="button" className='boton-funcional'>Buscar empresas</button></Link>
    </div>
    
    </div>
  )
}

export default Inicio
