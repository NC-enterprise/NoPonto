package com.fatec.noPontoBackend.controller;

import com.fatec.noPontoBackend.service.IPointService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatec.noPontoBackend.model.Point;
import com.fatec.noPontoBackend.service.IPointService;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/pontos")
public class APIPointController {
    Logger logger = LogManager.getLogger(this.getClass());
    @Autowired
    IPointService pointService;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<Object> consultaTodos(){
        logger.info(">>>>>> apicontroller consulta todos");
        return ResponseEntity.status(HttpStatus.OK).body(pointService.consultaPontosDeColeta());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<Object> cadatrarPonto(@RequestBody Point p){
        logger.info(">>>>>> apicontroller cadastrar ponto iniciado");
        Optional<Point>ponto=pointService.cadastrar(p);
        return ResponseEntity.status(HttpStatus.CREATED).body(ponto.get());
    }
}
