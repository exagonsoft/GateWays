package com.gateways.backend.Services;

import com.gateways.backend.Models.Peripherals;
import  java.util.List;

public interface PeripheralsService {
    public Peripherals addPeripheral(Peripherals peripheral);
    public List<Peripherals> getAllPeripherals(int gatewayID);
    public Peripherals getPeripheral(int peripheralID);
    public String deletePeripheral(int peripheralID);
    public String deleteAllPeripherals(int GatewayID);
}
