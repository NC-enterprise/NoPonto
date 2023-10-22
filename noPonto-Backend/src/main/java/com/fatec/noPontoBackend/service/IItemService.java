package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.Item;

import java.util.List;
import java.util.Optional;

public interface IItemService {
    List<Item> consultaItens();
    Optional<Item> consultaPorId(Long id);
}
