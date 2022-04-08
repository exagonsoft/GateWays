package com.gateways.backend.Repository;
import com.gateways.backend.Models.Peripherals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeripheralsRepository extends JpaRepository<Peripherals, Integer>{
    
}
