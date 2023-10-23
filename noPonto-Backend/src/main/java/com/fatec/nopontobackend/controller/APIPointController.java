package com.fatec.nopontobackend.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fatec.nopontobackend.model.Point;
import com.fatec.nopontobackend.service.IPointService;

import java.util.List;
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
    @PostMapping("/new")
    public ResponseEntity<Object> cadatrarPonto(@RequestBody Point p){
        logger.info(">>>>>> apicontroller cadastrar ponto iniciado");
        Optional<Point>ponto=pointService.cadastrar(p);
        if(ponto.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(ponto.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ponto não encontrado");
        }
    }

    @CrossOrigin
    @GetMapping("/{pointId}")
    public ResponseEntity<Point> getPontoById(@PathVariable Long pointId) {
        Optional<Point> point = pointService.consultaPorId(pointId);
        if (point.isPresent()) {
            return new ResponseEntity<>(point.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @GetMapping("/material")
    public ResponseEntity<List<Point>> getPontosPorMaterial(@RequestParam List<Long> materialIds) {
        List<Point> pontos = pointService.getPontosPorMaterial(materialIds);
        return new ResponseEntity<>(pontos, HttpStatus.OK);
    }
}
