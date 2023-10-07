package com.fatec.noPontoBackend.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<Users, Long> {
    public List<Users> findAllByNomeIgnoreCaseContaining(String nome);
}
