import Reveal from './Reveal.jsx'

export default function Hero({ waLink }) {
  return (
    <header className="hero" id="top">
      <div className="w">
        <div className="hg">
          <div>
            <span className="lbl">Inventory Management Platform</span>
            <h1>Know Your Inventory. <em>Run Your Business Better.</em></h1>
            <p className="lead">From products and stock to purchases and sales, InventoryOpz brings your inventory operations into one clear, centralized platform.</p>
            <div className="cta">
              <a className="btn p" href="#tour">Explore InventoryOpz</a>
              <a className="btn s" href={waLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
          <div className="frame">
            <img src="/assets/dash-overview.jpg" alt="InventoryOpz dashboard overview" />
          </div>
        </div>
        <div className="strip">
          {['PRODUCTS', 'STOCK', 'PURCHASES', 'SALES', 'SUPPLIERS', 'REPORTS'].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </header>
  )
}
