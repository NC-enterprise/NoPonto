import React from 'react';
import { ClockIcon, PhoneIcon, HomeIcon, DevicePhoneMobileIcon, LightBulbIcon, NewspaperIcon, Battery0Icon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom';
import ConverteBase64ToImage from "../../utils/ConverteBase64ToImage";
import { Link } from 'react-router-dom';

function PagePoint() {
    const { id } = useParams();
    const [ponto, setPonto] = React.useState([]);
    const [comentarios, setComentarios] = React.useState([]);
    // const [formData, setFormData] = React.useState({
    //     author: "undefined",
    //     text: "",
    //     createdAt: "",
    //     pointId: id
    // });
    const [newComment, setNewComment] = React.useState('');
    const [erro, setErro] = React.useState(null);
    const imageUrl = ConverteBase64ToImage(ponto.image, 'image/png');

    const abrirWhatsApp = () => {
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${ponto.whatsapp}`;
        window.open(linkWhatsApp);
    };


    React.useEffect(() => {
        const consulta = async () => {
            try {
                const resposta = await fetch(`http://localhost:8080/api/v1/pontos/${id}`);
                if (!resposta.ok) {
                    throw new Error();
                }

                const dados = await resposta.json();
                setPonto(dados);
            } catch (error) {
                setErro(error.message);
            }
        };
        consulta();
    }, [id]);

    React.useEffect(() => {
        const consulta = async () => {
            try {
                const resposta = await fetch(`http://localhost:8080/api/v1/comentarios`);
                if (!resposta.ok) {
                    throw new Error();
                }

                const dados = await resposta.json();
                setComentarios(dados);
            } catch (error) {
                setErro(error.message);
            }
        };
        consulta();
    }, [id]);


    if (erro) {
        return <div>Erro ao acessar o endpoint da Api: {erro}</div>;
    }

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
        console.log(newComment)
    };

    const handleCommentRegistration = async () => {

        try {
            const data = {
                author: "Nome do Autor",
                text: newComment,
                createdAt: new Date().toISOString(),
                pointId: id,
            };

            const resposta = await fetch("http://localhost:8080/api/v1/comentarios/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(resposta.status);
            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar o comentario.");
            }
            setMensagem("comentario cadastrado com sucesso!");
        } catch (error) {
            setMensagem(
                `${error} Erro ao cadastrar o comentario. Verifique os dados informados`
            );
        }

        console.log(mensage);
    };

    // const addComment = () => {

    //     const newCommentObj = {
    //       author: "Nome do Autor",
    //       text: newComment,
    //       createdAt: new Date().toISOString(),
    //       pointId: id,
    //     };
    //     console.log(newCommentObj);
    //   };


    return (
        <main className="bg-colorLightGrey2 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className=' bg-white max-w-screen-md'>
                <img
                    className="w-full"
                    src={imageUrl}
                    alt="" />
                <div className="px-6 py-6 mb-2">
                    {/* Nome do ponto */}
                    <div className="border-b pb-10 border-colorAccent mt-4 text-5xl md:text-5xl font-bold mb-5">
                        <h1>{ponto.name}</h1>
                    </div>

                    {/* Horários */}
                    <h3 className='text-xl font-semibold md:text-lg mb-1'>Horários:</h3>
                    <div className='text-base flex items-center gap-1'>

                        <ClockIcon className='text-colorMidGreen w-5 h-5' />
                        <span>{ponto.horarioFuncionamento}</span>
                    </div>

                    {/* Telefone */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Telefone:</h3>
                    <div className='text-base flex items-center gap-1 mt-2 mb-2'>
                        <PhoneIcon className='text-colorMidGreen w-4 h-4' />
                        <span>{ponto.whatsapp}</span>
                    </div>

                    {/* Endereço */}
                    <h3 className='mt-5 text-xl font-semibold md:text-lg mb-1'>Endereço:</h3>
                    <div className='text-base flex items-center gap-1'>
                        <HomeIcon className='text-colorMidGreen w-5 h-5' />
                        <span>{ponto.endereco}</span>
                    </div>

                    {/* Instruções de Triagem: */}
                    <h3 className='mt-8 text-xl font-semibold md:text-lg mb-1'>Instruções de Triagem:</h3>
                    <div className='text-base w-10/12'>
                        <p>{ponto.instrucoesTriagem}</p>
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
                    <div className="mt-8 mb-4 flex items-center text-base text-gray-600">
                        <span className="ml-2">34 comentários</span></div>
                    {comentarios.map(c => (
                        <div key={c.id}>
                            <p>Autor: {c.author}</p>
                            <p>Comentário: {c.text}</p>
                            <p>Data de Criação: {c.createdAt}</p>
                        </div>
                    ))}

                    {/* Área para escrever e salvar um comentário */}
                    <div className="mt-5">
                        <label htmlFor='comentario'>aaa</label>
                        <textarea
                            id='comentario'
                            name='comentario'
                            placeholder="Escreva seu comentário..."
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                        <button onClick={handleCommentRegistration}>Salvar Comentário</button>
                    </div>

                    {/* Botão */}

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/point">
                            <button
                                type="button"
                                className="rounded-md text-sm font-semibold px-6 py-2 leading-6 hover:bg-colorAccent2 hover:text-white"
                            >
                                Voltar
                            </button>
                        </Link>
                        <button
                            className="rounded-md bg-colorMidGreen hover:bg-colorAccent2 px-10 py-2 text-sm font-semibold text-white shadow-sm"
                            onClick={abrirWhatsApp}
                        >
                            Entrar em contato
                        </button>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default PagePoint;
