package com.gateways.backend.Repository;
import java.util.List;

import com.gateways.backend.Models.Peripherals;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PeripheralsRepository extends JpaRepository<Peripherals, Integer>{
    @Query("SELECT p FROM Peripherals p WHERE p.gatewayid =:gatewayID")
    public List<Peripherals> getAllPeripherals(@Param("gatewayID") int gatewayID);
}
