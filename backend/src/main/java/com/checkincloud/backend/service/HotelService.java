package com.checkincloud.backend.service;

import com.checkincloud.backend.dto.HotelResponse;
import com.checkincloud.backend.models.Hotel;
import com.checkincloud.backend.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    // Get all hotels
    public List<HotelResponse> getAllHotels() {
        return hotelRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // Get hotel by ID
    public HotelResponse getHotelById(Long id) {
        return hotelRepository.findById(id)
                .map(this::convertToResponse)
                .orElse(null);
    }

    // Save new hotel
    public Hotel saveHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    // Update hotel
    public Hotel updateHotel(Long id, Hotel hotelDetails) {
        return hotelRepository.findById(id)
                .map(existingHotel -> {
                    existingHotel.setName(hotelDetails.getName());
                    existingHotel.setLocation(hotelDetails.getLocation());
                    existingHotel.setPrice(hotelDetails.getPrice());
                    existingHotel.setMainImage(hotelDetails.getMainImage());
                    existingHotel.setRating(hotelDetails.getRating());

                    // Update images
                    existingHotel.setBedroomImage(hotelDetails.getBedroomImage());
                    existingHotel.setBathroomImage(hotelDetails.getBathroomImage());
                    existingHotel.setRestaurantImage(hotelDetails.getRestaurantImage());
                    existingHotel.setPoolImage(hotelDetails.getPoolImage());
                    existingHotel.setExteriorImage(hotelDetails.getExteriorImage());

                    // Update amenities
                    existingHotel.setHasWifi(hotelDetails.isHasWifi());
                    existingHotel.setHasParking(hotelDetails.isHasParking());
                    existingHotel.setHasAirConditioning(hotelDetails.isHasAirConditioning());
                    existingHotel.setHasGym(hotelDetails.isHasGym());
                    existingHotel.setHasFrontDesk(hotelDetails.isHasFrontDesk());
                    existingHotel.setHasRestaurant(hotelDetails.isHasRestaurant());
                    existingHotel.setHasCoffeeShop(hotelDetails.isHasCoffeeShop());
                    existingHotel.setHasSpa(hotelDetails.isHasSpa());
                    existingHotel.setHasSmartTv(hotelDetails.isHasSmartTv());
                    existingHotel.setHasLaundry(hotelDetails.isHasLaundry());

                    return hotelRepository.save(existingHotel);
                })
                .orElse(null);
    }

    // Delete hotel
    public boolean deleteHotel(Long id) {
        return hotelRepository.findById(id)
                .map(hotel -> {
                    hotelRepository.delete(hotel);
                    return true;
                })
                .orElse(false);
    }

    // Search hotels
    public List<HotelResponse> searchHotels(String location, Double minPrice, Double maxPrice, Double minRating) {
        return hotelRepository.findAll().stream()
                .filter(hotel ->
                        (location == null || hotel.getLocation().toLowerCase().contains(location.toLowerCase())) &&
                                (minPrice == null || hotel.getPrice() >= minPrice) &&
                                (maxPrice == null || hotel.getPrice() <= maxPrice) &&
                                (minRating == null || hotel.getRating() >= minRating)
                )
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // Get hotels by rating
    public List<HotelResponse> getHotelsByRating(Double minRating, Double maxRating) {
        return hotelRepository.findAll().stream()
                .filter(hotel ->
                        hotel.getRating() >= minRating &&
                                (maxRating == null || hotel.getRating() <= maxRating)
                )
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // Get hotels by price range
    public List<HotelResponse> getHotelsByPriceRange(Double minPrice, Double maxPrice) {
        return hotelRepository.findAll().stream()
                .filter(hotel ->
                        hotel.getPrice() >= minPrice &&
                                hotel.getPrice() <= maxPrice
                )
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // Get hotels by amenities
    public List<HotelResponse> getHotelsByAmenities(Boolean wifi, Boolean parking, Boolean pool, Boolean spa) {
        return hotelRepository.findAll().stream()
                .filter(hotel ->
                        (wifi == null || hotel.isHasWifi() == wifi) &&
                                (parking == null || hotel.isHasParking() == parking) &&
                                (pool == null || hotel.isHasPool() == pool) &&
                                (spa == null || hotel.isHasSpa() == spa)
                )
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    // Helper method to convert Hotel entity to HotelResponse DTO
    private HotelResponse convertToResponse(Hotel hotel) {
        HotelResponse response = new HotelResponse();
        response.setId(hotel.getId());
        response.setName(hotel.getName());
        response.setLocation(hotel.getLocation());
        response.setPrice(hotel.getPrice());
        response.setMainImage(hotel.getMainImage());
        response.setRating(hotel.getRating());

        // Set images
        HotelResponse.Images images = new HotelResponse.Images();
        images.setBedroom(hotel.getBedroomImage());
        images.setBathroom(hotel.getBathroomImage());
        images.setRestaurant(hotel.getRestaurantImage());
        images.setPool(hotel.getPoolImage());
        images.setExterior(hotel.getExteriorImage());
        response.setImages(images);

        // Set amenities
        HotelResponse.Amenities amenities = new HotelResponse.Amenities();
        amenities.setWifi(hotel.isHasWifi());
        amenities.setParking(hotel.isHasParking());
        amenities.setAirConditioning(hotel.isHasAirConditioning());
        amenities.setGym(hotel.isHasGym());
        amenities.setFrontDesk(hotel.isHasFrontDesk());
        amenities.setRestaurant(hotel.isHasRestaurant());
        amenities.setCoffeeShop(hotel.isHasCoffeeShop());
        amenities.setSpa(hotel.isHasSpa());
        amenities.setSmartTv(hotel.isHasSmartTv());
        amenities.setLaundry(hotel.isHasLaundry());
        response.setAmenities(amenities);

        return response;
    }
}