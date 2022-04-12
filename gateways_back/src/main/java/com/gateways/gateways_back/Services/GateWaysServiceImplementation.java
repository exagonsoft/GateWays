package com.gateways.gateways_back.Services;

import com.gateways.gateways_back.Models.GateWays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.gateways_back.Repository.GateWaysRepository;
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

    @Override
    public GateWays getGateWay(int gatewayID){
        try {
            var gatewayValue = gatewaysRepository.findById(gatewayID);
            if(!gatewayValue.isEmpty()){
                return gatewayValue.get();
            }
            else{
                return null;
            }
        } catch (Exception error) {
            return null;
        }
    }

    @Override
    public GateWays updateGateWay(GateWays newGateway){
       return gatewaysRepository.save(newGateway);
    }

    @Override
    public String deleteGateWay(int gatewayID){
        gatewaysRepository.deleteById(gatewayID);
        return "Gateway deleted";
    }
}
