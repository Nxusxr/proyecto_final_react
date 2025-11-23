import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

// Configuración de la fuente Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Itinerarios App | Gestión Inteligente",
  description: "Gestión de tareas y planificación diaria moderna.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}