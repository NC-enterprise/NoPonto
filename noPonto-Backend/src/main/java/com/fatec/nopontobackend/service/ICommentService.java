package com.fatec.nopontobackend.service;

import com.fatec.nopontobackend.model.Comment;
import com.fatec.nopontobackend.model.Point;

import java.util.List;
import java.util.Optional;

public interface ICommentService {
    List<Comment> consultarComentarios();
    Optional<Comment> consultarPorId(Long id);
    Optional<Comment> cadastrar(Comment comentario);
    Optional<Comment> atualizar(Long id, Comment comentario);
    void excluir(Long id);
}
