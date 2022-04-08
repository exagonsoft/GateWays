package com.gateways.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.backend.Repository.PeriferalsRepository;
import com.gateways.backend.Models.Periferals;

@Service
public class PeriferalsServiceImplementation implements PeriferalsService{
    @Autowired
    private PeriferalsRepository periferalsRepository;

    @Override
    public Periferals addPeriferal(Periferals periferal){
        return periferalsRepository.save(periferal);
    }
}
