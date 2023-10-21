package com.fatec.noPontoBackend.model;

import com.fatec.noPontoBackend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IItem extends JpaRepository<Item, Long> {
    public List<Item> findAllByTitleIgnoreCaseContaining(String title);

    public Item findByTitle(String title);
    Optional<Item> findByTitulo(String titulo);
}
