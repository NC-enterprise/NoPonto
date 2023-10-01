package com.fatec.noPontoBackend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;
    private String endereco;
    private double latitude;
    private double longitude;
    private String horarioFuncionamento;
    private String[] materiaisAceitos;
    private String instrucoesTriagem;
    private String responsavel;
    private String contatoTelefone;
    private String contatoEmail;
    private String site;
    private boolean acessibilidade;
    private String[] recursosNoLocal;
    private String[] parcerias;
    private String[] fotos;
    private String statusOperacao;
    private String licencaAutorizacao;
    private String[] historicoManutencao;

    public Point() {
    }

    public Point(String nome, String endereco, double latitude, double longitude,
                         String horarioFuncionamento, String[] materiaisAceitos, String instrucoesTriagem, String responsavel,
                         String contatoTelefone, String contatoEmail, String site, boolean acessibilidade, String[] recursosNoLocal,
                         String[] parcerias, String[] fotos, String statusOperacao, String licencaAutorizacao,
                         String[] historicoManutencao) {
        this.nome = nome;
        this.endereco = endereco;
        this.latitude = latitude;
        this.longitude = longitude;
        this.horarioFuncionamento = horarioFuncionamento;
        this.materiaisAceitos = materiaisAceitos;
        this.instrucoesTriagem = instrucoesTriagem;
        this.responsavel = responsavel;
        this.contatoTelefone = contatoTelefone;
        this.contatoEmail = contatoEmail;
        this.site = site;
        this.acessibilidade = acessibilidade;
        this.recursosNoLocal = recursosNoLocal;
        this.parcerias = parcerias;
        this.fotos = fotos;
        this.statusOperacao = statusOperacao;
        this.licencaAutorizacao = licencaAutorizacao;
        this.historicoManutencao = historicoManutencao;
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

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getHorarioFuncionamento() {
        return horarioFuncionamento;
    }

    public void setHorarioFuncionamento(String horarioFuncionamento) {
        this.horarioFuncionamento = horarioFuncionamento;
    }

    public String[] getMateriaisAceitos() {
        return materiaisAceitos;
    }

    public void setMateriaisAceitos(String[] materiaisAceitos) {
        this.materiaisAceitos = materiaisAceitos;
    }

    public String getInstrucoesTriagem() {
        return instrucoesTriagem;
    }

    public void setInstrucoesTriagem(String instrucoesTriagem) {
        this.instrucoesTriagem = instrucoesTriagem;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getContatoTelefone() {
        return contatoTelefone;
    }

    public void setContatoTelefone(String contatoTelefone) {
        this.contatoTelefone = contatoTelefone;
    }

    public String getContatoEmail() {
        return contatoEmail;
    }

    public void setContatoEmail(String contatoEmail) {
        this.contatoEmail = contatoEmail;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public boolean isAcessibilidade() {
        return acessibilidade;
    }

    public void setAcessibilidade(boolean acessibilidade) {
        this.acessibilidade = acessibilidade;
    }

    public String[] getRecursosNoLocal() {
        return recursosNoLocal;
    }

    public void setRecursosNoLocal(String[] recursosNoLocal) {
        this.recursosNoLocal = recursosNoLocal;
    }

    public String[] getParcerias() {
        return parcerias;
    }

    public void setParcerias(String[] parcerias) {
        this.parcerias = parcerias;
    }

    public String[] getFotos() {
        return fotos;
    }

    public void setFotos(String[] fotos) {
        this.fotos = fotos;
    }

    public String getStatusOperacao() {
        return statusOperacao;
    }

    public void setStatusOperacao(String statusOperacao) {
        this.statusOperacao = statusOperacao;
    }

    public String getLicencaAutorizacao() {
        return licencaAutorizacao;
    }

    public void setLicencaAutorizacao(String licencaAutorizacao) {
        this.licencaAutorizacao = licencaAutorizacao;
    }

    public String[] getHistoricoManutencao() {
        return historicoManutencao;
    }

    public void setHistoricoManutencao(String[] historicoManutencao) {
        this.historicoManutencao = historicoManutencao;
    }
}


