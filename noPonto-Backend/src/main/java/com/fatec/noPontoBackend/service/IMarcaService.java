package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.Marca;

import java.util.List;
import java.util.Optional;

public interface IMarcaService {
    List<Marca> consultaMarca();
    Optional<Marca> consultaPorId(Long id);
}
