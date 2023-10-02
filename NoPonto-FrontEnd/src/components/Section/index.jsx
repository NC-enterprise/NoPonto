import React from 'react';
import Search from '../../assets/undraw_search_engines.svg';

const Section = () => {
  return (
    <div className='w-full bg-white py-20 px-8'>
      <div className='max-w-[1440px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 pr-8' src={Search} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-colorMidGreen font-bold '>CADASTRE PONTOS DE COLETA</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gerencie seus pontos de coleta de forma centralizada</h1>
          <p>
          Com nossa plataforma, você pode cadastrar pontos de coleta de forma eficiente e descomplicada. Ajude a preservar o meio ambiente incentivando o descarte consciente.
          </p>
          <button className='bg-colorAccent text-white hover:bg-colorDarkGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Comece agora</button>
        </div>
      </div>
    </div>
  );
};

export default Section;