import { useState } from 'react';
import './Navabr.css';

const links = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact']
];

export default function Navabr() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="NovaTech home">
          <span className="brand-mark">N</span>
          <span>Nova<span className="brand-accent">Tech</span></span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>

        <a className="button button-small nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
