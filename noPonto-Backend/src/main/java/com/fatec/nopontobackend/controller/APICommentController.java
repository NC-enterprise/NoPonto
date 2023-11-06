package com.fatec.nopontobackend.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatec.nopontobackend.model.Comment;
import com.fatec.nopontobackend.service.ICommentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/comentarios")
public class APICommentController {
    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    ICommentService commentService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultarTodos() {
        logger.info(">>>>>> APICommentController consultar todos");
        return ResponseEntity.status(HttpStatus.OK).body(commentService.consultarComentarios());
    }

    @CrossOrigin
    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> getComentarioById(@PathVariable Long commentId) {
        Optional<Comment> comment = commentService.consultarPorId(commentId);
        if (comment.isPresent()) {
            return new ResponseEntity<>(comment.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @PostMapping("/new")
    public ResponseEntity<Object> cadastrarComentario(@RequestBody Comment comentario) {
        logger.info(">>>>>> APICommentController cadastrar comentário iniciado");
        Optional<Comment> comentarioSalvo = commentService.cadastrar(comentario);
        return new ResponseEntity<>(comentarioSalvo.orElse(null), HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping("/{commentId}")
    public ResponseEntity<Comment> atualizarComentario(@PathVariable Long commentId, @RequestBody Comment comentario) {
        logger.info(">>>>>> APICommentController atualizar comentário iniciado");
        Optional<Comment> comentarioAtualizado = commentService.atualizar(commentId, comentario);
        if (comentarioAtualizado.isPresent()) {
            return new ResponseEntity<>(comentarioAtualizado.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Object> excluirComentario(@PathVariable Long commentId) {
        logger.info(">>>>>> APICommentController excluir comentário iniciado");
        commentService.excluir(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
