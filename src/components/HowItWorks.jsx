import Reveal from './Reveal.jsx'
import { HOW_IT_WORKS } from '../data/productData.js'

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="w">
        <Reveal>
          <span className="lbl">How It Works</span>
          <h2>Four steps to a clearer operation.</h2>
        </Reveal>
        <Reveal as="div" className="tlw">
          {HOW_IT_WORKS.map((s) => (
            <div className="st" key={s.n}>
              <div className="d">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
