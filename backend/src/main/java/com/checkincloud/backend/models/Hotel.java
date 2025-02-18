package com.checkincloud.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private double price;
    private String mainImage;
    private double rating;

    // Images
    private String bedroomImage;
    private String bathroomImage;
    private String restaurantImage;
    private String poolImage;
    private String exteriorImage;

    // Amenities
    private boolean hasWifi;
    private boolean hasParking;
    private boolean hasAirConditioning;
    private boolean hasGym;
    private boolean hasFrontDesk;
    private boolean hasRestaurant;
    private boolean hasCoffeeShop;
    private boolean hasSpa;
    private boolean hasSmartTv;
    private boolean hasLaundry;
    private boolean hasPool;

    public boolean isHasPool() {
        return hasPool;
    }

    public void setHasPool(boolean hasPool) {
        this.hasPool = hasPool;
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

    public String getBedroomImage() {
        return bedroomImage;
    }

    public void setBedroomImage(String bedroomImage) {
        this.bedroomImage = bedroomImage;
    }

    public String getBathroomImage() {
        return bathroomImage;
    }

    public void setBathroomImage(String bathroomImage) {
        this.bathroomImage = bathroomImage;
    }

    public String getRestaurantImage() {
        return restaurantImage;
    }

    public void setRestaurantImage(String restaurantImage) {
        this.restaurantImage = restaurantImage;
    }

    public String getPoolImage() {
        return poolImage;
    }

    public void setPoolImage(String poolImage) {
        this.poolImage = poolImage;
    }

    public String getExteriorImage() {
        return exteriorImage;
    }

    public void setExteriorImage(String exteriorImage) {
        this.exteriorImage = exteriorImage;
    }

    public boolean isHasWifi() {
        return hasWifi;
    }

    public void setHasWifi(boolean hasWifi) {
        this.hasWifi = hasWifi;
    }

    public boolean isHasParking() {
        return hasParking;
    }

    public void setHasParking(boolean hasParking) {
        this.hasParking = hasParking;
    }

    public boolean isHasAirConditioning() {
        return hasAirConditioning;
    }

    public void setHasAirConditioning(boolean hasAirConditioning) {
        this.hasAirConditioning = hasAirConditioning;
    }

    public boolean isHasGym() {
        return hasGym;
    }

    public void setHasGym(boolean hasGym) {
        this.hasGym = hasGym;
    }

    public boolean isHasFrontDesk() {
        return hasFrontDesk;
    }

    public void setHasFrontDesk(boolean hasFrontDesk) {
        this.hasFrontDesk = hasFrontDesk;
    }

    public boolean isHasRestaurant() {
        return hasRestaurant;
    }

    public void setHasRestaurant(boolean hasRestaurant) {
        this.hasRestaurant = hasRestaurant;
    }

    public boolean isHasCoffeeShop() {
        return hasCoffeeShop;
    }

    public void setHasCoffeeShop(boolean hasCoffeeShop) {
        this.hasCoffeeShop = hasCoffeeShop;
    }

    public boolean isHasSpa() {
        return hasSpa;
    }

    public void setHasSpa(boolean hasSpa) {
        this.hasSpa = hasSpa;
    }

    public boolean isHasSmartTv() {
        return hasSmartTv;
    }

    public void setHasSmartTv(boolean hasSmartTv) {
        this.hasSmartTv = hasSmartTv;
    }

    public boolean isHasLaundry() {
        return hasLaundry;
    }

    public void setHasLaundry(boolean hasLaundry) {
        this.hasLaundry = hasLaundry;
    }
}