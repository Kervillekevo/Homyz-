import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './PropertyDetail.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImg, setActiveImg] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetch(`${BASE_URL}/api/properties/${id}/`)
      .then(res => res.json())
      .then(data => { setProperty(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  const handleInquiry = async (e) => {
    e.preventDefault()
    const res = await fetch(`${BASE_URL}/api/inquiries/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, property: id }),
    })
    if (res.ok) {
      setSubmitted(true)
      setForm({ name: '', phone: '', email: '', message: '' })
    }
  }

  const handleWhatsApp = () => {
    const phone = property.agent_phone.replace(/[\s\-\+]/g, '')
    const formatted = phone.startsWith('0') ? '254' + phone.slice(1) : phone
    const msg = encodeURIComponent(
      `Hi ${property.agent_name}, I'm interested in your property:\n\n*${property.title}*\nLocation: ${property.location}, ${property.city}\nPrice: $${Number(property.price).toLocaleString()}\n\nPlease get in touch. Thank you!`
    )
    window.open(`https://wa.me/${formatted}?text=${msg}`, '_blank')
  }

  if (loading) return <><Header /><div className="detail-loading">Loading...</div><Footer /></>
  if (!property) return <><Header /><div className="detail-loading">Property not found.</div><Footer /></>

  return (
    <>
      <Header />
      <div className="detail-page">

        <button className="detail-back" onClick={() => navigate('/properties')}>
          ← Back to Properties
        </button>

        <div className="detail-inner">

          <div className="detail-gallery">
            <div className="detail-main-img">
              <img
                src={property.images?.[activeImg]?.image || '/placeholder.png'}
                alt={property.title}
              />
              <div className="detail-badge">
                {property.property_type === 'sale' ? 'For Sale' : 'For Rent'}
              </div>
            </div>
            {property.images?.length > 1 && (
              <div className="detail-thumbs">
                {property.images.map((img, i) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt={`img-${i}`}
                    className={i === activeImg ? 'active' : ''}
                    onClick={() => setActiveImg(i)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="detail-info">
            <div className="detail-category">{property.category?.name}</div>
            <h1 className="detail-title">{property.title}</h1>
            <div className="detail-location">📍 {property.location}, {property.city}</div>
            <div className="detail-price">Ksh {Number(property.price).toLocaleString()}</div>

            <div className="detail-meta">
              <div className="detail-meta-item"><span>🛏</span><span>{property.bedrooms} Bedrooms</span></div>
              <div className="detail-meta-item"><span>🚿</span><span>{property.bathrooms} Bathrooms</span></div>
              <div className="detail-meta-item"><span>📐</span><span>{property.area} sqft</span></div>
              <div className="detail-meta-item"><span>👁</span><span>{property.views_count} views</span></div>
            </div>

            <div className="detail-desc">
              <h3>Description</h3>
              <p>{property.description}</p>
            </div>

            <div className="detail-agent">
              <h3>Agent Details</h3>
              <div className="agent-info">
                <div className="agent-avatar">👤</div>
                <div className="agent-text">
                  <strong>{property.agent_name}</strong>
                  <p>📞 {property.agent_phone}</p>
                  <p>✉️ {property.agent_email}</p>
                </div>
              </div>
              <div className="agent-actions">
                <a href={`tel:${property.agent_phone}`} className="agent-call-btn">
                  📞 Call Agent
                </a>
                <button className="agent-whatsapp-btn" onClick={handleWhatsApp}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp Agent
                </button>
              </div>
            </div>

            <div className="detail-inquiry">
              <h3>Send Inquiry</h3>
              {submitted ? (
                <div className="inquiry-success">Message sent! Agent will contact you soon.</div>
              ) : (
                <form onSubmit={handleInquiry}>
                  <input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    required
                  />
                  <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                  />
                  <textarea
                    placeholder="Message..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    required
                  />
                  <button type="submit">Send Inquiry</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PropertyDetail