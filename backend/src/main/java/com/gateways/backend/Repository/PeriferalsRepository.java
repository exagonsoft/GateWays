package com.gateways.backend.Repository;
import com.gateways.backend.Models.Periferals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeriferalsRepository extends JpaRepository<Periferals, Integer>{
    
}
