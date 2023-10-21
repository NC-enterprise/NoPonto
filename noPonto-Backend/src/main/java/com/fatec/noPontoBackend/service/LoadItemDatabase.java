package com.fatec.noPontoBackend.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.noPontoBackend.model.Item;
import com.fatec.noPontoBackend.model.IItem;

import java.util.Arrays;

@Configuration
public class LoadItemDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initItemDatabase(IItem repository) {
        return args -> {
            Item item1 = new Item("Papel", "url_imagem_1.jpg");
            Item item2 = new Item("Vidro", "url_imagem_2.jpg");
            Item item3 = new Item("Plástico", "url_imagem_3.jpg");

            repository.saveAll(Arrays.asList(item1, item2, item3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 itens realizado.");
        };
    }
}
