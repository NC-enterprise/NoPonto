package com.fatec.noPontoBackend.model;
import com.fatec.noPontoBackend.service.FileStorageService;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

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

    @ManyToMany
    private List<Item> items;


    @Autowired
    private FileStorageService fileStorageService;

    public Point() {
    }

    public Point(String image, String name, String email, String whatsapp, String uf, String city, double longitude, double latitude, String endereco, String horarioFuncionamento, String instrucoesTriagem, List<Item> items) {
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

    public <T> Point(String image, String s, String mail, String number, String s1, double v, double v1, String s2, String s3, List<T> list) {
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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public void saveImage(MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            this.image = fileStorageService.storeFile(imageFile);
        }
    }

    public String getImageUrl() {
        if (this.image != null) {
            return fileStorageService.getImageUrl(this.image);
        }
        return null;
    }
}



