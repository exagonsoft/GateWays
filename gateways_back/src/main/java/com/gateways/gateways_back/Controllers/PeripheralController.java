package com.gateways.gateways_back.Controllers;

import com.gateways.gateways_back.Services.PeripheralsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gateways.gateways_back.Models.Peripherals;
import java.util.List;

@RestController
@RequestMapping("/peripherals")
@CrossOrigin
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
    public String deletePeripheral(int peripheralID){
        try{
           return peripheralsService.deletePeripheral(peripheralID);
        }catch(Exception error){
            return error.getMessage();
        }
    }

    @PostMapping("/deleteall")
    public String deleteGateWay(int gatewayID){
        try{
           return peripheralsService.deleteAllPeripherals(gatewayID);
        }catch(Exception error){
            return error.getMessage();
        }
    }
}
