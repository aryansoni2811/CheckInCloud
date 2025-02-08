import React from 'react';
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

  const hotels = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      location: "Downtown Manhattan, New York",
      price: 100000,
      mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/622552977.jpg?k=bdefd618ae53b363378cf6ea11eff0090278d5f12192cc55f0f7d0215b2bc5c1&o=&hp=1",
      rating: 4.5,
      images: {
        bedroom: "https://image-tc.galaxy.tf/wijpeg-9ne9m52s3bxbxhcb0485fad93/premium-room-double-2.jpg?width=1920",
        bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403894905.jpg?k=feaf4c06984f6224f89b311cf027723e1a6d5fdb6c5d87ea3c02caf8838b73e6&o=&hp=1",
        restaurant: "https://www.theplazany.com/wp-content/uploads/2016/02/Events_TheGrandBallroom_Hero_1.jpg",
        pool: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/636356986.jpg?k=e2c2f1d093ebb70397f64e5362ed30184ab11db2eb7d9f8fa7f1bc5615226a6f&o=&hp=1",
        exterior: "https://photos.zillowstatic.com/fp/670eba6f4085152d76e28d1c7454baf0-se_extra_large_1500_800.webp"
      },
      amenities: {
        wifi: true,
        parking: true,
        airConditioning: true,
        gym: false,
        frontDesk: true,
        restaurant: true,
        coffeeShop: true,
        spa: true,
        smartTv: true,
        laundry: false
      }
    },
    {
        id: 2,
        name: "Seaside Resort & Spa",
        location: "Miami Beach, Florida",
        price: 200000,
        mainImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/51/98/e3/caption.jpg?w=1200&h=-1&s=1",
        rating: 4.8,
        images: {
          bedroom: "https://images.trvl-media.com/lodging/10000000/9770000/9766500/9766468/a209276c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          bathroom: "https://www.miamiandbeaches.com/getmedia/2e719353-426d-4194-a05c-2339f81a34d4/Four_Seasons_Surf_Club_Spa_1440x900.jpg?width=1000&resizemode=force",
          restaurant: "https://www.miamiandbeaches.com/getmedia/1352b51d-d891-4e76-8646-91398bb5e706/Joia_beachfront_dining_1440x900.jpg?width=1000&resizemode=force",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/51/98/e3/caption.jpg?w=1200&h=-1&s=1",
          exterior: "https://pix10.agoda.net/hotelImages/46618/-1/72983a654afb6e4b2d34dc69e480b919.jpg?ce=0"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false ,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: false,
          laundry: true
        }
      },
      {
        id: 3,
        name: "Mountain View Lodge",
        location: "Aspen, Colorado",
        price: 125000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142779.jpg",
        rating: 4.3,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/599090535.jpg?k=740a78f0da01384c13eed4799428f573e3cec4772b2b749e00d672e6ce0e0f4a&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/599094023.jpg?k=42a4ec66a6ce2dd6f6d3e4fe62f3dd0b4a7f7adbe8b547a0feea3e1cc66f318f&o=&hp=1",
          restaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142744.jpg?k=d48c988cc5b7abe20643c7109e25595453da8b33f8baac4aa692806e6ca6cc96&o=&hp=1",
          pool: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428142779.jpg?k=f3dba539d47794a1b7cd1dfe25f572660a6b350f382da2274e9f0788f1a13186&o=&hp=1",
          exterior: "https://bluegreen-vacations-innsbruck-aspen-ascend-resort-collection.booked.net/data/Photos/OriginalPhoto/1515/151567/151567501/Bluegreen-Vacations-Innsbruck-Aspen-Ascend-Resort-Collection-Exterior.JPEG"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: false,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: false,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 4,
        name: "Desert Oasis Resort",
        location: "Phoenix, Arizona",
        price: 80000,
        mainImage: "https://ttusa.s3.amazonaws.com/images/gallery/12411/phxdo-swimming-pool-4010-hor-clsc.jpg",
        rating: 4.6,
        images: {
          bedroom: "https://cache.marriott.com/content/dam/marriott-renditions/PHXSO/phxso-master-bedroom-5233-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
          bathroom: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWe760lw3YJ4EKJeYAdHK8sknXFdnGhiBFA&s",
          restaurant: "https://cache.marriott.com/content/dam/marriott-renditions/PHXSO/phxso-splash-cafe-2723-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
          pool: "https://koalaadmin-prod.s3.us-east-2.amazonaws.com/uploads/resorts/41/SDOV-001.jpg",
          exterior: "https://ttusa.s3.amazonaws.com/images/gallery/12411/i12411.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: false,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 5,
        name: "Taj Lake Palace",
        location: "Udaipur, Rajasthan, India",
        price: 85000,
        mainImage: "https://udaipurtourism.co.in/images/places-to-visit/headers/taj-lake-palace-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17071999.jpg?k=393c51127019f58117cc42a922f00c3ca716ecea94513bd8590e0e3a99e27d13&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/141777877.jpg?k=80faa42c1225a347fba6a6d127862f4781342ad6e2e701f3d57d127966a7a868&o=&hp=1",
          restaurant: "https://cdn.sanity.io/images/ocl5w36p/prod2/d87944faf0a5e331acd398fe5f068585d9ac3b9a-1400x1120.jpg",
          pool: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/pool-v16657538-1440.jpg",
          exterior: "https://udaipurtourism.co.in/images/places-to-visit/headers/taj-lake-palace-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 6,
        name: "The Oberoi Udaivilas",
        location: "Udaipur, Rajasthan, India",
        price: 95000,
        mainImage: "https://www.andbeyond.com/wp-content/uploads/sites/5/Semi-Private-Pools-at-Oberoi-Udai-Vilas.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93389218.jpg?k=8cdb60accb2ae7c860364ed415ce661e43b8bd1c031a65fed15d0657445bb22f&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93389242.jpg?k=4e4c520e5292639fa611d538dba4edf643ba42d6bede8c8afd9a6bc3138d157d&o=&hp=1",
          restaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812939.jpg?k=8bbb78301ed565bdc62ab0aaf2722b82d1ef6c7286c18d9c8be10f89c0d64922&o=&hp=1",
          pool: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/offers/2021/offer-images-sep21/udaivilas/banner/udaivilas-unforgettable-getaways-1920x819-53.jpg",
          exterior: "https://content3.jdmagicbox.com/comp/udaipur-rajasthan/37/9999pmulmumstd25237/catalogue/the-oberoi-udaivilas-udaipur-city-udaipur-rajasthan-hotels-1xej24iyes.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 7,
        name: "The Taj Mahal Palace",
        location: "Mumbai, Maharashtra, India",
        price: 75000,
        mainImage: "https://static.toiimg.com/img/96586810/Master.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/176113777.jpg?k=982b8710d50b0e5b6e2db2b275928784748b993a039a1c3b1257e58b19a235fc&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103556645.jpg?k=dbc9d7474bfcc3203fb444341f077ac7a13d6ec40ffe232c36a47eb908ba1673&o=&hp=1",
          restaurant: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/28/48/c8/lovely-classy-interiors.jpg?w=900&h=500&s=1",
          pool: "https://c8.alamy.com/comp/E7XTW3/the-swimming-pool-inside-the-colaba-taj-mahal-palace-hotel-colaba-E7XTW3.jpg",
          exterior: "https://images.jdmagicbox.com/v2/comp/mumbai/23/022p2000023/catalogue/taj-mahal-hotel-apollo-bunder-mumbai-5-star-hotels-0fouvgunb9.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: false,
          laundry: false
        }
      },
      {
        id: 8,
        name: "Rambagh Palace",
        location: "Jaipur, Rajasthan, India",
        price: 82000,
        mainImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=700&h=-1&s=1",
        rating: 4.7,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239614656.jpg?k=98c1bdff4165a9b12282f89138a34c6fff17d205505d27b98f3b3a2ee12cebf4&o=&hp=1",
          bathroom: "https://images4.via.com/static/hotel/images/5/113624/113624_28_f.jpg",
          restaurant: "https://images.indianexpress.com/2024/10/suvarna-mahal.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f7/e0/09/outdoor-swiming-pool.jpg?w=700&h=-1&s=1",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 9,
        name: "The Leela Palace",
        location: "New Delhi, India",
        price: 70000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268437803.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://images.trvl-media.com/lodging/4000000/3860000/3851700/3851663/0c920a50.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/235193812.jpg?k=20975b616a49ff1cf589f1b4125dea4218cd2a9eec17a646957320b6f25e71bc&o=&hp=1",
          restaurant: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/51/ce/10/lobby.jpg?w=700&h=-1&s=1",
          pool: "https://images.trvl-media.com/lodging/4000000/3860000/3851700/3851663/88c9a427.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          exterior: "https://c8.alamy.com/comp/2YRMADF/leela-palace-hotel-exterior-bangalore-karnataka-india-2YRMADF.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: false,
          restaurant: true,
          coffeeShop: false,
          spa: false,
          smartTv: false,
          laundry: false
        }
      },
      {
        id: 10,
        name: "ITC Grand Chola",
        location: "Chennai, Tamil Nadu, India",
        price: 65000,
        mainImage: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/headmast-desktop/pool-long-dusk.png",
        rating: 4.7,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/628286232.jpg?k=2234cf762302985982b8aeca1c4dc1b5bda616533c13d1ec1355ad14191bd155&o=&hp=1",
          bathroom: "https://media.easemytrip.com/media/Hotel/TEMP1/RoomImage/RoomImageNffjEB.jpg",
          restaurant: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/24/3f/08/itc-grand-chola-chennai.jpg?w=700&h=-1&s=1",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/24/3e/f4/itc-grand-chola-chennai.jpg?w=700&h=-1&s=1",
          exterior: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/headmast-desktop/exterior-dusk.png"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: false,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 11,
        name: "The Oberoi Amarvilas",
        location: "Agra, Uttar Pradesh, India",
        price: 88000,
        mainImage: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-3-exterior-evening-724x407.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/room-and-suites/premier-room/detail/premier-room-1-stunning-views.jpg?w=724&extension=webp&hash=84c60312737065593632eb632af036c2",
          bathroom: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/room-and-suites/room-and-suite-gallery-1448x814/premier-rooms/premier-room-bathroom-1.jpg",
          restaurant: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/dining/detail/the-bar---the-oberoi-amarvilas-agra.jpg?w=724&hash=1100bc249bf80e863cbe19560fe43a93",
          pool: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-8-swimming-pool-724x407.jpg?extension=webp",
          exterior: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-1-exterior-724x407.jpg?extension=webp"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 12,
        name: "Umaid Bhawan Palace",
        location: "Jodhpur, Rajasthan, India",
        price: 92000,
        mainImage: "https://media.cntraveler.com/photos/594001185fff7e434a15efbe/16:9/w_2560,c_limit/Exterior-UmaidBhawanPalaceTaj-India-CRHotel.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42565760.jpg?k=0267f660f854e0124514da32155e334b22d95d9ff8e3eb99b364a5fe00da2760&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46010693.jpg?k=84ab3d75d3c5962fd22e551665f9cca14a58835d33c829d39ca6ac101751ef90&o=&hp=1",
          restaurant: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/89/da/29/caption.jpg?w=900&h=500&s=1",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/84/fe/46/pool--v15874053.jpg?w=700&h=-1&s=1",
          exterior: "https://upload.wikimedia.org/wikipedia/commons/9/9a/1996_-218-20A_Jodhpur_Hotel_Umaid_Bhawan_Palace_%282233393509%29.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 13,
        name: "The Oberoi Rajvilas",
        location: "Jaipur, Rajasthan, India",
        price: 78000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48356404.jpg",
        rating: 4.7,
        images: {
            bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93389218.jpg?k=8cdb60accb2ae7c860364ed415ce661e43b8bd1c031a65fed15d0657445bb22f&o=&hp=1",
            bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/93389242.jpg?k=4e4c520e5292639fa611d538dba4edf643ba42d6bede8c8afd9a6bc3138d157d&o=&hp=1",
            restaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48812939.jpg?k=8bbb78301ed565bdc62ab0aaf2722b82d1ef6c7286c18d9c8be10f89c0d64922&o=&hp=1",
            pool: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/offers/2021/offer-images-sep21/udaivilas/banner/udaivilas-unforgettable-getaways-1920x819-53.jpg",
            exterior: "https://content3.jdmagicbox.com/comp/udaipur-rajasthan/37/9999pmulmumstd25237/catalogue/the-oberoi-udaivilas-udaipur-city-udaipur-rajasthan-hotels-1xej24iyes.jpg"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 14,
        name: "Taj Falaknuma Palace",
        location: "Hyderabad, Telangana, India",
        price: 85000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181565.jpg?k=1d3dffbc417641a2e6c1f048a7690733d571ae07d207428209392905ccee74db&o=&hp=1",
          bathroom: "https://q-xx.bstatic.com/xdata/images/hotel/max500/17181463.jpg?k=a81c64eb1be1c3516d961bffd58acb52119a00aeb94c10daf9c78c098c264577&o=",
          restaurant: "https://spalbastaging.s3.ap-south-1.amazonaws.com/venue_images/1668680524993-101%20Dinning%201.jpg",
          pool: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/1c/06/57/pool-in-tha-palace.jpg",
          exterior: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Falaknuma_Palace_01.jpg/1200px-Falaknuma_Palace_01.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 15,
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        price: 280000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457389536.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://images.luxuryescapes.com/q_auto:good/42fe3fmq5l96qn0p7x08",
          bathroom: "https://c8.alamy.com/comp/2G412ND/emirates-united-arab-emirates-dubai-burj-al-arab-tower-321m-one-of-the-highest-and-luxurious-hotel-in-the-world-marble-and-golden-bathroom-2G412ND.jpg",
          restaurant: "https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/article/stories/dubai/your-guide-to-dining-at-burj-al-arab/content-burj-al-arab--al-mahara-3.jpg?revision=2f2590a7-a6ba-4455-93e4-9d6cfeb21a81",
          pool: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB5n0MEBB3z956yavqALun3nnp52_0GAQEg&s",
          exterior: "https://www.travelwithanda.com/wp-content/uploads/2018/03/Visiting-Burj-Al-Arab-blog.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: false,
          smartTv: false,
          laundry: false
        }
      },
      {
        id: 16,
        name: "The Ritz Paris",
        location: "Paris, France",
        price: 195000,
        mainImage: "https://www.ritzparis.com/sites/default/files/styles/1920x1080/public/images/home_0.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://media.ritzparis.com/medias/domain12964/media100001/519-u3q5nc0bw0-web4k.jpg?twic=v1/cover=1536x1228/quality=85",
          bathroom: "https://media.ritzparis.com/medias/domain12964/media100001/525-5y6ei27hop-web4k.jpg?twic=v1/cover=1536x1228/quality=85",
          restaurant: "https://media.ritzparis.com/medias/domain12964/media100003/993-7qfh9ki7ai-web4k.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/bc/d5/pool-v18670046.jpg?w=700&h=-1&s=1",
          exterior: "https://notabeneglobal.com/wp-content/uploads/2017/10/ritz.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 17,
        name: "Four Seasons Bora Bora",
        location: "Bora Bora, French Polynesia",
        price: 250000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/51610543.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://www.fourseasons.com/alt/img-opt/~75.701.0,0000-155,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BOR/BOR_1422_original.jpg",
          bathroom: "https://cdn.audleytravel.com/1050/748/79/7997733-bathroom-in-four-seasons-room.webp",
          restaurant: "https://www.fourseasons.com/alt/img-opt/~75.701/publish/content/dam/fourseasons/images/web/BOR/BOR_136_aspect16x9.jpg",
          pool: "https://cdn.audleytravel.com/1050/749/79/15999113-pool-and-cabanas-four-seasons-bora-bora.webp",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6d/f3/0e/four-seasons-resort-bora.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 18,
        name: "The Peninsula",
        location: "Hong Kong",
        price: 145000,
        mainImage: "https://www.peninsula.com/-/media/images/hong-kong/homepage/ph_hk_homepage_exterior.jpg",
        rating: 4.7,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/486473087.jpg?k=3cf92af7366b1bd96dc64f368dd9cc7e164894dc3f50072bf0c3bd9310f50e60&o=&hp=1",
          bathroom: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/b7/ff/71/grand-deluxe-harbour.jpg?w=700&h=-1&s=1",
          restaurant: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e3/37/d9/the-lobby-at-the-peninsula.jpg?w=900&h=500&s=1",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/00/01/c3/swimming-pool.jpg?w=700&h=-1&s=1",
          exterior: "https://i.insider.com/660c6d2f1caec1275a6c2ad1?width=700"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop :true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 19,
        name: "Atlantis The Royal",
        location: "Dubai, UAE",
        price: 175000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553034050.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553034066.jpg?k=43ba62480549a2ad1a563e4c842f0108ca3fb4a8321e7604bf40097e2e09fafb&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553034099.jpg?k=d8c2d6d3950a250783459eef1cf1b835a7fda5e005e9379d133341e6dd4e9743&o=&hp=1",
          restaurant: "https://whatson.ae/wp-content/uploads/2023/03/la-mar.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/55/d2/cd/nobu-by-the-beach-adults.jpg?w=700&h=-1&s=1",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d6/b0/01/atlantis-the-royal-dubai.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 20,
        name: "Raffles Singapore",
        location: "Singapore",
        price: 155000,
        mainImage: "https://m.ahstatic.com/is/image/accorhotels/aja_p_5227-42",
        rating: 4.8,
        images: {
          bedroom: "https://www.momondo.in/rimg/himg/d0/80/bb/ice-60119-109722942-355348.jpg?width=1366&height=768&crop=true",
          bathroom: "https://cdn.kiwicollection.com/media/room_images/PR002587/xl/002587-03-state-room-suite-bathroom.jpg",
          restaurant: "https://milelion.com/wp-content/uploads/2020/08/IMG_20200807_080716.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/9a/65/62/outdoor-rooftop-pool.jpg?w=700&h=-1&s=1",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/9a/43/bf/full-facade.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 21,
        name: "The Plaza",
        location: "New York City, USA",
        price: 165000,
        mainImage: "https://phgcdn.com/images/uploads/NYCTP/masthead/1600x813-Exterior-3-The-Plaza.jpg",
        rating: 4.7,
        images: {
            bedroom: "https://image-tc.galaxy.tf/wijpeg-9ne9m52s3bxbxhcb0485fad93/premium-room-double-2.jpg?width=1920",
            bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403894905.jpg?k=feaf4c06984f6224f89b311cf027723e1a6d5fdb6c5d87ea3c02caf8838b73e6&o=&hp=1",
            restaurant: "https://www.theplazany.com/wp-content/uploads/2016/02/Events_TheGrandBallroom_Hero_1.jpg",
            pool: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/636356986.jpg?k=e2c2f1d093ebb70397f64e5362ed30184ab11db2eb7d9f8fa7f1bc5615226a6f&o=&hp=1",
            exterior: "https://photos.zillowstatic.com/fp/670eba6f4085152d76e28d1c7454baf0-se_extra_large_1500_800.webp"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 22,
        name: "Mandarin Oriental",
        location: "Bangkok, Thailand",
        price: 120000,
        mainImage: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mandarin_Oriental_Bangkok_Bang_Rak.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/589374262.jpg?k=5ff65a9f87d2dfec51897b78bde06da530167152e1222cb6ad3c84a5c2bea360&o=&hp=1",
          bathroom: "https://images.trvl-media.com/lodging/1000000/20000/14000/13953/484b5af8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          restaurant: "https://images.trvl-media.com/lodging/1000000/20000/14000/13953/81eab4ce.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          pool: "https://wnfdiary.com/wp-content/uploads/2019/01/mandarin-oriental-spa-wellness-bangkok.jpg",
          exterior: "https://images.trvl-media.com/lodging/1000000/20000/14000/13953/412f4d35.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 23,
        name: "The Savoy",
        location: "London, UK",
        price: 145000,
        mainImage: "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/86/2020/09/08103037/reopening-post-min.jpg",
        rating: 4.7,
        images: {
          bedroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/634684818.jpg?k=1043e82988713df5ad6ee57726c62583d87c0148d95870010da0e08d5b2a808b&o=&hp=1",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/634684844.jpg?k=14c3c01d1b5c2ba35e19fd7d3e3ce279e9112c368c44d485b87bf4ab9d3e892d&o=&hp=1",
          restaurant: "https://www.ticati.com/img/hotel/16202096s.jpg",
          pool: "https://image.topo-app.com/topoimages/assets/896def09143c428c9dead7f9645befe9/IMAGE/f481919384cd44468ce1ddfeb242589d/f481919384cd44468ce1ddfeb242589d.jpeg?width=800&height=600&type=resize",
          exterior: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/634684833.jpg?k=857cc121a1f10f5d2b6d29c2d17323a75c7a70d2dd975f3c49a4d81736ff3cd2&o=&hp=1"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 24,
        name: "Belmond Hotel Cipriani",
        location: "Venice, Italy",
        price: 185000,
        mainImage: "https://upload.wikimedia.org/wikipedia/commons/3/31/Hotel_Cipriani%2C_Venice.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://images.trvl-media.com/lodging/1000000/20000/14300/14211/82277b0c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          bathroom: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278525523.jpg?k=6e501dfbbde8373f3365f22866db33978ef6e5de37bbe0b09a8224f747fefe4e&o=&hp=1",
          restaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262951345.jpg?k=957d6a93ef0b3e88da4a89c7862e8120ec2d0e6711a0a2a7dc42a4adfa50aae9&o=&hp=1",
          pool: "https://www.theluxevoyager.com/wp-content/uploads/2018/06/Belmond-Hotel-Cipriani-Pool-Copy-871x546.jpg",
          exterior: "https://www.chase.com/content/dam/unified-assets/photography/articles/travel/hotels/spotlights/hotel-cipirani/hotel_cipriani_aerial_exterior_overview_bd_2501_16x9_web.jpg"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: false,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 25,
        name: "Waldorf Astoria",
        location: "Maldives",
        price: 220000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/587442995.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://islandii.com/wp-content/uploads/2020/04/208288877-4.jpg",
          bathroom: "https://images.trvl-media.com/lodging/33000000/32160000/32150400/32150301/d0573a15.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          restaurant: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483820559.jpg?k=a12305af935ceb138f9adbab0bfb58879b7f7b2b32c1bc1c057ec40bb9a86097&o=&hp=1",
          pool: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/483820643.jpg?k=3a5aaec563e5bd2552d535a1510609178bc71a5eecbf3420cb0bd8294fc4955e&o=",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c2/48/1f/two-bedroom-overwater.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: false,
          frontDesk: false,
          restaurant: true,
          coffeeShop: true,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 26,
        name: "Aman Tokyo",
        location: "Tokyo, Japan",
        price: 160000,
        mainImage: "https://harpersbazaaruk.cdnds.net/17/17/2560x1706/gallery-1493044604-lobby.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://www.kayak.co.in/rimg/himg/41/5f/df/ice-127229-72811622_3XL-485284.jpg?width=1366&height=768&crop=true",
          bathroom: "https://www.annees-de-pelerinage.com/wp-content/uploads/2017/11/enjoying-view-bathroom-aman-tokyo-1024x683.jpg",
          restaurant: "https://www.classictravel.com/Content/Pictures/Hotels/YX/62649/Aman-Tokyo-classictravel-com-Restaurant.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/31/a9/6c/aman-tokyo-swimming-pool.jpg?w=700&h=-1&s=1",
          exterior: "https://www.aman.com/sites/default/files/2023-11/aman_tokyo_japan_-_fb_the_cafe_by_aman_forest_exterior.jpg"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: true,
          spa: false,
          smartTv: false,
          laundry: true
        }
      },
      {
        id: 27,
        name: "Hotel de Paris",
        location: "Monte Carlo, Monaco",
        price: 190000,
        mainImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/492010980.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://www.kayak.co.in/rimg/himg/bd/df/1e/leonardo-13667-167933165-849036.jpg?width=836&height=607&crop=true",
          bathroom: "https://entiretravel.imgix.net/getmedia/11429e54-3a2e-410f-8f65-053f531f1d41/Hotel-de-Paris-Diamond-Suite_1500x780.jpg?auto=format",
          restaurant: "https://www.theluxevoyager.com/wp-content/uploads/2019/07/Hotel-De-Paris-Monte-Carlo-Restaurant-the-Grill-1048x546.jpg",
          pool: "https://images.trvl-media.com/lodging/1000000/20000/13900/13874/20f904db.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          exterior: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/01/36/b5/facade-hotel-de-paris.jpg?w=700&h=-1&s=1"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 28,
        name: "The Silo",
        location: "Cape Town, South Africa",
        price: 135000,
        mainImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2b/b7/0a/the-silo-hotel.jpg",
        rating: 4.7,
        images: {
          bedroom: "https://images.trvl-media.com/lodging/35000000/34760000/34757500/34757476/dc3af3ea.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          bathroom: "https://www.hotelscombined.ca/himg/47/c4/99/expedia_group-2892818-80b4ad-606900.jpg",
          restaurant: "https://www.kayak.com/rimg/himg/60/94/83/leonardo-2892818-148198606-687916.jpg?width=836&height=607&crop=true",
          pool: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/91937515.jpg?k=9a9f132378f10cca75caff5a6b5aec111c3816c3a7c5e46d536053812dbee458&o=&hp=1",
          exterior: "https://media.cnn.com/api/v1/images/stellar/prod/170522111633-the-silo-hotel-exterior-south-africa-silo.jpg?q=w_1600,h_900,x_0,y_0,c_fill"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      },
      {
        id: 29,
        name: "Emirates Palace",
        location: "Abu Dhabi, UAE",
        price: 195000,
        mainImage: "https://media.cntraveler.com/photos/5dc074aea100ea0008a0e722/16:9/w_2560%2Cc_limit/emiratespalace-abudhabi-2019-3.jpg",
        rating: 4.8,
        images: {
          bedroom: "https://d363suj4pdptk4.cloudfront.net/externalApps/d28a0c14-8260-4d8d-8715-b88c10e4df59/conversion/WS-HomePageHeroImage/assets/104141.webp?q=60",
          bathroom: "https://joinup.ua/media/2015/01/AnyConv.com__abu-dhabi-sea-view-suite-bathroom.jpg",
          restaurant: "https://abudhabiholidays.co.uk/wp-content/uploads/2019/02/Emirates-Palace-Mezzaluna-Terrace.jpg",
          pool: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/97/4d/34/cascades-pool.jpg?w=700&h=-1&s=1",
          
          exterior: "https://image.khaleejtimes.com/?uuid=5cfaa86e-9765-4185-9fc5-589a9f88bc96&function=fit&type=preview&source=false&q=75&maxsize=1200&scaleup=0"
        },
        amenities: {
          wifi: true,
          parking: true,
          airConditioning: true,
          gym: true,
          frontDesk: false,
          restaurant: true,
          coffeeShop: true,
          spa: false,
          smartTv: true,
          laundry: true
        }
      },
      {
        id: 30,
        name: "Laucala Island Resort",
        location: "Laucala Island, Fiji",
        price: 240000,
        mainImage: "https://nuvomagazine.com/wp-content/uploads/2016/09/laucala_overwater_villa_aerial1.jpg",
        rating: 4.9,
        images: {
          bedroom: "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6332ea6c9cde3.jpg/1772x1180/fit/80/e8e05057db266ca384ee6d29847522f8.jpg",
          bathroom: "https://images.trvl-media.com/lodging/6000000/5490000/5487000/5486947/0ab52e21.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          restaurant: "https://d363suj4pdptk4.cloudfront.net/externalApps/d28a0c14-8260-4d8d-8715-b88c10e4df59/conversion/WS-HomePageHeroImage/assets/93694.webp?q=60",
          pool: "https://images.trvl-media.com/lodging/6000000/5490000/5487000/5486947/ac9b34dd.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
          
          exterior: "https://images.trvl-media.com/lodging/6000000/5490000/5487000/5486947/e64bed4a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
        },
        amenities: {
          wifi: true,
          parking: false,
          airConditioning: true,
          gym: true,
          frontDesk: true,
          restaurant: true,
          coffeeShop: false,
          spa: true,
          smartTv: true,
          laundry: false
        }
      }
  ];

  const hotel = hotels.find(h => h.id === parseInt(id));
  
  if (!hotel) {
    return <div className="p-4">Hotel not found</div>;
  }

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
        
        <div className="images-section">
          {Object.entries(hotel.images).map(([key, url]) => (
            <div key={key} className="image-card">
              <div className="image-container">
                <img src={url} alt={key} />
              </div>
              <div className="image-label">
                {key}
              </div>
            </div>
          ))}
        </div>

        <div className="amenities-section">
          <h2 className="amenities-title">Hotel Amenities</h2>
          <div className="amenities-grid">
            {Object.entries(hotel.amenities).map(([key, available]) => {
              if (!available) return null;
              const { icon: Icon, label } = amenityIcons[key];
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