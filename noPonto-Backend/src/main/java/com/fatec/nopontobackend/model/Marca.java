package com.fatec.nopontobackend.model;

import jakarta.persistence.*;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Entity
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @Lob
    private byte[] imagem;

    private String email;

    private String website;
    @Column(length = 1000)
    private String descricao;

    private String whatsapp;
    private String uf;
    private String city;
    private double longitude;
    private double latitude;
    private String endereco;
    private String facebook;
    private String instagram;
    private String twitter;
    private String linkedin;


    public Marca() {
    }

    public Marca(String nome,  String caminhoDaImagem, String email, String website, String descricao, String whatsapp, String uf, String city, double longitude, double latitude, String endereco, String facebook, String instagram, String twitter, String linkedin) {
        this.nome = nome;
        this.imagem = carregarImagem(caminhoDaImagem);
        this.email = email;
        this.website = website;
        this.descricao = descricao;
        this.whatsapp = whatsapp;
        this.uf = uf;
        this.city = city;
        this.longitude = longitude;
        this.latitude = latitude;
        this.endereco = endereco;
        this.facebook = facebook;
        this.instagram = instagram;
        this.twitter = twitter;
        this.linkedin = linkedin;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }

    public class ImagemNaoEncontradaException extends RuntimeException {
        public ImagemNaoEncontradaException(String mensagem) {
            super(mensagem);
        }
    }

    private byte[] carregarImagem(String caminhoDaImagem) {
        try {
            ClassPathResource resource = new ClassPathResource(caminhoDaImagem);
            Path imagePath = resource.getFile().toPath();
            return Files.readAllBytes(imagePath);
        } catch (IOException e) {
            throw new ImagemNaoEncontradaException("Erro ao carregar imagem: " + e.getMessage());
        }
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
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

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getInstagram() {
        return instagram;
    }

    public void setInstagram(String instagram) {
        this.instagram = instagram;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

}
