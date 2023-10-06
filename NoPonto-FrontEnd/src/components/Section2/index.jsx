import React from 'react';

const Section2 = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-colorDarkGreen text-white mx-auto my-10 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h1 className='text-4xl font-black'>Seja um parceiro</h1>
        <p className='pt-4 mt-2 text-lg'>
          Seja parte da mudança! Ao se tornar um parceiro e cadastrar sua loja, você ajuda a promover o descarte consciente e a preservação do meio ambiente. Além disso, ofereça recompensas em sua loja para aqueles que levarem produtos para reciclagem.
        </p>
        <button className='bg-transparent border-2 border-colorAccent2 text-white hover:bg-colorAccent2 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Seja Nosso Parceiro</button>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/8171174/pexels-photo-8171174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full'
          src='https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
        <img
          className='object-cover w-full h-full'
          src='https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Section2;
{/* <div className='w-full bg-white py-20 px-8'>
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
    </div> */}