import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'

/* ─────────────────────────────────────────
   TIMING
───────────────────────────────────────── */
const AUTOPLAY_MS = 2000
const MANUAL_PAUSE_MS = 4500

/* ─────────────────────────────────────────
   FACTORY PURCHASE WORKFLOW
───────────────────────────────────────── */
const FACTORY_STEPS = [
  {
    id: 1,
    label: 'DRAFT',
    title: 'New Purchase Request',
    role: 'DRAFTER',
    desc: 'Create and submit the purchase request with the required purchase details.',
    img: '/assets/new-purchase-req.png',
  },
  {
    id: 2,
    label: 'INBOX',
    title: 'Manager Inbox & Notification',
    role: 'MANAGER',
    desc: "The submitted request appears in the manager's inbox with a notification for review.",
    img: '/assets/managar-inbox.png',
  },
  {
    id: 3,
    label: 'APPROVAL',
    title: 'Manager Approval',
    role: 'MANAGER',
    desc: 'The manager reviews the request details and approves the purchase request.',
    img: '/assets/manager-approve-req.png',
  },
  {
    id: 4,
    label: 'PURCHASE',
    title: 'Purchase Approval',
    role: 'PURCHASER',
    desc: 'Once approved, the request moves to the purchasing team for processing.',
    img: '/assets/purchaser-approve-ans send to fic.png',
  },
  {
    id: 5,
    label: 'PO',
    title: 'PO Generated',
    role: 'PURCHASER',
    desc: 'After the required approvals are completed, the purchase order is generated from the approved request.',
    img: '/assets/Po-generated for fic.png',
  },
]


/* ─────────────────────────────────────────
   SUPPLIER PURCHASE WORKFLOW
───────────────────────────────────────── */
const SUPPLIER_STEPS = [
  {
    id: 1,
    label: 'DRAFT',
    title: 'New Purchase Request',
    role: 'DRAFTER',
    desc: 'Create the purchase request and select the supplier for the purchase.',
    img: '/assets/new-request-for-supplier-selection.png',
  },
  {
    id: 2,
    label: 'APPROVAL',
    title: 'Manager Approval',
    role: 'MANAGER',
    desc: 'The manager reviews the supplier request and approves it for quotation.',
    img: '/assets/manager-approve-supplier.png',
  },
  {
    id: 3,
    label: 'QUOTE',
    title: 'Purchaser Quote',
    role: 'PURCHASER',
    desc: "The purchaser enters the supplier's quoted price and prepares the purchase quotation.",
    img: '/assets/purchaser-quote for amt.png',
  },
  {
    id: 4,
    label: 'QUOTE PDF',
    title: 'Purchase Request Quote',
    role: 'PURCHASER',
    desc: 'Review the quotation details before generating the formal quote.',
    img: '/assets/req-quote.png',
  },
  {
    id: 5,
    label: 'SUBMIT',
    title: 'Submit for QO',
    role: 'PURCHASER',
    desc: 'The purchaser submits the quotation for the required price approval.',
    img: '/assets/submit-for-QO.png',
  },
  {
    id: 6,
    label: 'QO APPROVAL',
    title: 'QO Approve Price',
    role: 'QS',
    desc: 'The QS reviews the quoted amount and approves the purchase price.',
    img: '/assets/QO-approve-price.png',
  },
  {
    id: 7,
    label: 'PO',
    title: 'PO Generated',
    role: 'PURCHASER',
    desc: 'Once the price is approved, the purchaser generates the final purchase order.',
    img: '/assets/po-generated-supplier.png',
  },
]


/* ─────────────────────────────────────────
   ROLE STYLES
───────────────────────────────────────── */
const ROLE_META = {
  DRAFTER: {
    bg: 'rgba(30, 143, 128, 0.10)',
    color: '#187d70',
  },

  MANAGER: {
    bg: 'rgba(37, 99, 235, 0.09)',
    color: '#2459c7',
  },

  PURCHASER: {
    bg: 'rgba(180, 83, 9, 0.09)',
    color: '#a04b08',
  },

  QS: {
    bg: 'rgba(124, 58, 237, 0.09)',
    color: '#6930c1',
  },

  SYSTEM: {
    bg: 'rgba(2, 132, 199, 0.09)',
    color: '#0274ae',
  },

  'PURCHASER → QS': {
    bg: 'rgba(157, 23, 77, 0.09)',
    color: '#8b1645',
  },
}


/* ─────────────────────────────────────────
   FACTORY ICON
───────────────────────────────────────── */
function IcoFactory() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="17"
      height="17"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
        clipRule="evenodd"
      />
    </svg>
  )
}


/* ─────────────────────────────────────────
   SUPPLIER ICON
───────────────────────────────────────── */
function IcoSupplier() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="17"
      height="17"
      aria-hidden="true"
    >
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 14.094A5.973 5.973 0 004 17v1H1v-1a3 3 0 013.75-2.906z" />
    </svg>
  )
}


