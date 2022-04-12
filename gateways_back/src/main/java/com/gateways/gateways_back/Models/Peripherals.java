package com.gateways.gateways_back.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Peripherals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private int idnumber ;
    private String vendor;
    private String  cratedate;
    private Boolean status;
    private int gatewayid;

    public Peripherals() {

    }

    

    /**
     * @return int return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return int return the idnumber
     */
    public int getIdnumber() {
        return idnumber;
    }

    /**
     * @param idnumber the idnumber to set
     */
    public void setIdnumber(int idnumber) {
        this.idnumber = idnumber;
    }

    /**
     * @return String return the vendor
     */
    public String getVendor() {
        return vendor;
    }

    /**
     * @param vendor the vendor to set
     */
    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    /**
     * @return String return the cratedate
     */
    public String getCratedate() {
        return cratedate;
    }

    /**
     * @param cratedate the cratedate to set
     */
    public void setCratedate(String cratedate) {
        this.cratedate = cratedate;
    }

    /**
     * @return Boolean return the status
     */
    public Boolean isStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(Boolean status) {
        this.status = status;
    }

    /**
     * @return int return the gatewayid
     */
    public int getGatewayid() {
        return gatewayid;
    }

    /**
     * @param gatewayid the gatewayid to set
     */
    public void setGatewayid(int gatewayid) {
        this.gatewayid = gatewayid;
    }

}
