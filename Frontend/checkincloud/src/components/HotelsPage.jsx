import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import "../styles/HotelPage.css";
const HotelsPage = () => {

    
    const hotels = [
        {
            id: 1,
            name: "Hotel Name",
            location: "Location",
            price: 100000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/622552977.jpg?k=bdefd618ae53b363378cf6ea11eff0090278d5f12192cc55f0f7d0215b2bc5c1&o=&hp=1",
            rating: 4.5,
            images: {
                bedroom: "url",
                bathroom: "url",
                restaurant: "url",
                pool: "url",
                spa: "url",
                exterior: "url"
            },
            amenities: {
                wifi: true,
                parking: true,
                airConditioning: false,
                gym: true,
                frontDesk: true,
                restaurant: false,
                coffeeShop: true,
                spa: false,
                smartTv: true,
                laundry: true
            }
        },
        {
            id: 2,
            name: "Seaside Resort & Spa",
            location: "Miami Beach, Florida",
            price: 200000,
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/51/98/e3/caption.jpg?w=1200&h=-1&s=1",
            rating: 4.8
        },
        {
            id: 3,
            name: "Mountain View Lodge",
            location: "Aspen, Colorado",
            price: 125000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142779.jpg?k=f3dba539d47794a1b7cd1dfe25f572660a6b350f382da2274e9f0788f1a13186&o=&hp=1",
            rating: 4.3
        },
        {
            id: 4,
            name: "Desert Oasis Resort",
            location: "Phoenix, Arizona",
            price: 80000,
            image: "https://ttusa.s3.amazonaws.com/images/gallery/12411/phxdo-swimming-pool-4010-hor-clsc.jpg",
            rating: 4.6
        },
        // Top Indian Hotels
        {
            id: 5,
            name: "Taj Lake Palace",
            location: "Udaipur, Rajasthan, India",
            price: 85000,
            image: "https://udaipurtourism.co.in/images/places-to-visit/headers/taj-lake-palace-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            rating: 4.9
        },
        {
            id: 6,
            name: "The Oberoi Udaivilas",
            location: "Udaipur, Rajasthan, India",
            price: 95000,
            image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Semi-Private-Pools-at-Oberoi-Udai-Vilas.jpg",
            rating: 4.8
        },
        {
            id: 7,
            name: "The Taj Mahal Palace",
            location: "Mumbai, Maharashtra, India",
            price: 75000,
            image: "https://static.toiimg.com/img/96586810/Master.jpg",
            rating: 4.9
        },
        {
            id: 8,
            name: "Rambagh Palace",
            location: "Jaipur, Rajasthan, India",
            price: 82000,
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=700&h=-1&s=1",
            rating: 4.7
        },
        {
            id: 9,
            name: "The Leela Palace",
            location: "New Delhi, India",
            price: 70000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268437803.jpg?k=05a0537b520a11e881dfb29ea6a4300f2475023df9e5215728c00e27bb3d40b7&o=&hp=1",
            rating: 4.8
        },
        {
            id: 10,
            name: "ITC Grand Chola",
            location: "Chennai, Tamil Nadu, India",
            price: 65000,
            image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/headmast-desktop/pool-long-dusk.png",
            rating: 4.7
        },
        {
            id: 11,
            name: "The Oberoi Amarvilas",
            location: "Agra, Uttar Pradesh, India",
            price: 88000,
            image: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-3-exterior-evening-724x407.jpg?extension=webp",
            rating: 4.8
        },
        {
            id: 12,
            name: "Umaid Bhawan Palace",
            location: "Jodhpur, Rajasthan, India",
            price: 92000,
            image: "https://media.cntraveler.com/photos/594001185fff7e434a15efbe/16:9/w_2560,c_limit/Exterior-UmaidBhawanPalaceTaj-India-CRHotel.jpg",
            rating: 4.9
        },
        {
            id: 13,
            name: "The Oberoi Rajvilas",
            location: "Jaipur, Rajasthan, India",
            price: 78000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48356404.jpg?k=94a7dba4725f4284d857358a3aa6bea0e3b3d342e52fa60ae761e44ea35c5074&o=&hp=1",
            rating: 4.7
        },
        {
            id: 14,
            name: "Taj Falaknuma Palace",
            location: "Hyderabad, Telangana, India",
            price: 85000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o=&hp=1",
            rating: 4.8
        },
        // International Hotels
        {
            id: 15,
            name: "Burj Al Arab",
            location: "Dubai, UAE",
            price: 280000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg?k=1b5b93930a67d2372178da9df3c090ec47fb1f5622f5664dde18c4362f31b355&o=&hp=1",
            rating: 4.9
        },
        {
            id: 16,
            name: "The Ritz Paris",
            location: "Paris, France",
            price: 195000,
            image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/2024/july/ritz-paris-hotel-facade-image.jpg",
            rating: 4.8
        },
        {
            id: 17,
            name: "Four Seasons Bora Bora",
            location: "Bora Bora, French Polynesia",
            price: 250000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/51610543.jpg?k=18a4090158b722d2a4a2b5d054116b6711216ba4a0effb6f154a9f8327cb69f7&o=&hp=1",
            rating: 4.9
        },
        {
            id: 18,
            name: "The Peninsula",
            location: "Hong Kong",
            price: 145000,
            image: "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/66/371/694/The-Peninsula-Hong-Kong-Exterior-3_O.jpg?tr=w-1200%2Cfo-auto",
            rating: 4.7
        },
        {
            id: 19,
            name: "Atlantis The Royal",
            location: "Dubai, UAE",
            price: 175000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553034050.jpg?k=c95d4f95361582201753759905d0d65431bef1f48df72afc29c802b8768e8d01&o=&hp=1",
            rating: 4.8
        },
        {
            id: 20,
            name: "Raffles Singapore",
            location: "Singapore",
            price: 155000,
            image: "https://m.ahstatic.com/is/image/accorhotels/aja_p_5227-42?qlt=82&wid=575&ts=1715141190292&dpr=on,2.625",
            rating: 4.8
        },
        {
            id: 21,
            name: "The Plaza",
            location: "New York City, USA",
            price: 165000,
            image: "https://phgcdn.com/images/uploads/NYCTP/masthead/1600x813-Exterior-3-The-Plaza.jpg",
            rating: 4.7
        },
        {
            id: 22,
            name: "Mandarin Oriental",
            location: "Bangkok, Thailand",
            price: 120000,
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mandarin_Oriental_Bangkok_Bang_Rak.jpg",
            rating: 4.8
        },
        {
            id: 23,
            name: "The Savoy",
            location: "London, UK",
            price: 145000,
            image: "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/86/2020/09/08103037/reopening-post-min.jpg",
            rating: 4.7
        },
        {
            id: 24,
            name: "Belmond Hotel Cipriani",
            location: "Venice, Italy",
            price: 185000,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Hotel_Cipriani%2C_Venice.jpg",
            rating: 4.8
        },
        {
            id: 25,
            name: "Waldorf Astoria",
            location: "Maldives",
            price: 220000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587442995.jpg?k=55d4a4b3514d188346bd85cd3bc6492b958b9c1bfa541d2ecc05d901f1aebf57&o=&hp=1",
            rating: 4.9
        },
        {
            id: 26,
            name: "Aman Tokyo",
            location: "Tokyo, Japan",
            price: 160000,
            image: "https://harpersbazaaruk.cdnds.net/17/17/2560x1706/gallery-1493044604-lobby.jpg",
            rating: 4.8
        },
        {
            id: 27,
            name: "Hotel de Paris",
            location: "Monte Carlo, Monaco",
            price: 190000,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/492010980.jpg?k=1d32258413b148a31605360014e9284053d6e3a1203c171979357726ccf94147&o=&hp=1",
            rating: 4.8
        },
        {
            id: 28,
            name: "The Silo",
            location: "Cape Town, South Africa",
            price: 135000,
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2b/b7/0a/the-silo-hotel.jpg?w=700&h=-1&s=1",
            rating: 4.7
        },
        {
            id: 29,
            name: "Emirates Palace",
            location: "Abu Dhabi, UAE",
            price: 195000,
            image: "https://media.cntraveler.com/photos/5dc074aea100ea0008a0e722/16:9/w_2560%2Cc_limit/emiratespalace-abudhabi-2019-3.jpg",
            rating: 4.8
        },
        {
            id: 30,
            name: "Laucala Island Resort",
            location: "Laucala Island, Fiji",
            price: 240000,
            image: "https://nuvomagazine.com/wp-content/uploads/2016/09/laucala_overwater_villa_aerial1.jpg",
            rating: 4.9
        }
    ];

    return (
        <div className="hotels-container">
            <h1 className="hotels-title">Available Hotels</h1>

            <div className="hotels-grid">
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <div className="hotel-image-container">
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="hotel-image"
                            />
                            <div className="hotel-rating">
                                <Star className="rating-star" size={16} fill="currentColor" />
                                <span>{hotel.rating}</span>
                            </div>
                        </div>

                        <div className="hotel-content">
                            <h2 className="hotel-name">{hotel.name}</h2>
                            <div className="hotel-location">
                                <MapPin className="location-icon" />
                                <span>{hotel.location}</span>
                            </div>
                            <Link
                                to={`/hotel/${hotel.id}`}
                                className="view-more-button"
                            >
                                View More
                            </Link>
                        </div>

                        <div className="hotel-footer">
                            <div className="hotel-price">
                                ₹{hotel.price}
                                <span className="price-suffix">/night</span>
                            </div>
                            <Link
                                to={`/booking/${hotel.id}`}
                                className="book-button"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelsPage;