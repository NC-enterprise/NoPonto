package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.IPointRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fatec.nopontobackend.model.Comment;
import com.fatec.nopontobackend.model.Point;
import com.fatec.nopontobackend.model.ICommentRepository;
import org.springframework.context.annotation.DependsOn;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Optional;

@Configuration
@DependsOn("pointService")
public class LoadCommentDatabase {
    Logger logger = LogManager.getLogger(this.getClass());

    @Bean
    CommandLineRunner initCommentDatabase(ICommentRepository commentRepository, IPointService pointService) {
        return args -> {
                Comment comment1 = new Comment("Autor1", "Este é um comentário sobre o ponto 1", LocalDateTime.now(), 1L);
                Comment comment2 = new Comment("Autor2", "Este é um comentário sobre o ponto 2", LocalDateTime.now(), 2L);

                commentRepository.saveAll(Arrays.asList(comment1, comment2));
                logger.info(">>>>> LoadCommentDatabase -> Cadastro de comentários realizado.");

        };

    }
}

