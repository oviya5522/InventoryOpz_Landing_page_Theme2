import Reveal from './Reveal.jsx'

export default function ClientProof() {
  return (
    <section id="clients" className="soft">
      <div className="w">
        <Reveal style={{ textAlign: 'center' }}>
          <span className="lbl">Live Clients</span>
          <h2>Trusted by Businesses</h2>
        </Reveal>
        <Reveal as="div" className="cl1">
          <div className="clogo">
            <img src="/assets/client-bdb.png" alt="Bond Building Products Pte Ltd logo" />
          </div>
          <div>
            <b>Live Client</b>
            <h3>Bond Building Products Pte Ltd</h3>
            <p>Runs its factory stock, procurement and supplier operations on InventoryOpz.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
