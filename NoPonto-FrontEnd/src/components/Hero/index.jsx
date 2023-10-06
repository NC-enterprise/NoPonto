import React from 'react';
import arvores from '../../assets/arvores.jpg'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


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
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border-2 border-solid border-colorAltGreen bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-colorAccent2 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-colorAccent2 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-colorAccent2  placeholder:text-base placeholder:text-white"
                                placeholder="Pesquisar"
                                aria-label="Search"
                                aria-describedby="button-addon1" />


                            <button
                                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-colorAltGreen text-white hover:bg-colorAccent2"
                                type="button"
                                id="button-addon1">
                                <MagnifyingGlassIcon className="h-5 w-5" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>     
    );
}

export default Hero;