/* ─────────────────────────────────────────
   ARROW ICONS
───────────────────────────────────────── */
function IcoPrev() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 11L5 7l4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IcoNext() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 11l4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function PurchaseWorkflow() {
  const [workflow, setWorkflow] = useState('factory')
  const [step, setStep] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [manualPaused, setManualPaused] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  const sectionRef = useRef(null)
  const intervalRef = useRef(null)
  const resumeRef = useRef(null)

  const steps =
    workflow === 'factory'
      ? FACTORY_STEPS
      : SUPPLIER_STEPS

  const paused = hovered || manualPaused
  const current = steps[step]

  const role =
    ROLE_META[current.role] || {
      bg: '#f1f5f9',
      color: '#64748b',
    }


  /* ─────────────────────────────────────
     AUTOPLAY
  ───────────────────────────────────── */
  useEffect(() => {
    clearInterval(intervalRef.current)

    if (paused) return

    setAnimKey((k) => k + 1)

    intervalRef.current = setInterval(() => {
      const length = steps.length

      setStep((currentStep) => (currentStep + 1) % length)
      setAnimKey((k) => k + 1)
    }, AUTOPLAY_MS)

    return () => clearInterval(intervalRef.current)
  }, [paused, workflow, steps.length])


  /* ─────────────────────────────────────
     HOVER PAUSE
  ───────────────────────────────────── */
  useEffect(() => {
    const element = sectionRef.current

    if (!element) return

    const handleEnter = () => setHovered(true)
    const handleLeave = () => setHovered(false)

    element.addEventListener('mouseenter', handleEnter)
    element.addEventListener('mouseleave', handleLeave)

    return () => {
      element.removeEventListener('mouseenter', handleEnter)
      element.removeEventListener('mouseleave', handleLeave)
    }
  }, [])


  /* ─────────────────────────────────────
     SELECT STEP
  ───────────────────────────────────── */
  function goTo(index) {
    setStep(index)
    setAnimKey((k) => k + 1)
    setManualPaused(true)

    clearTimeout(resumeRef.current)

    resumeRef.current = setTimeout(() => {
      setManualPaused(false)
    }, MANUAL_PAUSE_MS)
  }


  /* ─────────────────────────────────────
     SWITCH WORKFLOW
  ───────────────────────────────────── */
  function switchMode(nextWorkflow) {
    if (nextWorkflow === workflow) return

    clearTimeout(resumeRef.current)

    setWorkflow(nextWorkflow)
    setStep(0)
    setAnimKey((k) => k + 1)
    setManualPaused(false)
  }


  /* ─────────────────────────────────────
     RENDER
  ───────────────────────────────────── */
  return (
    <section
      id="purchase-workflow"
      ref={sectionRef}
      className="purchase-workflow"
    >
      <div className="pw-container">

        {/* ───────── HEADER ───────── */}
        <Reveal>
          <div className="pw-header">

            <div className="pw-eyebrow">
              <span className="pw-eyebrow-dot" />
              Purchase Process
            </div>

            <h2 className="pw-title">
              How Does a Purchase
              <span> Become a PO?</span>
            </h2>

            <p className="pw-subtitle">
              Follow the journey from the first purchase request to the
              final purchase order — with every role and approval clearly
              connected.
            </p>

            <div className="pw-caption">
              <span />
              TWO PURCHASING WORKFLOWS
              <b>·</b>
              ONE CONNECTED PROCESS
              <span />
            </div>

          </div>
        </Reveal>


        {/* ───────── WORKFLOW SWITCHER ───────── */}
        <Reveal>
          <div className="pw-switcher-wrap">
            <div
              className="pw-switcher"
              role="tablist"
              aria-label="Select purchasing workflow"
            >
              <button
                type="button"
                role="tab"
                aria-selected={workflow === 'factory'}
                className={`pw-switch ${workflow === 'factory'
                  ? 'pw-switch-active'
                  : ''
                  }`}
                onClick={() => switchMode('factory')}
              >
                <span className="pw-switch-icon">
                  <IcoFactory />
                </span>

                <span className="pw-switch-text">
                  <strong>Factory Purchase</strong>
                  <small>5 steps</small>
                </span>
              </button>


              <button
                type="button"
                role="tab"
                aria-selected={workflow === 'supplier'}
                className={`pw-switch ${workflow === 'supplier'
                  ? 'pw-switch-active'
                  : ''
                  }`}
                onClick={() => switchMode('supplier')}
              >
                <span className="pw-switch-icon">
                  <IcoSupplier />
                </span>

                <span className="pw-switch-text">
                  <strong>Supplier Purchase</strong>
                  <small>7 steps</small>
                </span>
              </button>
            </div>
          </div>
        </Reveal>


        {/* ───────── MAIN SHOWCASE ───────── */}
        <div className="pw-showcase">

          {/* ───────── STEP NAVIGATION ───────── */}
          <div className="pw-step-header">

            <div className="pw-step-heading">
              <span>WORKFLOW</span>
              <strong>
                {workflow === 'factory'
                  ? 'Factory Purchase'
                  : 'Supplier Purchase'}
              </strong>
            </div>

            <div className="pw-step-count">
              <strong>
                {String(step + 1).padStart(2, '0')}
              </strong>
              <span>
                / {String(steps.length).padStart(2, '0')}
              </span>
            </div>

          </div>


          <div className="pw-stepper">
            {steps.map((item, index) => {
              const active = index === step
              const completed = index < step

              return (
                <button
                  key={`${workflow}-${item.id}`}
                  type="button"
                  className={`pw-step ${active ? 'pw-step-active' : ''
                    } ${completed ? 'pw-step-completed' : ''
                    }`}
                  onClick={() => goTo(index)}
                  aria-current={
                    active ? 'step' : undefined
                  }
                >

                  <span className="pw-step-number">
                    {String(item.id).padStart(2, '0')}
                  </span>

                  <span className="pw-step-label">
                    {item.label}
                  </span>

                  {active && (
                    <span
                      className="pw-progress"
                      aria-hidden="true"
                    >
                      <span
                        key={animKey}
                        className={
                          paused
                            ? 'pw-progress-fill pw-progress-paused'
                            : 'pw-progress-fill'
                        }
                      />
                    </span>
                  )}

                </button>
              )
            })}
          </div>


          {/* ───────── CONTENT ───────── */}
          <div className="pw-content">

            {/* IMAGE */}
            <div className="pw-image-column">

              <div
                key={`image-${workflow}-${step}`}
                className="pw-image-card"
              >
                <div className="pw-image-toolbar">
                  <div className="pw-toolbar-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span>InventoryOpz</span>

                  <div className="pw-toolbar-status">
                    <span />
                    Live workflow
                  </div>
                </div>
                <button
                  type="button"
                  className="pw-image-inner pw-image-button"
                  onClick={() => setImageOpen(true)}
                  aria-label={`View ${current.title} screenshot`}
                >
                  <img
                    src={current.img}
                    alt={`${current.title} — InventoryOpz`}
                    className="pw-image"
                  />

                  <span className="pw-image-expand">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    View full image
                  </span>
                </button>
              </div>

            </div>


            {/* INFORMATION */}
            <div className="pw-info-column">

              <div className="pw-info-top">

                <div className="pw-role-wrap">
                  <span className="pw-role-dot" />

                  <span
                    className="pw-role"
                    style={{
                      backgroundColor: role.bg,
                      color: role.color,
                    }}
                  >
                    {current.role}
                  </span>
                </div>

                <span className="pw-info-number">
                  {String(step + 1).padStart(2, '0')}
                </span>

              </div>


              <div
                key={`info-${workflow}-${step}`}
                className="pw-info-content"
              >

                <span className="pw-info-kicker">
                  STEP {String(step + 1).padStart(2, '0')}
                </span>

                <h3>
                  {current.title}
                </h3>

                <p>
                  {current.desc}
                </p>

              </div>


              {/* ROLE FLOW */}
              <div className="pw-flow-line">

                <span className="pw-flow-label">
                  RESPONSIBLE ROLE
                </span>

                <div className="pw-flow-role">
                  <span
                    className="pw-flow-role-dot"
                    style={{
                      backgroundColor: role.color,
                    }}
                  />

                  {current.role}
                </div>

              </div>


              <div className="pw-navigation">

                <button
                  type="button"
                  className="pw-nav-button pw-nav-prev"
                  onClick={() =>
                    goTo((step - 1 + steps.length) % steps.length)
                  }
                  aria-label="Previous step"
                >
                  <span className="pw-nav-icon">
                    <IcoPrev />
                  </span>
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="pw-nav-button pw-nav-next"
                  onClick={() =>
                    goTo((step + 1) % steps.length)
                  }
                  aria-label="Next step"
                >
                  <span>Next</span>
                  <span className="pw-nav-icon">
                    <IcoNext />
                  </span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
      {imageOpen && (
        <div
          className="pw-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} screenshot`}
          onClick={() => setImageOpen(false)}
        >
          <button
            type="button"
            className="pw-lightbox-close"
            onClick={() => setImageOpen(false)}
            aria-label="Close image"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            className="pw-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.img}
              alt={`${current.title} — InventoryOpz`}
              className="pw-lightbox-image"
            />

            <div className="pw-lightbox-caption">
              <span>
                STEP {String(step + 1).padStart(2, '0')}
              </span>
              <strong>{current.title}</strong>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}