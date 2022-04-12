package com.gateways.gateways_back.Repository;
import java.util.List;

import com.gateways.gateways_back.Models.Peripherals;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;

@Repository
public interface PeripheralsRepository extends JpaRepository<Peripherals, Integer>{
    @Query("SELECT p FROM Peripherals p WHERE p.gatewayid =:gatewayID")
    public List<Peripherals> getAllPeripherals(@Param("gatewayID") int gatewayID);

    @Modifying
    @Transactional
    @Query("DELETE FROM Peripherals p WHERE p.gatewayid =:gatewayID")
    public void deleteAllPeripherals(@Param("gatewayID") int gatewayID);
}
