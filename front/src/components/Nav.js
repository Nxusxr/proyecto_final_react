'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import '../styles/Nav.css';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio", icon: "fa-house" },
    { href: "/nosotros", label: "Nosotros", icon: "fa-user" },
    { href: "/novedades", label: "Novedades", icon: "fa-newspaper" },
    { href: "/contacto", label: "Contacto", icon: "fa-envelope" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav className={`modern-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        
        {/* Marca / Logo */}
        <div className="nav-brand">
          <Link href="/" className="brand-link">
            <i className="fa-solid fa-route brand-icon"></i>
            <span className="brand-text">Itinerarios</span>
          </Link>
        </div>

        {/* Menú Escritorio */}
        <ul className="desktop-nav">
          {links.map((link) => (
            <li key={link.href} className="nav-item">
              <Link
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                <i className={`fa-solid ${link.icon} nav-icon`}></i>
                <span>{link.label}</span>
                {/* Línea indicadora animada */}
                {isActive(link.href) && <span className="active-indicator"></span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón Menú Móvil */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Menú Móvil Desplegable */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className={`fa-solid ${link.icon} nav-icon`}></i>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}