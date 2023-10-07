import React from 'react';

function SignUp() {
  return (
    <div className="min-h-screen py-40 bg-colorLightGrey2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-colorMidGreen">
            <h1 className="text-white text-3xl mb-5">Bem-vindo!</h1>
            <div>
              <p className="text-white">Se você já possui uma conta, faça <a href="#" className="text-colorAccent3 font-semibold">login</a> agora para acessar todos os recursos e benefícios exclusivos.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Sign Up</h2>
            <p className="mb-4">
              Crie sua conta. É grátis e leva apenas um minuto.
            </p>
            <form action="#">
              <div className="mt-10 mb-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* nome: */}
                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="nome"
                    className="block text-base font-medium leading-6"
                  >
                    Nome:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                    />
                  </div>
                </div>
                {/* sobrenome:: */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="sobrenome"
                    className="block text-base font-medium leading-6"
                  >
                    Sobrenome:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="sobrenome"
                      name="sobrenome"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              {/* E-mail input */}
              <div className="col-span-full mb-3">
                <label
                  htmlFor="email"
                  className="block text-base font-medium leading-6"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                  />
                </div>
              </div>

              {/* Senha input */}
              <div className="col-span-full">
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6"
                >
                  Senha
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-5">
                <button className="w-full rounded-md bg-colorMidGreen px-14 py-2 text-base font-semibold text-white shadow-sm hover:bg-colorDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorDarkGreen">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;