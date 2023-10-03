import  React from 'react';
import CardPoint from '../../components/CardPoint'

function Point() {
  const [pontos, setPontos] = React.useState([]);
  const [erro, setErro] = React.useState(null);
  console.log(pontos)

  React.useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/pontos");
        if (!resposta.ok) {
          throw new Error();
        }

        const dados = await resposta.json();
        setPontos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);

  if (erro) {
    return <div>Erro ao acessar o endpoint da Api: {erro}</div>;
  }
  return (
    <div className='w-full py-[6rem] px-4'>
      
      <div className='p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
  
      {pontos.map((point, index) => (
        <CardPoint key={index} point={point} />
      ))}

      </div >
    </div>
  );
}

export default Point;
