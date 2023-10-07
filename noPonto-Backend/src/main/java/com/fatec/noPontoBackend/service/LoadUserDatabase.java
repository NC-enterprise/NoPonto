package com.fatec.noPontoBackend.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.noPontoBackend.model.Users;
import com.fatec.noPontoBackend.model.IUserRepository;

import java.util.Arrays;
@Configuration
public class LoadUserDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initUserDatabase(IUserRepository userRepository){
        return  args -> {
            Users user1 = new Users("João", "Silva", "joao@email.com");
            Users user2 = new Users("Maria", "Santos", "maria@email.com");
            Users user3 = new Users("Pedro", "Ferreira", "pedro@email.com");

            userRepository.saveAll(Arrays.asList(user1, user2, user3));
            logger.info(">>>>> LoadUserDatabase -> Cadastro de 3 usuários realizado.");
        };
    }
}
