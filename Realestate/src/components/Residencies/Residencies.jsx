import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Residencies.css";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Residencies() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/api/featured/`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="residencies" id="residency">
      <div className="res-header">
        <span className="res-eyebrow">Best Choices</span>
        <h2>Popular <em>Residencies</em></h2>
        <p>Handpicked properties across prime locations — find the one that feels like home.</p>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", color: "#64748b", padding: "2rem" }}>Loading properties...</p>
      ) : properties.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b", padding: "2rem" }}>No featured properties yet.</p>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0:    { slidesPerView: 1 },
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {properties.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="res-card" onClick={() => navigate(`/properties/${item.id}`)} style={{ cursor: "pointer" }}>

                <div className="res-img-wrap">
                  <img
                    src={item.images?.[0]?.image || "/placeholder.png"}
                    alt={item.title}
                  />
                  <div className="res-badge">
                    {item.property_type === "sale" ? "For Sale" : "For Rent"}
                  </div>
                  <div className="res-wishlist">🤍</div>
                </div>

                <div className="res-card-body">
                  <div className="res-price-row">
                    <span className="res-price">
                      <span>Ksh </span>{Number(item.price).toLocaleString()}
                    </span>
                    {item.is_featured && <span className="res-tag">Featured</span>}
                  </div>

                  <span className="res-name">{item.title}</span>
                  <span className="res-detail">📍 {item.location}, {item.city}</span>

                  <div className="res-divider" />

                  <div className="res-meta">
                    <div className="res-meta-item"><span>🛏</span><span>{item.bedrooms} Beds</span></div>
                    <div className="res-meta-item"><span>🚿</span><span>{item.bathrooms} Baths</span></div>
                    <div className="res-meta-item"><span>📐</span><span>{item.area} sqft</span></div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default Residencies;