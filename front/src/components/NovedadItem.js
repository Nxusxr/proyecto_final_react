import "../styles/Novedades.css"

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props

  return (
    <article className="novedad-card">
      {imagen && (
        <div className="novedad-image-wrapper">
          <img src={imagen || "/placeholder.svg"} alt={title} className="novedad-image" />
        </div>
      )}

      <div className="novedad-content">
        <h3 className="novedad-title">{title}</h3>
        {subtitle && <p className="novedad-subtitle">{subtitle}</p>}
        <div className="novedad-body" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </article>
  )
}

export default NovedadItem