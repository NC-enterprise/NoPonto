package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Users;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<Users> consultaUser();
    Optional<Users> consultaPorId(Long id);
    Optional<Users> cadastrar(Users usuario);
    Optional<Users> atualizar(Long id, Users usuario);
    void excluir(Long id);
}