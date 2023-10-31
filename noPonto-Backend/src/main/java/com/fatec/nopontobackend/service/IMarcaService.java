package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Marca;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IMarcaService {
    List<Marca> consultaMarca();
    Optional<Marca> consultaPorId(Long id);

    Marca cadastrarMarca(Marca marca);

}
