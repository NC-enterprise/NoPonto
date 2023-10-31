package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.IItemRepository;
import com.fatec.nopontobackend.model.Item;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class LoadItemDatabase {

    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initItemDatabase(IItemRepository itemRepository) {
        return args -> {
            Item item1 = new Item("Baterias", "images/baterias.svg");
            Item item2 = new Item("Eletronicos", "images/eletronicos.svg");
            Item item3 = new Item("Oleo", "images/oleo.svg");
            Item item4 = new Item("Lampadas", "images/lampadas.svg");
            Item item5 = new Item("Papeis-Papelao", "images/papeis-papelao.svg");

            itemRepository.saveAll(Arrays.asList(item1, item2, item3, item4, item5));
            logger.info(">>>>> LoadItemDatabase -> Cadastro de 5 itens realizado.");
        };
    }
}
