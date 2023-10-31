package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Item;

import java.util.List;
import java.util.Optional;

public interface IItemService {
    List<Item> consultaItens();
    Optional<Item> consultaPorId(Long id);
}
