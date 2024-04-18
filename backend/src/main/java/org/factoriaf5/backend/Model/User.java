package org.factoriaf5.backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id;
    private String name;
    private String phone;
    private String direction;
    private String centername;
    private String vetname;
    private String vetphone;
    private String emergencyphone;
    private String vetdirection;
    
    
    public User() {

    }
    
    
    public User(Integer id, String name, String phone, String direction, String centername, String vetname,
            String vetphone, String emergencyphone, String vetdirection) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.direction = direction;
        this.centername = centername;
        this.vetname = vetname;
        this.vetphone = vetphone;
        this.emergencyphone = emergencyphone;
        this.vetdirection = vetdirection;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getCentername() {
        return centername;
    }

    public void setCentername(String centername) {
        this.centername = centername;
    }

    public String getVetname() {
        return vetname;
    }

    public void setVetname(String vetname) {
        this.vetname = vetname;
    }

    public String getVetphone() {
        return vetphone;
    }
    
    public void setVetphone(String vetphone) {
        this.vetphone = vetphone;
    }
    
    public String getEmergencyphone() {
        return emergencyphone;
    }
    
    public void setEmergencyphone(String emergencyphone) {
        this.emergencyphone = emergencyphone;
    }
    
    public String getVetdirection() {
        return vetdirection;
    }
    
    public void setVetdirection(String vetdirection) {
        this.vetdirection = vetdirection;
    }
    
}
