import { NAV_LINKS } from '../data/productData.js'

export default function Footer({ waLink, email }) {
  return (
    <footer>
      <div className="w fg">
        <div>
          <div className="logo">
            <img src="/assets/logo.png" alt="InventoryOpz logo" />
            <span>InventoryOpz</span>
          </div>
          <p>InventoryOpz is an inventory management platform for products, stock, purchases, sales, suppliers and reports.</p>
          <p style={{ marginTop: 10 }}>Contact: <a href={`mailto:${email}`}>{email}</a></p>
          <div className="fpower">Powered by Yazhsey Technologies</div>
        </div>
        <div className="fl">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div>
          <a className="btn p" href={waLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
