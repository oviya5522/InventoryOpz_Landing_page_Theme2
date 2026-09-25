import Reveal from './Reveal.jsx'
import { WHO_FOR } from '../data/productData.js'

export default function WhoItsFor() {
  return (
    <section className="soft">
      <div className="w">
        <Reveal>
          <span className="lbl">Who It's For</span>
          <h2 style={{ maxWidth: 800 }}>Built for Businesses That Move Products.</h2>
        </Reveal>
        <Reveal as="div" className="wl">
          {WHO_FOR.map((label, i) => (
            <div key={label}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{label}</h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
