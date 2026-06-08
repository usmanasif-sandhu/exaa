import { useTilt } from '../hooks/useTilt'

export default function TiltSurface({ children, className = '', maxTilt = 11 }) {
  const { ref, tiltProps } = useTilt(maxTilt)
  return (
    <div ref={ref} className={className} {...tiltProps}>
      {children}
    </div>
  )
}
