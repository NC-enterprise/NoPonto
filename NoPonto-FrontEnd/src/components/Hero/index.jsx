import React from 'react';
import arvores from '../../assets/arvores.jpg'

function Hero() {
    return (
        <div className='text-white' style={{
            backgroundImage: `url(${arvores})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'
                >
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'> Encontre os pontos de coleta mais próximos de você.</h1>
                <div className='flex justify-center items-center mt-8'>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        Descubra locais onde você pode fazer o descarte consciente de seus resíduos. Faça a diferença para o meio ambiente e para o futuro do nosso planeta.
                    </p>
                </div>
                <button className='bg-colorAccent text-white hover:bg-colorDarkGreen w-[220px] rounded-md font-medium my-6 mx-auto py-3'>Buscar ponto de coleta</button>
            </div>
        </div>
    );
}

export default Hero;
