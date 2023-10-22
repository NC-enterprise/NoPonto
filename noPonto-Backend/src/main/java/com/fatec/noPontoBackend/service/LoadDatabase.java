package com.fatec.noPontoBackend.service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.noPontoBackend.model.Point;
import com.fatec.noPontoBackend.model.IPointRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class LoadDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initDatabase(IPointRepository repository) {
        return args -> {
            List<Long> itemIds = new ArrayList<>();
            itemIds.add(1L);
            itemIds.add(2L);
            itemIds.add(3L);

            Point ponto1 = new Point("url_imagem_1.jpg", "Ponto de Coleta 1", "contato@ponto1.com", "9999999","sp","city",
                    -23.456789, -45.678901, "Rua da Reciclagem, 123", "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Instruções de triagem para ponto 1", itemIds);

            Point ponto2 = new Point("url_imagem_1.jpg", "Ponto de Coleta 2", "contato@ponto1.com", "9999999","sp","city",
                    -23.456789, -45.678901, "Rua da Reciclagem, 123", "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Instruções de triagem para ponto 1", itemIds);

            Point ponto3 = new Point("url_imagem_1.jpg", "Ponto de Coleta 3", "contato@ponto1.com", "9999999","sp","city",
                    -23.456789, -45.678901, "Rua da Reciclagem, 123", "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Instruções de triagem para ponto 1", itemIds);

            // Salve os pontos de coleta no repositório de pontos
            repository.saveAll(Arrays.asList(ponto1, ponto2, ponto3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 pontos de coleta realizado.");
        };
    }
}
