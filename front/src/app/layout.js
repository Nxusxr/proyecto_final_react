import Nav from '@/components/Nav';
import '../styles/globals.css';

// Metadatos para Next.js 13+
export const metadata = {
  title: 'Itinerarios App',
  description: 'Gestión de tareas y planificación diaria.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Componente de Navegación Global */}
        <Nav /> 
        
        {/* Contenido de la página actual (pages/*.js) */}
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
