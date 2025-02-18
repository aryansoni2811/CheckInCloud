import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  X, WifiIcon, Car, Snowflake, Dumbbell, 
  Clock4, UtensilsCrossed, Coffee, Bath, 
  Tv, Shirt 
} from 'lucide-react';
import '../styles/HotelDetail.css';

const HotelDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/hotels/${id}`);
        if (!response.ok) {
          throw new Error('Hotel not found');
        }
        const data = await response.json();
        setHotel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetail();
  }, [id]);

  const amenityIcons = {
    wifi: { icon: WifiIcon, label: "Free Wi-Fi" },
    parking: { icon: Car, label: "Parking Available" },
    airConditioning: { icon: Snowflake, label: "Air Conditioning" },
    gym: { icon: Dumbbell, label: "Fitness Center" },
    frontDesk: { icon: Clock4, label: "24/7 Front Desk" },
    restaurant: { icon: UtensilsCrossed, label: "Restaurant" },
    coffeeShop: { icon: Coffee, label: "Coffee Shop" },
    spa: { icon: Bath, label: "Spa Services" },
    smartTv: { icon: Tv, label: "Smart TV" },
    laundry: { icon: Shirt, label: "Laundry Service" }
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!hotel) {
    return <div className="p-4">Hotel not found</div>;
  }

  return (
    <div className="hotel-detail-container">
      <div className="relative">
        <button
          onClick={() => navigate('/hotels')}
          className="close-button absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h1 className="hotel-title">{hotel.name}</h1>
        <div className="hotel-info">
          <p className="location">{hotel.location}</p>
          <p className="price">₹{hotel.price.toLocaleString()} per night</p>
          <p className="rating">Rating: {hotel.rating} / 5</p>
        </div>
        
        <div className="images-section">
          {hotel.images && Object.entries(hotel.images).map(([key, url]) => (
            url && (
              <div key={key} className="image-card">
                <div className="image-container">
                  <img src={url} alt={key} className="w-full h-full object-cover" />
                </div>
                <div className="image-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="amenities-section">
          <h2 className="amenities-title">Hotel Amenities</h2>
          <div className="amenities-grid">
            {hotel.amenities && Object.entries(amenityIcons).map(([key, { icon: Icon, label }]) => {
              const available = hotel.amenities[key];
              if (!available) return null;
              return (
                <div key={key} className="amenity-card">
                  <Icon className="amenity-icon" />
                  <span className="amenity-label">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailView;