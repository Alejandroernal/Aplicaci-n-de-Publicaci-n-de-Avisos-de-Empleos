// Componente de la página de inicio
import '../index.css'
import { Link } from "react-router-dom"

const Inicio = () => (
  <div>
    <h1>Aplicación de Publicación de Avisos de Empleo</h1>
    {/* Botones de navegación */}
    <div className="botones-container">
      <Link to="/listempresas"><button className="boton-funcional">Listar empresas</button></Link>
      <Link to="/busquedas"><button className="boton-funcional">Buscar empresas</button></Link>
      <Link to="/crear-aviso"><button className="boton-funcional">Crear aviso</button></Link>
      <Link to="/avisos"><button className="boton-funcional">Ver avisos</button></Link>
    </div>
    {/* Puedes agregar una breve descripción aquí si quieres */}
  </div>
)

export default Inicio