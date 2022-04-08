package com.gateways.backend.Controllers;

import com.gateways.backend.Services.PeripheralsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gateways.backend.Models.Peripherals;

@RestController
@RequestMapping("/peripherals")
public class PeripheralController {
    @Autowired
    private PeripheralsService peripheralsService;

    @PostMapping("/addPeripheral")
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
}
