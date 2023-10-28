import React from 'react';
import { PhoneIcon, HomeIcon, GlobeAltIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function PagePartnerBrand() {
    return (
        <main className="bg-colorLightGrey2 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className='bg-white max-w-screen-md'>
                <div className="flex justify-center mt-10">
                    <img
                        className="w-[250px] h-[250px]"
                        src="https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg"
                        alt="" />
                </div>
                <div className="px-6 py-6 mb-2">

                    {/* Nome do parceiro/marca */}
                    <div className="border-b pb-10 border-colorAccent mt-4 text-5xl md:text-5xl font-bold mb-5">
                        <h1>Development</h1>
                    </div>

                    {/* Website: */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Website:</h3>
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <GlobeAltIcon className='text-colorMidGreen w-4 h-4' />
                        <a href='https://www.facebook.com/nossosite' className='hover:text-colorAccent2' target='_blank' rel='noopener noreferrer'>https://www.nossosite.com.br</a>
                    </div>

                    {/* Contato */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Contato:</h3>
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <PhoneIcon className='text-colorMidGreen w-4 h-4' />
                        <span>(11) 98765-4532</span>
                    </div>

                    {/* Endereço */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Endereço:</h3>
                    <div className='text-base flex items-center gap-1'>
                        <HomeIcon className='text-colorMidGreen w-5 h-5' />
                        <span>Rua das Inovações Sustentáveis, 123</span>
                    </div>

                    {/* Descrição da marca */}
                    <h3 className='mt-8 text-xl font-semibold md:text-lg mb-1'>Descrição da marca:</h3>
                    <div className='text-base w-10/12'>
                        <p>Nossa marca oferece produtos de beleza e cuidados com a pele de alta qualidade, impulsionando a sua luminosidade natural. Descubra a sua beleza interior e exterior com RadiantVita.</p>
                    </div>

                    {/* Redes sociais: */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Redes sociais:</h3>
                    {/* Facebook */}
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <FaFacebook className='text-colorMidGreen w-4 h-4' />
                        <a href='https://www.facebook.com/nossosite' className='hover:text-colorAccent2' target='_blank' rel='noopener noreferrer'>https://www.facebook.com/nossosite</a>
                    </div>
                    {/* Instagram */}
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <FaInstagram className='text-colorMidGreen w-4 h-4' />
                        <a href='https://www.instagram.com/nossosite' className='hover:text-colorAccent2' target='_blank' rel='noopener noreferrer'>https://www.instagram.com/nossosite</a>
                    </div>

                    {/* Twitter */}
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <FaTwitter className='text-colorMidGreen w-4 h-4' />
                        <a href='https://twitter.com/nossosite' className='hover:text-colorAccent2' target='_blank' rel='noopener noreferrer'>https://twitter.com/nossosite</a>
                    </div>

                    {/* Linkedin */}
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <FaLinkedin className='text-colorMidGreen w-4 h-4' />
                        <a href='https://www.linkedin.com/company/nossosite' className='hover:text-colorAccent2' target='_blank' rel='noopener noreferrer'>https://www.linkedin.com/company/nossosite</a>
                    </div>

                    {/* Botão */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/">
                            <button className="rounded-full bg-colorMidGreen w-12 h-12 text-white shadow-sm hover:bg-colorAccent2 focus:outline-none flex items-center justify-center">
                                <ArrowUturnLeftIcon className="w-6 h-6" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default PagePartnerBrand;
