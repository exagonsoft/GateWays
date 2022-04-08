package com.gateways.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.backend.Repository.PeripheralsRepository;
import com.gateways.backend.Models.Peripherals;

@Service
public class PeripheralsServiceImplementation implements PeripheralsService{
    @Autowired
    private PeripheralsRepository PeripheralsRepository;

    @Override
    public Peripherals addPeripheral(Peripherals peripheral){
        return PeripheralsRepository.save(peripheral);
    }
}
