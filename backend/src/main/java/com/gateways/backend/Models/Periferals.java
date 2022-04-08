package com.gateways.backend.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Periferals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PKID_Periferal ;
    private int UID_Number ;
    private String Vendor;
    private String  CreateDate;
    private Boolean Status;
    private int FKID_GateWay;

    public Periferals() {

    }

    /**
     * @return int return the PKID_Periferal
     */
    public int getPKID_Periferal() {
        return PKID_Periferal;
    }

    /**
     * @param PKID_Periferal the PKID_Periferal to set
     */
    public void setPKID_Periferal(int PKID_Periferal) {
        this.PKID_Periferal = PKID_Periferal;
    }

    /**
     * @return int return the UID_Number
     */
    public int getUID_Number() {
        return UID_Number;
    }

    /**
     * @param UID_Number the UID_Number to set
     */
    public void setUID_Number(int UID_Number) {
        this.UID_Number = UID_Number;
    }

    /**
     * @return String return the Vendor
     */
    public String getVendor() {
        return Vendor;
    }

    /**
     * @param Vendor the Vendor to set
     */
    public void setVendor(String Vendor) {
        this.Vendor = Vendor;
    }

    /**
     * @return String return the CreateDate
     */
    public String getCreateDate() {
        return CreateDate;
    }

    /**
     * @param CreateDate the CreateDate to set
     */
    public void setCreateDate(String CreateDate) {
        this.CreateDate = CreateDate;
    }

    /**
     * @return Boolean return the Status
     */
    public Boolean isStatus() {
        return Status;
    }

    /**
     * @param Status the Status to set
     */
    public void setStatus(Boolean Status) {
        this.Status = Status;
    }

    /**
     * @return int return the FKID_GateWay
     */
    public int getFKID_GateWay() {
        return FKID_GateWay;
    }

    /**
     * @param FKID_GateWay the FKID_GateWay to set
     */
    public void setFKID_GateWay(int FKID_GateWay) {
        this.FKID_GateWay = FKID_GateWay;
    }

}
