package com.gateways.backend.Controllers;

import com.gateways.backend.Services.PeriferalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gateways.backend.Models.Periferals;

@RestController
@RequestMapping("/periferals")
public class PeriferalController {
    @Autowired
    private PeriferalsService periferalsService;

    @PostMapping("/addperiferal")
    public String add(@RequestBody Periferals periferal){
        String returnMessage = "";
        try {
            periferalsService.addPeriferal(periferal);
            returnMessage = "New Periferal Added";
        } catch (Exception error) {
            returnMessage = error.getMessage();
        }

        return returnMessage;
    }
}
