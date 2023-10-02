import React from 'react';
import Search from '../../assets/undraw_search_engines.svg';

const Section2 = () => {
  return (
    <div className='w-full bg-white py-20 px-8'>
      <div className='max-w-[1440px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-colorMidGreen font-bold '>SEJA UM PARCEIRO E AJUDE O MEIO AMBIENTE</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Seja um parceiro</h1>
          <p>
          Seja parte da mudança! Ao se tornar um parceiro e cadastrar sua loja, você ajuda a promover o descarte consciente e a preservação do meio ambiente. Além disso, ofereça recompensas em sua loja para aqueles que levarem produtos para reciclagem.
          </p>
          <button className='bg-colorAccent text-white hover:bg-colorDarkGreen w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Seja Nosso Parceiro</button>
        </div>
        <img className='pl-8 w-[500px] mx-auto my-4' src={Search} alt='/' />
      </div>
    </div>
  );
};

export default Section2;