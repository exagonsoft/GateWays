package com.gateways.backend.Services;

import com.gateways.backend.Models.GateWays;
import java.util.List;

public interface GateWaysService {
    public GateWays addGateWay(GateWays gateway);
    public List<GateWays> getAllGateWays();
    public GateWays getGateWay(int gatewayID);
}
