package com.fatec.noPontoBackend.model;

import jakarta.persistence.*;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

    @Lob
    private byte[] imagem;

//    @ManyToMany(mappedBy = "itens")
//    private Set<Point> pontos = new HashSet<>();

    public Item() {
    }

    public Item(String nome, String caminhoDaImagem) {
        this.nome = nome;
        this.imagem = carregarImagem(caminhoDaImagem);
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

    private byte[] carregarImagem(String caminhoDaImagem) {
        try {
            ClassPathResource resource = new ClassPathResource(caminhoDaImagem);
            Path imagePath = resource.getFile().toPath();
            return Files.readAllBytes(imagePath);
        } catch (IOException e) {
            throw new RuntimeException("Erro ao carregar imagem: " + e.getMessage());
        }
    }
}
