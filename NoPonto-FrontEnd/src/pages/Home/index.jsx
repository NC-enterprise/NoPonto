import React from 'react';
import './style.css'
import arvores from '../../assets/arvores.jpg'

function Home() {
  return (
    <div
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${arvores})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Encontre os pontos de coleta mais próximos de você.
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Descubra locais onde você pode fazer o descarte consciente de seus resíduos. Faça a diferença para o meio ambiente e para o futuro do nosso planeta.
          </p>
          <button className='bg-colorAccent w-[200px] hover:bg-colorDarkGreen rounded-md font-medium my-6 mx-auto py-4 text-white'>Buscar ponto de coleta</button>
        </div>
      </div>
    </div>

  );
}

export default Home;
