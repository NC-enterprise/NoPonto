package com.fatec.noPontoBackend;

import com.fatec.noPontoBackend.model.Point;
import com.fatec.noPontoBackend.service.IPointService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
class NoPontoBackendApplicationTests {
	@Autowired
	IPointService pointService;

	@MockBean
	Point point;

	@Test
	void contextLoads() {
	}
	@Test
	void ct_01_consulta_com_sucesso() {
		List<Point> pontos = pointService.consultaPontosDeColeta();
		assertEquals(3, pontos.size());
	}

//	@Test
//	void ct_02_cadastro_com_sucesso() {
//		Point pontoDeColeta = new Point();
//		pontoDeColeta.setNome("Novo Ponto");
//		pontoDeColeta.setAcessibilidade(true);
//
//		when(pointService.cadastrar(pontoDeColeta)).thenReturn(Optional.of(pontoDeColeta));
//
//		Optional<Point> resultadoCadastro = pointService.cadastrar(pontoDeColeta);
//
//		assertEquals(pontoDeColeta, resultadoCadastro.orElse(null));
//	}



}
