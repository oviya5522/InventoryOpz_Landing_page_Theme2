import Reveal from './Reveal.jsx'
import { SHOWCASE } from '../data/productData.js'

export default function ProductShowcase() {
  return (
    <section>
      <div className="w">
        <Reveal>
          <span className="lbl">Screenshots</span>
          <h2>Inside InventoryOpz</h2>
        </Reveal>
        <Reveal as="div" className="sc">
          {SHOWCASE.map((s) => (
            <figure className={s.cls} key={s.cap}>
              <div className="shot">
                <img src={s.img} alt={s.cap} />
              </div>
              <figcaption>{s.cap}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
