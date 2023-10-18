import React from 'react';
import { ClockIcon, PhoneIcon, HomeIcon, DevicePhoneMobileIcon, LightBulbIcon, NewspaperIcon, Battery0Icon } from '@heroicons/react/24/solid'

function PagePoint() {
    return (
        <main className="bg-colorLightGrey2 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className=' bg-white max-w-screen-md'>
                <img
                    className="w-full"
                    src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
                <div className="px-6 py-6 mb-2">
                    {/* Nome do ponto */}
                    <div className="border-b pb-10 border-colorAccent mt-4 text-5xl md:text-5xl font-bold mb-5">
                        <h1>Recicla</h1>
                    </div>

                    {/* Horários */}
                    <h3 className='text-xl font-semibold md:text-lg mb-1'>Horários:</h3>
                    <div className='text-base flex items-center gap-1'>

                        <ClockIcon className='text-colorMidGreen w-5 h-5'/>
                        <span>Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00</span>
                    </div>

                    {/* Telefone */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Telefone:</h3>
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <PhoneIcon className='text-colorMidGreen w-4 h-4' />
                        <span> 11 99999999999</span>
                    </div>

                    {/* Endereço */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Endereço:</h3>
                    <div className='text-base flex items-center gap-1'>
                        <HomeIcon className='text-colorMidGreen w-5 h-5' />
                        <span>Rua da Reciclagem, 123</span>
                    </div>

                    

                    {/* Instruções de Triagem: */}
                    <h3 className='mt-8 text-xl font-semibold md:text-lg mb-1'>Instruções de Triagem:</h3>
                    <div className='text-base w-10/12'>
                        <p>Implementamos um processo de triagem, limitando o acesso a até duas pessoas por vez no ponto de coleta.</p>
                    </div>

                    {/* Responsável: */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Responsável:</h3>
                    <div className='text-base'>
                    
                        <span>Marina Sousa</span>
                    </div>
                    {/* Resíduos Coletados */}
                    <h3 className='mt-8 text-xl font-semibold md:text-lg mb-5'>Resíduos Coletados:</h3>
                    <div className='mt-5 text-base flex items-center gap-1'>
                        <DevicePhoneMobileIcon className='mr-2 w-8 h-8' />
                        <LightBulbIcon className='mr-2 w-8 h-8' />
                        <NewspaperIcon className='mr-2 w-8 h-8' />
                        <Battery0Icon className='mr-2 w-8 h-8' />
                    </div>

                    {/* Comentários */}
                    <div className="mt-8 mb-4 flex items-center text-base text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">34 comentários</span></div>

                    {/* Botão */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">

                        <button className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">
                            Entrar em contato
                        </button>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default PagePoint;