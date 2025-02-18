package com.checkincloud.backend.controller;

import com.checkincloud.backend.dto.HotelResponse;
import com.checkincloud.backend.models.Hotel;
import com.checkincloud.backend.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin(origins = "http://localhost:5173") // Adjust this based on your frontend URL
public class HotelController {

    @Autowired
    private HotelService hotelService;

    // Get all hotels
    @GetMapping
    public ResponseEntity<List<HotelResponse>> getAllHotels() {
        List<HotelResponse> hotels = hotelService.getAllHotels();
        return new ResponseEntity<>(hotels, HttpStatus.OK);
    }

    // Get hotel by ID
    @GetMapping("/{id}")
    public ResponseEntity<HotelResponse> getHotelById(@PathVariable Long id) {
        HotelResponse hotel = hotelService.getHotelById(id);
        if (hotel != null) {
            return new ResponseEntity<>(hotel, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Create new hotel
    @PostMapping
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel) {
        try {
            Hotel newHotel = hotelService.saveHotel(hotel);
            return new ResponseEntity<>(newHotel, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Update hotel
    @PutMapping("/{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails) {
        try {
            Hotel updatedHotel = hotelService.updateHotel(id, hotelDetails);
            if (updatedHotel != null) {
                return new ResponseEntity<>(updatedHotel, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Delete hotel
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteHotel(@PathVariable Long id) {
        try {
            boolean deleted = hotelService.deleteHotel(id);
            Map<String, Boolean> response = Map.of("deleted", deleted);
            if (deleted) {
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Search hotels by location
    @GetMapping("/search")
    public ResponseEntity<List<HotelResponse>> searchHotels(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) Double minRating) {
        try {
            List<HotelResponse> hotels = hotelService.searchHotels(location, minPrice, maxPrice, minRating);
            return new ResponseEntity<>(hotels, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get hotels by rating range
    @GetMapping("/byRating")
    public ResponseEntity<List<HotelResponse>> getHotelsByRating(
            @RequestParam Double minRating,
            @RequestParam(required = false) Double maxRating) {
        try {
            List<HotelResponse> hotels = hotelService.getHotelsByRating(minRating, maxRating);
            return new ResponseEntity<>(hotels, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get hotels by price range
    @GetMapping("/byPrice")
    public ResponseEntity<List<HotelResponse>> getHotelsByPriceRange(
            @RequestParam Double minPrice,
            @RequestParam Double maxPrice) {
        try {
            List<HotelResponse> hotels = hotelService.getHotelsByPriceRange(minPrice, maxPrice);
            return new ResponseEntity<>(hotels, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get hotels with specific amenities
    @GetMapping("/byAmenities")
    public ResponseEntity<List<HotelResponse>> getHotelsByAmenities(
            @RequestParam(required = false) Boolean wifi,
            @RequestParam(required = false) Boolean parking,
            @RequestParam(required = false) Boolean pool,
            @RequestParam(required = false) Boolean spa) {
        try {
            List<HotelResponse> hotels = hotelService.getHotelsByAmenities(wifi, parking, pool, spa);
            return new ResponseEntity<>(hotels, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Error handling for invalid hotel ID format
    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<String> handleNumberFormatException(NumberFormatException e) {
        return new ResponseEntity<>("Invalid hotel ID format", HttpStatus.BAD_REQUEST);
    }
}