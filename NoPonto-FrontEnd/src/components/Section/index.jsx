import React from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />

        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/6995378/pexels-photo-6995378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold mb-5'>Cadastre pontos de coleta</h3>
        <p className='pb-6 mt-5 text-lg'>
          Com nossa plataforma, você pode cadastrar pontos de coleta de forma eficiente e descomplicada. Ajude a preservar o meio ambiente incentivando o descarte consciente.
        </p>
        <div>
          <Link to="/registration">
            <button className='mr-4 hover:shadow-xl bg-colorAccent text-white hover:bg-colorDarkGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
              Cadastre agora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;