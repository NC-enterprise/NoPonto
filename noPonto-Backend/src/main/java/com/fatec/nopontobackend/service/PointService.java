package com.fatec.nopontobackend.service;

import java.util.List;
import java.util.Optional;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.nopontobackend.model.Point;
import com.fatec.nopontobackend.model.IPointRepository;

@Service
public class PointService implements IPointService {
    Logger logger = LogManager.getLogger(this.getClass());

    @Autowired
    IPointRepository repository;

    @Override
    public List<Point> consultaPontosDeColeta() {
        return repository.findAll();
    }

    @Override
    public Optional<Point> consultaPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Point> consultaPorNome(String name) {
        return Optional.empty();
    }

    @Override
    public List<Point> getPontosPorMaterial(List<Long> materialIds) {
        return repository.findByItemsIn(materialIds);
    }

    @Override
    public Optional<Point> cadastrar(Point pontoDeColeta) {
        logger.info(">>>>>> servico cadastrar produto iniciado ");
        return Optional.ofNullable(repository.save(pontoDeColeta));
    }

    @Override
    public Optional<Point> atualizar(Long id, Point pontoDeColeta) {
        return Optional.empty();
    }

    @Override
    public void excluir(Long id) {
        logger.info(">>>>>> ponto excluido");

    }


}
