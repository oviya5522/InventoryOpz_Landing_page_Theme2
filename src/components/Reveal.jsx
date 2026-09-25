import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`rv ${visible ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
