package com.fatec.nopontobackend.service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.nopontobackend.model.Point;
import com.fatec.nopontobackend.model.IPointRepository;

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


            Point ponto1 = new Point("images/ecoponto.png", "ECOPONTO ARCO ÍRIS", "contato@ponto1.com", "(11) 97865-8976","SP","Diadema", -46.60199321652654,
                    -23.6966448355422,  " R. Mozart, 23º - Jardim Arco-Iris", "segunda a sexta (8h às 16h30); sábado (8h às 13h);",
                    "Ao utilizar nosso ponto de coleta de reciclagem, por favor, lembre-se de separar os materiais recicláveis, como papel, plástico e vidro, garantindo que estejam limpos e sem contaminação. Em seguida, deposite esses materiais nos recipientes apropriados disponíveis no local para promover uma reciclagem eficaz e amigável ao meio ambiente.", itemIds);

            Point ponto2 = new Point("images/oleo.png", "Dr. óleo", "contato@ponto2.com", "(11) 98875-8932","SP","Diadema", -46.61210735126725,
                    -23.690578107864933,  "Av. Dr. Ulysses Guimarães - Vila Nogueira", "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Ao trazer seu óleo usado para o ponto de coleta, certifique-se de que ele esteja em um recipiente à prova de vazamentos e evite contaminá-lo com outros resíduos, como água ou alimentos. Ao chegar, entregue o óleo a um membro da equipe designada para a triagem.", itemIds);

            Point ponto3 = new Point("images/eletronicos.png", "Dinâmica Ambiental", "contato@ponto3.com", "(11) 98865-3214","SP","Diadema", -46.60953630533283,
                    -23.704605121006573,  "R. Álvares Cabral, 1530 - Serraria", "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
                    "Ao utilizar nosso ponto de coleta de eletrônicos, lembre-se de trazer seus dispositivos eletrônicos antigos ou quebrados, garantindo que estejam livres de informações pessoais. Uma vez lá, deposite os itens no local apropriado indicado para a reciclagem adequada desses aparelhos.", itemIds);

            // Salve os pontos de coleta no repositório de pontos
            repository.saveAll(Arrays.asList(ponto1, ponto2, ponto3));
            logger.info(">>>>> loaddatabase -> cadastro de 3 pontos de coleta realizado.");
        };
    }
}
