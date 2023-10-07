import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function PointRegistration() {
    const [tipoCadastro, setTipoCadastro] = useState(String);

    renderSwitch(tipo) {
      switch(tipo) {
        case 'tipo1':
          return <Tpo1/>;
          case 'tipo2':
            return <Tpo2/>;
        default:
          return 'foo';
      }
    }


    return (
        <>
        <h1 className="text-colorDarkGreen text-2xl font-bold leading-7 mt-6">
            Cadastro:
        </h1>
        {/*As bagunça que é comum de todos aqui*/}

        {/*botoes de desição*/}
        <button
            className="text-sm font-semibold leading-6"
            onClick={() => setTipoCadastro("tipo1")}
          >
            tipo1
          </button>
          <button
            className="text-sm font-semibold leading-6"
            onClick={() => setTipoCadastro("tipo2")}
          >
            tipo2
          </button>

          {/*carregar compoente*/}
          {this.renderSwitch(tipoCadastro)}
           
        </>
     );
}
