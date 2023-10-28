import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { MapContainer, TileLayer } from "react-leaflet";
import '../../styles/leaflet.css'

export default function PartnerBrand() {
    const [formData, setFormData] = useState({
        nome: "Ponto de Coleta 5",
        endereco: "Rua da Reciclagem, 123",
        latitude: -23.456789,
        longitude: -45.678901,
        horarioFuncionamento: "Segunda a Sexta 08:00 - 18:00, Sábado 09:00 - 13:00",
        materiaisAceitos: ["Papel", "Vidro", "Plástico"],
        instrucoesTriagem: "Instruções de triagem para ponto 1",
        responsavel: "Responsável 1",
        contatoTelefone: "+55 (11) 1234-5678",
        contatoEmail: "contato@ponto1.com",
        site: "www.ponto1.com",
        acessibilidade: true,
        recursosNoLocal: ["Máquina de Compactação", "Recipientes Especiais"],
        parcerias: ["Parceria 1", "Parceria 2"],
        fotos: ["url_imagem_1.jpg", "url_imagem_2.jpg"],
        statusOperacao: "Aberto",
        licencaAutorizacao: "Licença XYZ-12345",
        historicoManutencao: ["Manutenção 1", "Manutenção 2"],

        redesSociais: {
            facebook: "",
            instagram: "",
            twitter: "",
            linkedin: "",
        },
    });
    const [mensage, setMensagem] = useState(String);

    const [tipoCadastro, setTipoCadastro] = useState(String);
    const [dataFromChild, setDataFromChild] = useState(null);

    console.log(dataFromChild);


    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };


    const handlePointRegistration = async () => {
        const ponto = formData;
        try {
            const resposta = await fetch("http://localhost:8080/api/v1/pontos/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ponto),
            });
            console.log(resposta.status);
            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar o ponto.");
            }
            setMensagem("Ponto cadastrado com sucesso!");
        } catch (error) {
            setMensagem(
                `${error} Erro ao cadastrar o ponto. Verifique os dados informados`
            );
        }

        console.log(mensage);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const position = [-23.6867, -46.6223];
    return (
        <div className="mx-auto max-w-screen-md sm:py-44 lg:py-46 md:py-46 text-colorMidGreen px-6 md:px-0">
            <form onSubmit={handlePointRegistration} className=" space-y-12">
                <div>
                    <div className="border-borderColor-900/10 pb-12">
                        <h1 className="text-colorDarkGreen text-3xl md:text-5xl font-bold leading-7 mt-6">
                            Cadastro de Marca Parceira
                        </h1>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Nome */}
                            <div className="col-span-full">
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
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>

                            {/* E-mail */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="email"
                                    className="block text-base font-medium leading-6"
                                >
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>

                            {/* Website: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="website"
                                    className="block text-base font-medium leading-6"
                                >
                                    Website:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            {/* Imagem:*/}
                            <div className="col-span-full">
                                <label
                                    htmlFor="imagens"
                                    className="block text-base font-medium leading-6"
                                >
                                    Imagens:
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon
                                            className="mx-auto h-12 w-12 text-gray-300"
                                            aria-hidden="true"
                                        />
                                        <div className="mt-4 flex text-base leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-colorMidGreen focus-within:outline-none focus-within:ring-2 focus-within:ring-colorMidGreen focus-within:ring-offset-2 hover:text-colorMidGreen"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Endereço:*/}
                            <div className="col-span-full h-72">
                                <label
                                    htmlFor="endereço"
                                    className="block text-base font-medium leading-6 mb-5"
                                >
                                    Endereço:
                                </label>
                                <div className="mt-2">
                                    <MapContainer
                                        center={position}
                                        zoom={13}
                                        style={{ height: '300px', width: '100%' }}
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />                                      
                                    </MapContainer>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 border-t border-gray-900/10 pb-12">
                            <h2 className="mt-3 text-xl font-semibold leading-7">
                                Informações da Marca
                            </h2>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Descrição */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="descricao"
                                        className="block text-base font-medium leading-6"
                                    >
                                        Descrição:
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="descricao"
                                            name="descricao"
                                            value={formData.descricao}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                        />
                                    </div>
                                </div>
                                {/* Autorização */}
                                <div className="col-span-full">
                                    <label htmlFor="autorizacao" className="block text-base font-medium leading-6">
                                        Autorização:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="autorizacao"
                                            name="autorizacao"
                                            value={formData.autorizacao}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                        />
                                    </div>
                                </div>
                                {/* Documento Legal */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="documentoLegal"
                                        className="block text-base font-medium leading-6"
                                    >
                                        Documento Legal:
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                className="mx-auto h-12 w-12 text-gray-300"
                                                aria-hidden="true"
                                            />
                                            <div className="mt-4 flex text-base leading-6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-colorMidGreen focus-within:outline-none focus-within:ring-2 focus-within:ring-colorMidGreen focus-within:ring-offset-2 hover:text-colorMidGreen"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Telefone: */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="telefone"
                                        className="block text-base font-medium leading-6"
                                    >
                                        Telefone:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="telefone"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                        />
                                    </div>
                                </div>

                                {/* Facebook */}

                                <div className="sm:col-span-3">
                                    <label htmlFor="facebook" className="block text-base font-medium leading-6">
                                        Facebook:
                                    </label>
                                    <input
                                        type="text"
                                        id="facebook"
                                        name="redesSociais.facebook"
                                        value={formData.redesSociais.facebook}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                                {/* Instagram */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="instagram" className="block text-base font-medium leading-6">
                                        Instagram:
                                    </label>
                                    <input
                                        type="text"
                                        id="instagram"
                                        name="redesSociais.instagram"
                                        value={formData.redesSociais.instagram}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                                {/* Twitter */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="twitter" className="block text-base font-medium leading-6">
                                        Twitter:
                                    </label>
                                    <input
                                        type="text"
                                        id="twitter"
                                        name="redesSociais.twitter"
                                        value={formData.redesSociais.twitter}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                                {/* Linkedin */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="linkedin" className="block text-base font-medium leading-6">
                                        LinkedIn:
                                    </label>
                                    <input
                                        type="text"
                                        id="linkedin"
                                        name="redesSociais.linkedin"
                                        value={formData.redesSociais.linkedin}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>

                        </div>



                        {/* Botão */}
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button
                                type="button"
                                className="text-sm font-semibold leading-6"
                                onClick={() => console.log(formData)}
                            >
                                Cancelar
                            </button>
                            <button className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorBackgroundDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorBackgroundDark">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
