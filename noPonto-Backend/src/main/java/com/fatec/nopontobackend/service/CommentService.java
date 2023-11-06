package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Comment;
import com.fatec.nopontobackend.model.ICommentRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService implements ICommentService {

    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    ICommentRepository repositoryC;

    @Override
    public List<Comment> consultarComentarios() {
        return repositoryC.findAll();
    }

    @Override
    public Optional<Comment> consultarPorId(Long id) {
        return repositoryC.findById(id);
    }

    @Override
    public Optional<Comment> cadastrar(Comment comentario) {
        return Optional.of(repositoryC.save(comentario));
    }

    @Override
    public Optional<Comment> atualizar(Long id, Comment comentario) {
        if (repositoryC.existsById(id)) {
            comentario.setId(id);
            return Optional.of(repositoryC.save(comentario));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void excluir(Long id) {
        repositoryC.deleteById(id);
    }
}
