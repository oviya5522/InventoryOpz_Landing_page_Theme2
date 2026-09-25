import Reveal from './Reveal.jsx'
import { TOUR } from '../data/productData.js'

export default function ProductTour({ active, setActive }) {
  const item = TOUR[active]
  return (
    <section id="tour" className="soft">
      <div className="w">
        <Reveal>
          <span className="lbl">Product Tour</span>
          <h2 style={{ maxWidth: 760 }}>Explore what InventoryOpz helps you manage.</h2>
        </Reveal>
        <Reveal as="div" className="tg">
          <div className="tl">
            {TOUR.map((t, i) => (
              <button key={t.title} className={i === active ? 'on' : ''} onClick={() => setActive(i)}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {t.title}
              </button>
            ))}
          </div>
          <div className="tp">
            <div className="in" key={active}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="shot dk">
                <img src={item.img} alt={`${item.title} screenshot`} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
