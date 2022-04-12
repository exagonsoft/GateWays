package com.gateways.gateways_back.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gateways.gateways_back.Repository.PeripheralsRepository;
import com.gateways.gateways_back.Models.Peripherals;
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

    @Override
    public Peripherals getPeripheral(int peripheralID){
        try {
            var peripheralValue = peripheralsRepository.findById(peripheralID);
            if(!peripheralValue.isEmpty()){
                return peripheralValue.get();
            }
            else{
                return null;
            }
        } catch (Exception error) {
            return null;
        }
    }

    @Override
    public String deletePeripheral(int peripheralID){
        try{
            peripheralsRepository.deleteById(peripheralID);
            return "Peripheral deleted";
        }catch(Exception error){
            return error.getMessage();
        }
    }

    @Override
    public String deleteAllPeripherals(int GatewayID){
        try{
            peripheralsRepository.deleteAllPeripherals(GatewayID);
            return "Peripheral deleted";
        }catch(Exception error){
            return error.getMessage();
        }
    }
}
