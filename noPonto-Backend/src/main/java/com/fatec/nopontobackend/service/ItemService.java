package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.IItemRepository;
import com.fatec.nopontobackend.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService implements IItemService{

    @Autowired
    IItemRepository repositoryI;
    @Override
    public List<Item> consultaItens() {
        return repositoryI.findAll();
    }
    @Override
    public Optional<Item> consultaPorId(Long id) {
        return Optional.empty();
    }
}
