package com.fatec.noPontoBackend.model;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String image;
    private String name;
    private String email;
    private String whatsapp;
    private String uf;
    private String city;
    private double longitude;
    private double latitude;
    private String endereco;
    private String horarioFuncionamento;
    private String instrucoesTriagem;

    @ElementCollection
    @CollectionTable(name = "point_items", joinColumns = @JoinColumn(name = "point_id"))
    @Column(name = "item_id")
    private List<Long> items;

    public Point() {
    }

    public Point(String image, String name, String email, String whatsapp, String uf, String city, double longitude, double latitude, String endereco, String horarioFuncionamento, String instrucoesTriagem, List<Long> items) {
        this.image = image;
        this.name = name;
        this.email = email;
        this.whatsapp = whatsapp;
        this.uf = uf;
        this.city = city;
        this.longitude = longitude;
        this.latitude = latitude;
        this.endereco = endereco;
        this.horarioFuncionamento = horarioFuncionamento;
        this.instrucoesTriagem = instrucoesTriagem;
        this.items = items;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getHorarioFuncionamento() {
        return horarioFuncionamento;
    }

    public void setHorarioFuncionamento(String horarioFuncionamento) {
        this.horarioFuncionamento = horarioFuncionamento;
    }

    public String getInstrucoesTriagem() {
        return instrucoesTriagem;
    }

    public void setInstrucoesTriagem(String instrucoesTriagem) {
        this.instrucoesTriagem = instrucoesTriagem;
    }

    public List<Long> getItems() {
        return this.items;
    }

    public void setItems(List<Long> items) {
        this.items = items;
    }

}



