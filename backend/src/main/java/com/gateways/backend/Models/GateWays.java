package com.gateways.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class GateWays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String serialnumber;
    private String name;
    private String ipaddress;

    public GateWays(){

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
     * @return String return the serialnumber
     */
    public String getSerialnumber() {
        return serialnumber;
    }

    /**
     * @param serialnumber the serialnumber to set
     */
    public void setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return String return the ipaddress
     */
    public String getIpaddress() {
        return ipaddress;
    }

    /**
     * @param ipaddress the ipaddress to set
     */
    public void setIpaddress(String ipaddress) {
        this.ipaddress = ipaddress;
    }

}
