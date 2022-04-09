package com.gateways.backend.Services;

import com.gateways.backend.Models.GateWays;
import java.util.List;

public interface GateWaysService {
    public GateWays addGateWay(GateWays gateway);
    public List<GateWays> getAllGateWays();
    public GateWays getGateWay(int gatewayID);
    //public GateWays updateGateWay(GateWays newGateway, int gatewayID);
    public String deleteGateWay(int gatewayID);
}
