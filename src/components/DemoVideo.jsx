import Reveal from './Reveal.jsx'

export default function DemoVideo() {
  return (
    <section id="demo" className="dark">
      <div className="w" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="lbl">Product Demo</span>
          <h2>See InventoryOpz in Action</h2>
          <p className="lead" style={{ margin: '18px auto 0' }}>Take a closer look at the product and its inventory workflows.</p>
        </Reveal>
        <Reveal as="div" className="vid">
          <video className="demo-video" controls playsInline preload="metadata" src="/assets/inventory-demo.mp4" />
        </Reveal>
      </div>
    </section>
  )
}
