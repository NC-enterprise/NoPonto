package com.fatec.noPontoBackend.service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.noPontoBackend.model.Point;
import com.fatec.noPontoBackend.model.IPointRepository;

import java.util.Arrays;

@Configuration
public class LoadDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initDatabase(IPointRepository repository){
        return  args -> {
            Point ponto1 = new Point("Ponto de Coleta 1", "Rua da Reciclagem, 123", -23.456789, -45.678901,
                    "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    new String[] {"Papel", "Vidro", "Plástico"},
                    "Instruções de triagem para ponto 1",
                    "Responsável 1", "+55 (11) 1234-5678", "contato@ponto1.com", "www.ponto1.com",
                    new String[] {"url_imagem_1.jpg", "url_imagem_2.jpg"});

            Point ponto2 = new Point("Ponto de Coleta 2", "Rua da Reciclagem, 123", -23.456789, -45.678901,
                    "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    new String[] {"Papel", "Vidro", "Plástico"},
                    "Instruções de triagem para ponto 1",
                    "Responsável 1", "+55 (11) 1234-5678", "contato@ponto1.com", "www.ponto1.com",
                    new String[] {"url_imagem_1.jpg", "url_imagem_2.jpg"});

            Point ponto3 = new Point("Ponto de Coleta 3", "Rua da Reciclagem, 123", -23.456789, -45.678901,
                    "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    new String[] {"Papel", "Vidro", "Plástico"},
                    "Instruções de triagem para ponto 1",
                    "Responsável 1", "+55 (11) 1234-5678", "contato@ponto1.com", "www.ponto1.com",
                    new String[] {"url_imagem_1.jpg", "url_imagem_2.jpg"});

            repository.saveAll(Arrays.asList(ponto1, ponto2, ponto3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 pontos de coleta realizado.");
        };
    }
}
