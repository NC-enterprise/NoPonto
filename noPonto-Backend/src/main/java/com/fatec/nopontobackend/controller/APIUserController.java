package com.fatec.nopontobackend.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatec.nopontobackend.model.Users;
import com.fatec.nopontobackend.service.IUserService;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/usuarios")
public class APIUserController {
    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    IUserService userService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultaTodos() {
        logger.info(">>>>>> apicontroller consulta todos");
        return ResponseEntity.status(HttpStatus.OK).body(userService.consultaUser());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<Object> consultaPorId(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller consultaPorId iniciado");
        Optional<Users> user = userService.consultaPorId(id);
        return user.<ResponseEntity<Object>>map(value -> ResponseEntity.status(HttpStatus.OK).body(value)).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado"));
    }

    @CrossOrigin
    @PostMapping("/new")
    public ResponseEntity<Object> cadastrarUsuario(@RequestBody Users user) {
        logger.info(">>>>>> apicontroller cadastrar usuário iniciado");
        Optional<Users> usuario = userService.cadastrar(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuario.get());
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizarUsuario(@PathVariable Long id, @RequestBody Users user) {
        logger.info(">>>>>> apicontroller atualizar usuário iniciado");
        Optional<Users> usuarioAtualizado = userService.atualizar(id, user);
        if (usuarioAtualizado.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(usuarioAtualizado.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado");
        }
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> excluirUsuario(@PathVariable Long id) {
        logger.info(">>>>>> apicontroller excluir usuário iniciado");
        userService.excluir(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
