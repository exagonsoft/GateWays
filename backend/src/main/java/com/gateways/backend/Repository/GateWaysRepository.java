package com.gateways.backend.Repository;
import com.gateways.backend.Models.GateWays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GateWaysRepository extends JpaRepository<GateWays, Integer>{
    
}
