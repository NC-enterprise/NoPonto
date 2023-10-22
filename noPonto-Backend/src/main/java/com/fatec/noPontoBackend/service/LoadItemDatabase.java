package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.IItemRepository;
import com.fatec.noPontoBackend.model.IUserRepository;
import com.fatec.noPontoBackend.model.Item;
import com.fatec.noPontoBackend.model.Users;
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
            Item item2 = new Item("eletronicos", "images/eletronicos.svg");
            Item item3 = new Item("oleo", "images/oleo.svg");

            itemRepository.saveAll(Arrays.asList(item1, item2, item3));
            logger.info(">>>>> LoadItemDatabase -> Cadastro de 3 itens realizado.");
        };
    }
}
