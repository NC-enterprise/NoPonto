package com.fatec.noPontoBackend.service;

import com.fatec.noPontoBackend.model.Point;

import java.util.List;
import java.util.Optional;

public interface IPointService {
    List<Point> consultaPontosDeColeta();
    Optional<Point> consultaPorId(Long id);
    List<Point> consultaPorNome(String name);
    List<Point> getPontosPorMaterial(List<Long> materialIds);
    Optional<Point> cadastrar(Point pontoDeColeta);
    Optional<Point> atualizar(Long id, Point pontoDeColeta);
    void excluir(Long id);
}
