// Lista de empresas con opción de eliminar
const EmpresaList = ({ empresas, onDelete }) => (
  <div className="empresa-list">
    {empresas.map(e => (
      <div className="empresa-card" key={e.empresa_id}>
        <strong>{e.nombre}</strong>
        <p>{e.descripcion}</p>
        {onDelete && (
          <button onClick={() => onDelete(e.empresa_id)}>Eliminar</button>
        )}
      </div>
    ))}
  </div>
)

export default EmpresaList