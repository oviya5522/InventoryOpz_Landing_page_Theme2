import Reveal from './Reveal.jsx'

export default function FinalCTA({ waLink }) {
  return (
    <div className="fin">
      <Reveal as="div" className="w">
        <h2>Ready to See InventoryOpz in Your Business?</h2>
        <p className="lead">Explore the product or start a conversation with our team.</p>
        <div className="cta">
          <a className="btn p" href={waLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a className="btn s" href="#tour">Explore Product Tour</a>
        </div>
      </Reveal>
    </div>
  )
}
