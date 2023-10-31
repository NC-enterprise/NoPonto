package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Marca;

import java.util.List;
import java.util.Optional;

public interface IMarcaService {
    List<Marca> consultaMarca();
    Optional<Marca> consultaPorId(Long id);
}
