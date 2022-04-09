package com.gateways.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.backend.Repository.PeripheralsRepository;
import com.gateways.backend.Models.Peripherals;
import java.util.List;

@Service
public class PeripheralsServiceImplementation implements PeripheralsService{
    @Autowired
    private PeripheralsRepository peripheralsRepository;

    @Override
    public Peripherals addPeripheral(Peripherals peripheral){
        return peripheralsRepository.save(peripheral);
    }

    @Override
    public List<Peripherals> getAllPeripherals(int gatewayID){
        return peripheralsRepository.getAllPeripherals(gatewayID);
    }
}