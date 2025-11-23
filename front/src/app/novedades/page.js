import "../globals.css"
import "../../styles/Novedades.css"
import NovedadItem from "@/components/NovedadItem"

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/novedades`

async function getNovedades() {
  try {
    const data = await fetch(API_URL, { cache: "no-store" })
    const novedades = await data.json()
    return novedades
  } catch (error) {
    console.error("Error al fetchear novedades:", error)
    return []
  }
}

export default async function NovedadesPage() {
  const novedades = await getNovedades()

  return (
    <div className="main-content">
      <section className="holder">
        <h2 className="novedades-header">Novedades</h2>

        <div className="novedades-grid">
          {novedades.length > 0 ? (
            novedades.map((item) => (
              <NovedadItem
                key={item.id}
                title={item.titulo}
                subtitle={item.subtitulo}
                imagen={item.imagen}
                body={item.cuerpo}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%", color: "rgba(255,255,255,0.6)" }}>
              No hay novedades para mostrar.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}