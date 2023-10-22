package com.fatec.noPontoBackend.model;

import com.fatec.noPontoBackend.model.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPointRepository extends JpaRepository<Point, Long> {
    public List<Point> findAllByNameIgnoreCaseContaining(String name);


}
