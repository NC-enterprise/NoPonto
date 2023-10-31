package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.IMarcaRepository;
import com.fatec.nopontobackend.model.Marca;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class LoadMarcaDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initMarcaDatabase(IMarcaRepository marcaRepository) {
        return args -> {
            Marca item1 = new Marca("Mercadinho", "images/marca01.jpg");
            Marca item2 = new Marca("tech", "images/marca02.jpg");
            Marca item3 = new Marca("Salão M", "images/marca03.jpg");

            marcaRepository.saveAll(Arrays.asList(item1, item2, item3));
            logger.info(">>>>> LoadItemDatabase -> Cadastro de 3 marcas realizado.");
        };
    }
}
