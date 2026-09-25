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

          <p>
            InventoryOpz is an inventory management platform for products,
            stock, purchases, sales, suppliers and reports.
          </p>

          <p style={{ marginTop: 10 }}>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          <p style={{ marginTop: 6 }}>
            <strong>Project Enquiries:</strong>{' '}
            <a href="mailto:project@yazhsey.in">
              project@yazhsey.in
            </a>
          </p>

          <p style={{ marginTop: 6 }}>
            <strong>Registered Office:</strong> Dindigul, Tamil Nadu – 624706
          </p>

          <div className="fpower">
            Powered by Yazhsey Technologies
          </div>
        </div>

        <div className="fl">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <a
            className="btn p"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}