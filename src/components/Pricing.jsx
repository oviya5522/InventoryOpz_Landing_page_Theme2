import Reveal from './Reveal.jsx'

export default function Pricing({ waLink }) {
  return (
    <section id="pricing">
      <div className="w pr">
        <Reveal>
          <span className="lbl">Pricing</span>
          <h2>Simple. Clear. Built Around Your Business.</h2>
          <p className="lead" style={{ marginTop: 20 }}>Tell us about your operation and we'll share the right option for you.</p>
        </Reveal>
        <Reveal as="div" className="pb">
          <b>PRICING</b>
          <div className="big">Pricing is tailored to your business size and inventory volume.</div>
          <span className="sub">Chat with us to get a plan built around your operation.</span>
          <a className="btn p" href={waLink} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </Reveal>
      </div>
    </section>
  )
}
