'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import '../styles/Nav.css'; // Importamos los estilos para la navegación

export default function Nav() {
  // Hook de Next.js para obtener la ruta actual (requiere 'use client')
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/novedades', label: 'Novedades' },
    { href: '/contacto', label: 'Contacto' },
  ];

  // Función para determinar si el link está activo
  const isActive = (href) => pathname === href;

  return (
    <nav>
      <div className="holder">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href} className="nav-item">
              <Link 
                href={link.href} 
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
