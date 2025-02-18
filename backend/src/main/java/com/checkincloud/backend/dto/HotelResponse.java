package com.checkincloud.backend.dto;

import lombok.Data;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

@Data
public class HotelResponse {
    private Long id;
    private String name;
    private String location;
    private double price;
    private String mainImage;
    private double rating;

    private Images images;
    private Amenities amenities;


    @Data
    public static class Images {
        private String bedroom;
        private String bathroom;
        private String restaurant;
        private String pool;
        private String exterior;

        public String getBedroom() {
            return bedroom;
        }

        public void setBedroom(String bedroom) {
            this.bedroom = bedroom;
        }

        public String getBathroom() {
            return bathroom;
        }

        public void setBathroom(String bathroom) {
            this.bathroom = bathroom;
        }

        public String getRestaurant() {
            return restaurant;
        }

        public void setRestaurant(String restaurant) {
            this.restaurant = restaurant;
        }

        public String getPool() {
            return pool;
        }

        public void setPool(String pool) {
            this.pool = pool;
        }

        public String getExterior() {
            return exterior;
        }

        public void setExterior(String exterior) {
            this.exterior = exterior;
        }
    }

    @Data
    public static class Amenities {
        private boolean wifi;
        private boolean parking;
        private boolean airConditioning;
        private boolean gym;
        private boolean frontDesk;
        private boolean restaurant;
        private boolean coffeeShop;
        private boolean spa;
        private boolean smartTv;
        private boolean laundry;

        public boolean isWifi() {
            return wifi;
        }

        public void setWifi(boolean wifi) {
            this.wifi = wifi;
        }

        public boolean isParking() {
            return parking;
        }

        public void setParking(boolean parking) {
            this.parking = parking;
        }

        public boolean isAirConditioning() {
            return airConditioning;
        }

        public void setAirConditioning(boolean airConditioning) {
            this.airConditioning = airConditioning;
        }

        public boolean isGym() {
            return gym;
        }

        public void setGym(boolean gym) {
            this.gym = gym;
        }

        public boolean isFrontDesk() {
            return frontDesk;
        }

        public void setFrontDesk(boolean frontDesk) {
            this.frontDesk = frontDesk;
        }

        public boolean isRestaurant() {
            return restaurant;
        }

        public void setRestaurant(boolean restaurant) {
            this.restaurant = restaurant;
        }

        public boolean isCoffeeShop() {
            return coffeeShop;
        }

        public void setCoffeeShop(boolean coffeeShop) {
            this.coffeeShop = coffeeShop;
        }

        public boolean isSpa() {
            return spa;
        }

        public void setSpa(boolean spa) {
            this.spa = spa;
        }

        public boolean isSmartTv() {
            return smartTv;
        }

        public void setSmartTv(boolean smartTv) {
            this.smartTv = smartTv;
        }

        public boolean isLaundry() {
            return laundry;
        }

        public void setLaundry(boolean laundry) {
            this.laundry = laundry;
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getMainImage() {
        return mainImage;
    }

    public void setMainImage(String mainImage) {
        this.mainImage = mainImage;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Images getImages() {
        return images;
    }

    public void setImages(Images images) {
        this.images = images;
    }

    public Amenities getAmenities() {
        return amenities;
    }

    public void setAmenities(Amenities amenities) {
        this.amenities = amenities;
    }
}