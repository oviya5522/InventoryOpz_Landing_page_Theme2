import Reveal from './Reveal.jsx'
import { INDEX_ITEMS } from '../data/productData.js'

export default function ProductIntro({ onSelect }) {
  return (
    <section id="intro">
      <Reveal className="w">
        <span className="lbl">The Platform</span>
        <h2 style={{ maxWidth: 860 }}>One platform. A clearer view of your inventory operations.</h2>
        <div className="ix">
          {INDEX_ITEMS.map((item, i) => (
            <a key={item.n} href="#tour" onClick={() => onSelect(i)}>
              <span className="n">{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
