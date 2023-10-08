import React, { useState } from 'react';
import { CursorArrowRaysIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


export default function Navbar() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Sobre", link: "/about" },
        { name: "Pontos", link: "/point" },
        { name: "Parceiros", link: "/" },
        { name: "Entrar", link: "/login" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* Logo */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <CursorArrowRaysIcon className='w-7 h-7 text-colorDarkGreen' />
                    <span>No Ponto</span>
                </div>
                {/* Icon - Mobile */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 z-50'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* Link dos items menu */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold hover:bg-colorAccent px-2 py-1 rounded  '>
                            <a href={link.link} className='text-gray-800 hover:text-white duration-500'>
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <Link to="/signup">
                        <button className='btn bg-colorDarkGreen hover:bg-colorAccent text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Cadastrar</button>
                    </Link>
                </ul>
            </div>
        </div>

    );
}
