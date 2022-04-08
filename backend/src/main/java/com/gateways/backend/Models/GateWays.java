package com.gateways.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class GateWays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PKID_GateWay;
    private String SerialNumber;
    private String GateWayName;
    private String IPV4_Address;

    public GateWays(){

    }

    /**
     * @return int return the PKID_GateWay
     */
    public int getPKID_GateWay() {
        return PKID_GateWay;
    }

    /**
     * @param PKID_GateWay the PKID_GateWay to set
     */
    public void setPKID_GateWay(int PKID_GateWay) {
        this.PKID_GateWay = PKID_GateWay;
    }

    /**
     * @return String return the SerialNumber
     */
    public String getSerialNumber() {
        return SerialNumber;
    }

    /**
     * @param SerialNumber the SerialNumber to set
     */
    public void setSerialNumber(String SerialNumber) {
        this.SerialNumber = SerialNumber;
    }

    /**
     * @return String return the GateWayName
     */
    public String getGateWayName() {
        return GateWayName;
    }

    /**
     * @param GateWayName the GateWayName to set
     */
    public void setGateWayName(String GateWayName) {
        this.GateWayName = GateWayName;
    }

    /**
     * @return String return the IPV4_Address
     */
    public String getIPV4_Address() {
        return IPV4_Address;
    }

    /**
     * @param IPV4_Address the IPV4_Address to set
     */
    public void setIPV4_Address(String IPV4_Address) {
        this.IPV4_Address = IPV4_Address;
    }

}
