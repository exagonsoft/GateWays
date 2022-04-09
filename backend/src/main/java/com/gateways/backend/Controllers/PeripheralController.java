package com.gateways.backend.Controllers;

import com.gateways.backend.Services.PeripheralsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gateways.backend.Models.Peripherals;
import java.util.List;

@RestController
@RequestMapping("/peripherals")
public class PeripheralController {
    @Autowired
    private PeripheralsService peripheralsService;

    @PostMapping("/addperipheral")
    public String add(@RequestBody Peripherals peripheral){
        String returnMessage = "";
        try {
            peripheralsService.addPeripheral(peripheral);
            returnMessage = "New Peripheral Added";
        } catch (Exception error) {
            returnMessage = error.getMessage();
        }

        return returnMessage;
    }

    @GetMapping("/getAll")
    public List<Peripherals> getAllPeripherals(int gatewayID){
       try{
           return peripheralsService.getAllPeripherals(gatewayID);
       }catch(Exception error){
           return null;
       }
    }

    @GetMapping("get")
    public Peripherals peripheral(int peripheralID){
        try {
            return peripheralsService.getPeripheral(peripheralID);
        } catch (Exception error) {
            return null;
        }
    }

    @PostMapping("/delete")
    public String deleteGateWay(int peripheralID){
        try{
           return peripheralsService.deletePeripheral(peripheralID);
        }catch(Exception error){
            return error.getMessage();
        }
    }
}
