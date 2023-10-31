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
            Marca item1 = new Marca("Mercadinho", "images/marca01.jpg", "nossosite@gmail.com", "https://www.nossosite.com.br", "Nossa marca oferece produtos de beleza e cuidados com a pele de alta qualidade, impulsionando a sua luminosidade natural. Descubra a sua beleza interior e exterior com RadiantVita.", "(11) 98765-4532", "SP", "Diadema", -46.60199321652654, -23.6966448355422, "Rua das Inovações Sustentáveis, 123", "https://www.facebook.com/nossosite", "https://www.instagram.com/nossosite", "https://twitter.com/nossosite", "https://www.linkedin.com/company/nossosite" );
            Marca item2 = new Marca("tech", "images/marca02.jpg", "nossosite@gmail.com", "https://www.nossosite.com.br", "Nossa marca oferece produtos de beleza e cuidados com a pele de alta qualidade, impulsionando a sua luminosidade natural. Descubra a sua beleza interior e exterior com RadiantVita.", "(11) 98765-4532", "SP", "Diadema", -46.60199321652654, -23.6966448355422, "Rua das Inovações Sustentáveis, 123", "https://www.facebook.com/nossosite", "https://www.instagram.com/nossosite", "https://twitter.com/nossosite", "https://www.linkedin.com/company/nossosite");
            Marca item3 = new Marca("Salão M", "images/marca03.jpg", "nossosite@gmail.com", "https://www.nossosite.com.br", "Nossa marca oferece produtos de beleza e cuidados com a pele de alta qualidade, impulsionando a sua luminosidade natural. Descubra a sua beleza interior e exterior com RadiantVita.", "(11) 98765-4532", "SP", "Diadema", -46.60199321652654, -23.6966448355422, "Rua das Inovações Sustentáveis, 123", "https://www.facebook.com/nossosite", "https://www.instagram.com/nossosite", "https://twitter.com/nossosite", "https://www.linkedin.com/company/nossosite");

            marcaRepository.saveAll(Arrays.asList(item1, item2, item3));
            logger.info(">>>>> LoadItemDatabase -> Cadastro de 3 marcas realizado.");
        };
    }
}
