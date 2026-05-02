import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './Properties.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function Properties() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const navigate = useNavigate()

  const fetchProperties = () => {
    setLoading(true)
    let url = `${BASE_URL}/api/properties/?`
    if (search) url += `search=${search}&`
    if (type) url += `type=${type}&`
    if (minPrice) url += `min_price=${minPrice}&`
    if (maxPrice) url += `max_price=${maxPrice}&`
    if (bedrooms) url += `bedrooms=${bedrooms}&`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProperties(data.results || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => { fetchProperties() }, [])

  return (
    <>
      <Header />
      <div className="properties-page">

        <div className="properties-hero">
          <h1>Find Your <em>Dream Property</em></h1>
          <p>Browse our curated listings across Kenya</p>
        </div>

        <div className="properties-container">
          <div className="filters-sidebar">
            <h3>Filter Properties</h3>

            <div className="filter-group">
              <label>Search</label>
              <input
                type="text"
                placeholder="Location, title..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Type</label>
              <select value={type} onChange={e => setType(e.target.value)}>
                <option value="">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Min Price (Ksh)</label>
              <input
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Max Price (Ksh)</label>
              <input
                type="number"
                placeholder="Any"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Bedrooms</label>
              <select value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            <button className="filter-btn" onClick={fetchProperties}>
              Apply Filters
            </button>

            <button className="filter-clear-btn" onClick={() => {
              setSearch(''); setType(''); setMinPrice('');
              setMaxPrice(''); setBedrooms('');
              setTimeout(fetchProperties, 100);
            }}>
              Clear Filters
            </button>
          </div>

          <div className="properties-grid-wrap">
            {loading ? (
              <div className="props-loading">Loading properties...</div>
            ) : properties.length === 0 ? (
              <div className="props-empty">No properties found.</div>
            ) : (
              <div className="properties-grid">
                {properties.map(item => (
                  <div
                    className="prop-card"
                    key={item.id}
                    onClick={() => navigate(`/properties/${item.id}`)}
                  >
                    <div className="prop-img-wrap">
                      <img
                        src={item.images?.length > 0 ? item.images[0].image : '/placeholder.png'}
                        alt={item.title}
                      />
                      <div className="prop-badge">
                        {item.property_type === 'sale' ? 'For Sale' : 'For Rent'}
                      </div>
                      {item.is_featured && <div className="prop-featured">⭐ Featured</div>}
                    </div>
                    <div className="prop-body">
                      <div className="prop-price">Ksh {Number(item.price).toLocaleString()}</div>
                      <div className="prop-title">{item.title}</div>
                      <div className="prop-location">📍 {item.location}, {item.city}</div>
                      <div className="prop-meta">
                        <span>🛏 {item.bedrooms}</span>
                        <span>🚿 {item.bathrooms}</span>
                        <span>📐 {item.area} sqft</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Properties