package com.gateways.backend.Services;

import com.gateways.backend.Models.GateWays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.backend.Repository.GateWaysRepository;
import java.util.List;

@Service
public class GateWaysServiceImplementation implements GateWaysService{
    @Autowired
    private GateWaysRepository gatewaysRepository;

    @Override
    public GateWays addGateWay(GateWays gateway){
        return gatewaysRepository.save(gateway);
    };

    @Override
    public List<GateWays> getAllGateWays(){
        return gatewaysRepository.findAll();
    }
}
