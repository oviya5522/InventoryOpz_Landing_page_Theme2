import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '../data/productData.js'

export default function Navbar({ waLink, mode, onToggleMode, activeSection }) {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="w nb">
        <a href="#top" className="logo" aria-label="InventoryOpz">
          <img src="/assets/logo.png" alt="InventoryOpz logo" />
          <span>InventoryOpz</span>
        </a>

        <div className="links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={activeSection === l.href.slice(1) ? 'on' : ''}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="navr">
          <button className="mode-tg" onClick={onToggleMode} aria-label="Toggle dark mode" title="Toggle dark / light mode">
            {mode === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="btn p" href={waLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="btn p" style={{ marginTop: 18, justifyContent: 'center' }} href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          Chat on WhatsApp
        </a>
      </div>
    </nav>
  )
}
