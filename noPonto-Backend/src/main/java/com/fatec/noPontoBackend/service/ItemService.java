package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.Item;
import com.fatec.noPontoBackend.model.IItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService implements IItemService {
    @Autowired
    private IItem itemRepository;

    @Override
    public List<Item> consultarItens() {
        return itemRepository.findAll();
    }

    @Override
    public Optional<Item> consultarPorId(Long id) {
        return itemRepository.findById(id);
    }

    @Override
    public Optional<Item> consultarPorTitulo(String titulo) {
        return itemRepository.findByTitulo(titulo);
    }

    @Override
    public Optional<Item> cadastrarItem(Item item) {
        return Optional.of(itemRepository.save(item));
    }

    @Override
    public Optional<Item> atualizarItem(Long id, Item item) {
        Optional<Item> existingItem = itemRepository.findById(id);

        if (existingItem.isPresent()) {
            item.setId(existingItem.get().getId());
            return Optional.of(itemRepository.save(item));
        }

        return Optional.empty();
    }

    @Override
    public void excluirItem(Long id) {
        itemRepository.deleteById(id);
    }
}
