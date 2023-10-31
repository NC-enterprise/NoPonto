package com.fatec.noPontoBackend.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMarcaRepository extends JpaRepository<Marca, Long>{
}
