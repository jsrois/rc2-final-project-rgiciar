package org.factoriaf5.backend.Model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "cat")
public class Cat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cat")
    private Integer id;
    private String name;
    private String chip_id;
    private Date birth;
    private String gender;
    private String breed;
    private String color;
    private String features;
    private String sterilized;
    private String allergies;
    private String health;
    
    
    public Cat() {

    }

    public Cat(Integer id, String name, String chip_id, Date birth, String gender, String breed, String color, String features, String sterilized, String allergies, String health) {
        this.id = id;
        this.name = name;
        this.chip_id = chip_id;
        this.birth = birth;
        this.gender = gender;
        this.breed = breed;
        this.color = color;
        this.features = features;
        this.sterilized = sterilized;
        this.allergies = allergies;
        this.health = health;
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

    public String getChip_id() {
        return chip_id;
    }

    public void setChip_id(String chip_id) {
        this.chip_id = chip_id;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public String getSterilized() {
        return sterilized;
    }

    public void setSterilized(String sterilized) {
        this.sterilized = sterilized;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public String getHealth() {
        return health;
    }

    public void setHealth(String health) {
        this.health = health;
    }
    
}
