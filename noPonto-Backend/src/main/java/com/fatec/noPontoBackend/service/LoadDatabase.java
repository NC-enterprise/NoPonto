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
                    "Responsável 1", "+55 (11) 1234-5678", "contato@ponto1.com", "www.ponto1.com", true,
                    new String[] {"Máquina de Compactação", "Recipientes Especiais"},
                    new String[] {"Parceria 1", "Parceria 2"},
                    new String[] {"url_imagem_1.jpg", "url_imagem_2.jpg"},
                    "Aberto", "Licença XYZ-12345",
                    new String[] {"Manutenção 1", "Manutenção 2"});

            Point ponto2 = new Point("Ponto de Coleta 2", "Rua da Sustentabilidade, 456", -23.789012, -45.890123,
                    "Segunda a Sexta 09:00 - 17:00",
                    new String[] {"Papel", "Plástico"},
                    "Instruções de triagem para ponto 2",
                    "Responsável 2", "+55 (11) 9876-5432", "contato@ponto2.com", "www.ponto2.com", true,
                    new String[] {"Recipientes Especiais"},
                    new String[] {"Parceria 3"},
                    new String[] {"url_imagem_3.jpg"},
                    "Aberto", "Licença ABC-54321",
                    new String[] {"Manutenção 3"});

            Point ponto3 = new Point("Ponto de Coleta 3", "Avenida da Reciclagem, 789", -23.123456, -45.234567,
                    "Segunda a Sexta 07:00 - 16:00",
                    new String[] {"Papel", "Vidro", "Metal"},
                    "Instruções de triagem para ponto 3",
                    "Responsável 3", "+55 (11) 7890-1234", "contato@ponto3.com", "www.ponto3.com", false,
                    new String[] {"Recipientes Especiais", "Máquina de Trituração"},
                    new String[] {"Parceria 4", "Parceria 5"},
                    new String[] {"url_imagem_4.jpg"},
                    "Fechado", "Licença DEF-98765",
                    new String[] {"Manutenção 4"});

            repository.saveAll(Arrays.asList(ponto1, ponto2, ponto3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 pontos de coleta realizado.");
        };
    }
}
