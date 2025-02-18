package com.checkincloud.backend.repository;

import com.checkincloud.backend.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}