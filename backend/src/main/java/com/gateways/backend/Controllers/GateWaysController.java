package com.gateways.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gateways.backend.Services.GateWaysService;
import com.gateways.backend.Models.GateWays;

@RestController
@RequestMapping("/gateways")
public class GateWaysController {
    @Autowired
    private GateWaysService gatewaysService;

    @PostMapping("/addgateway")
    public String add(@RequestBody GateWays gateway){
        String returnMessage = "";
        try{
            gatewaysService.addGateWay(gateway);
            returnMessage = "New GateWay Added";
        }catch(Error error){
            returnMessage = error.getMessage();
        }
        return  returnMessage;
    }
}
