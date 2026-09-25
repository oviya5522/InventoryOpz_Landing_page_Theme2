import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductIntro from './components/ProductIntro.jsx'
import ProductTour from './components/ProductTour.jsx'
import WhyInventory from './components/WhyInventory.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import DemoVideo from './components/DemoVideo.jsx'
import ProductShowcase from './components/ProductShowcase.jsx'
import PurchaseWorkflow from './components/PurchaseWorkflow.jsx'
import ClientProof from './components/ClientProof.jsx'
import Pricing from './components/Pricing.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingDock from './components/FloatingDock.jsx'
import { SECTION_IDS } from './data/productData.js'

// --- Update these two constants to change contact details site-wide ---
const WHATSAPP_NUMBER = '917373114666' // +91 73731 14666, digits only
const WHATSAPP_MESSAGE = "Hi, I'm interested in InventoryOpz"
const CONTACT_EMAIL = 'YazhSeytech@gmail.com'
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function App() {
  const [tourIndex, setTourIndex] = useState(0)
  const [mode, setMode] = useState('light')
  const [activeSection, setActiveSection] = useState('')

  // restore saved theme
  useEffect(() => {
    let saved = 'light'
    try {
      saved = localStorage.getItem('opz-mode') || 'light'
    } catch (e) {
      /* storage unavailable */
    }
    setMode(saved)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
  }, [mode])

  function toggleMode() {
    setMode((m) => {
      const next = m === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('opz-mode', next)
      } catch (e) {
        /* storage unavailable */
      }
      return next
    })
  }

  // highlight active nav link while scrolling
  useEffect(() => {
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  function goToTour(i) {
    setTourIndex(i)
  }

  return (
    <>
      <Navbar waLink={WA_LINK} mode={mode} onToggleMode={toggleMode} activeSection={activeSection} />
      <Hero waLink={WA_LINK} />
      <ProductIntro onSelect={goToTour} />
      <ProductTour active={tourIndex} setActive={setTourIndex} />
      <PurchaseWorkflow />
      <WhyInventory />
      <HowItWorks />
      <WhoItsFor />
      <DemoVideo />
      <ProductShowcase />
      <ClientProof />
      <Pricing waLink={WA_LINK} />
      <FinalCTA waLink={WA_LINK} />
      <Footer waLink={WA_LINK} email={CONTACT_EMAIL} />
      <FloatingDock waLink={WA_LINK} />
    </>
  )
}
