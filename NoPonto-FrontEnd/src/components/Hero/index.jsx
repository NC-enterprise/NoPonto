import React from 'react';
import arvores from '../../assets/arvores.jpg'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="relative text-white isolate px-6 pt-14 lg:px-8" style={{
            backgroundImage: `url(${arvores})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="mx-auto max-w-2xl py-32 sm:py-44 lg:py-46">
                <div className="text-center">
                    <h1 className="font-bold text-4xl md:text-6xl drop-shadow-2xl">
                        Encontre os pontos de coleta mais próximos de você.
                    </h1>
                    <p className="mt-6 text-lg leading-8">
                        Descubra locais onde você pode fazer o descarte consciente de seus resíduos. Faça a diferença para o meio ambiente e para o futuro do nosso planeta.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/point">
                            <button className='mr-4 hover:shadow-xl bg-colorAccent text-white hover:bg-colorDarkGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                                Buscar Pontos
                            </button>
                        </Link>
                        <Link to="/pointRegistration">
                            <button className='mr-4 hover:shadow-xl bg-colorAccent text-white hover:bg-colorDarkGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                                Cadastrar Ponto
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;
