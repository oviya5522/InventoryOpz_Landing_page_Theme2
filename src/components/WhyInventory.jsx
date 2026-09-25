import Reveal from './Reveal.jsx'

export default function WhyInventory() {
  return (
    <section id="why" className="dark">
      <div className="w">
        <Reveal>
          <span className="lbl">Why InventoryOpz</span>
          <h2 style={{ maxWidth: 800 }}>Why would a business need a central inventory system?</h2>
        </Reveal>
        <Reveal as="div" className="wg">
          <div className="wo">
            <h3 style={{ color: '#7b8794' }}>Without a centralized inventory system</h3>
            <ul>
              <li>Spreadsheet-heavy workflows</li>
              <li>Manual updates</li>
              <li>Scattered information</li>
              <li>Limited visibility</li>
            </ul>
          </div>
          <div className="wm" />
          <div className="wi">
            <h3 style={{ color: 'var(--acc)' }}>With InventoryOpz</h3>
            <ul>
              <li>Centralized operations</li>
              <li>Organized information</li>
              <li>Better visibility</li>
              <li>Streamlined inventory workflows</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
