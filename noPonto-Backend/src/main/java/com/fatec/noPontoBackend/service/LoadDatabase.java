package com.fatec.noPontoBackend.service;
import com.fatec.noPontoBackend.model.Item;
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

    private Item itemRepository;

    Item item = itemRepository.consultarItens().getFirst();

    @Bean
    CommandLineRunner initDatabase(IPointRepository repository){
        return  args -> {
            Point ponto1 = new Point("url_imagem_1.jpg", "Ponto de Coleta 1", "contato@ponto1.com", "9999999", "Rua da Reciclagem, 123",
                    -23.456789, -45.678901, "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Instruções de triagem para ponto 1",
                    Arrays.asList(item));

            Point ponto2 = new Point("url_imagem_2.jpg", "Ponto de Coleta 2", "contato@ponto2.com", "8888888", "Avenida da Reciclagem, 456",
                    -23.789012, -45.901234, "Segunda a Sexta 09:00 - 19:00, Sábado 10:00 - 14:00",
                    "Instruções de triagem para ponto 2",
                    Arrays.asList(item));

            Point ponto3 = new Point("url_imagem_3.jpg", "Ponto de Coleta 3", "contato@ponto3.com", "7777777", "Beco da Reciclagem, 789",
                    -24.012345, -46.123456, "Segunda a Sexta 07:00 - 17:00, Sábado 08:00 - 12:00",
                    "Instruções de triagem para ponto 3",
                    Arrays.asList(item));

            repository.saveAll(Arrays.asList(ponto1, ponto2, ponto3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 pontos de coleta realizado.");
        };
    }
}
