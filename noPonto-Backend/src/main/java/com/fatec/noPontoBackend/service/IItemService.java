package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.Item;

import java.util.List;
import java.util.Optional;

public interface IItemService {
    List<Item> consultarItens();
    Optional<Item> consultarPorId(Long id);
    Optional<Item> consultarPorTitulo(String titulo);
    Optional<Item> cadastrarItem(Item item);
    Optional<Item> atualizarItem(Long id, Item item);
    void excluirItem(Long id);
}
