package com.gateways.gateways_back.Repository;
import com.gateways.gateways_back.Models.GateWays;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GateWaysRepository extends JpaRepository<GateWays, Integer>{
   
}
