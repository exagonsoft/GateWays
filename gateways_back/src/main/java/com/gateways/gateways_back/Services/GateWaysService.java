package com.gateways.gateways_back.Services;

import com.gateways.gateways_back.Models.GateWays;
import java.util.List;

public interface GateWaysService {
    public GateWays addGateWay(GateWays gateway);
    public List<GateWays> getAllGateWays();
    public GateWays getGateWay(int gatewayID);
    public GateWays updateGateWay(GateWays newGateway);
    public String deleteGateWay(int gatewayID);
}
