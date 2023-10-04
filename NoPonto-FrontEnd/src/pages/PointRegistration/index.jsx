import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function PointRegistration() {
    const [formData, setFormData] = useState({
        nome: "Ponto 04",
        endereco: "rua abc 123",
        latitude: "123",
        longitude: "123",
        horarioFuncionamento: "segunda a sexta 9h as 18h",
        materiaisAceitos: ["papel", "plastico"],
        instrucoesTriagem: "limpar as peças",
        responsavel: "joao silva",
        telefone: "1177777777",
        email: "joao@gmail.com",
        website: "www.ponto04.com",
        ativo: false,
        equipamentos: ["triturador de plastico"],
        parcerias: ["mercado01", "mercado02"],
        imagens: ["data:image/jpeg;base64,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"],
        status: "verificado",
        licenca: "liçenca 123-456",
        manutencoes: ["20-09-23", "07-08-23"],
    });

    const [mensage, setMensagem] =useState(String);


    const handlePointRegistration = async () => {
        const ponto = {
            formData,
        };
        try {
            const resposta = await fetch("http://localhost:8080/api/v1/pontos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ponto)
            });
            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar o ponto.");
            }
            setMensagem("Ponto cadastrado com sucesso!");
        } catch (error) {
            setMensagem(`${error} Erro ao cadastrar o ponto. Verifique os dados informados`
                
            );
        }

        console.log(mensage)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="mx-auto max-w-screen-md px-6 mt-20 mb-20 text-colorMidGreen">
            <form className=" space-y-12">
                <div >
                    <div className="border-b border-borderColor-900/10 pb-12">
                        <h1 className="text-colorDarkGreen text-2xl font-bold leading-7 mt-6">Cadastro de Ponto de Coleta</h1>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Nome */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="nome"
                                    className="block text-base font-medium leading-6">
                                    Nome:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* E-mail */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="email"
                                    className="block text-base font-medium leading-6">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* Website: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="website"
                                    className="block text-base font-medium leading-6">
                                    Website:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Imagem: 
                            esse aqui foi o que tu fez, ele não deixa fazer upload
                            <div>
                                <label htmlFor="imagens">Imagens:</label>
                                <input
                                    type="text"
                                    id="imagens"
                                    name="imagens"
                                    value={formData.imagens.join(', ')} // Transforme o array em uma string para exibição
                                    onChange={handleInputChange}
                                />
                            </div>*/}
                            <div className="col-span-full">
                                <label
                                    htmlFor="imagens"
                                    className="block text-base font-medium leading-6">
                                    Imagens:
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
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
                                                    className="sr-only" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="mt-3 text-base font-semibold leading-7">Informações do Local</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Endereço */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="endereco"
                                    className="block text-base font-medium leading-6">
                                    Endereço:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="endereco"
                                        name="endereco"
                                        value={formData.endereco}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Latitude: */}
                            <div className="sm:col-span-3 sm:col-start-1">
                                <label
                                    htmlFor="latitude"
                                    className="block text-base font-medium leading-6">
                                    Latitude:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="latitude"
                                        name="latitude"
                                        value={formData.latitude}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Longitude:: */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="longitude"
                                    className="block text-base font-medium leading-6">
                                    Longitude:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="longitude"
                                        name="longitude"
                                        value={formData.longitude}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="mt-3 text-base font-semibold leading-7">Sobre o ponto</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Materiais Aceitos: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="materiaisAceitos"
                                    className="block text-base font-medium leading-6">
                                    Materiais Aceitos:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="materiaisAceitos"
                                        name="materiaisAceitos"
                                        value={formData.materiaisAceitos.join(', ')} // Transforme o array em uma string para exibição
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Instruções de Triagem: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="instrucoesTriagem"
                                    className="block text-base font-medium leading-6">
                                    Instruções de Triagem:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="instrucoesTriagem"
                                        name="instrucoesTriagem"
                                        value={formData.instrucoesTriagem}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Responsável: */}
                            <div className="sm:col-span-3 sm:col-start-1">
                                <label
                                    htmlFor="responsavel"
                                    className="block text-base font-medium leading-6">
                                    Responsável:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="responsavel"
                                        name="responsavel"
                                        value={formData.responsavel}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Telefone: */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="telefone"
                                    className="block text-base font-medium leading-6">
                                    Telefone:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Horário de Funcionamento: */}
                            <div className="sm:col-span-3 sm:col-start-1">
                                <label
                                    htmlFor="horarioFuncionamento"
                                    className="block text-base font-medium leading-6">
                                    Horário de Funcionamento:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="horarioFuncionamento"
                                        name="horarioFuncionamento"
                                        value={formData.horarioFuncionamento}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Status: */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="status"
                                    className="block text-base font-medium leading-6">
                                    Status:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* Licença: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="licenca"
                                    className="block text-base font-medium leading-6">
                                    Licença:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="licenca"
                                        name="licenca"
                                        value={formData.licenca}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Manutenções: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="manutencoes"
                                    className="block text-base font-medium leading-6">
                                    Manutenções:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="manutencoes"
                                        name="manutencoes"
                                        value={formData.manutencoes.join(', ')} // Transforme o array em uma string para exibição
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Equipamentos: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="equipamentos"
                                    className="block text-base font-medium leading-6">
                                    Equipamentos:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="equipamentos"
                                        name="equipamentos"
                                        value={formData.equipamentos.join(', ')} // Transforme o array em uma string para exibição
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* Parcerias: */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="parcerias"
                                    className="block text-base font-medium leading-6">
                                    Parcerias:
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="parcerias"
                                        name="parcerias"
                                        value={formData.parcerias.join(', ')} // Transforme o array em uma string para exibição
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 space-y-10">
                            {/* Ativo */}
                            <fieldset>
                                <legend className="text-base font-semibold leading-6">O ponto:</legend>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                type="checkbox"
                                                id="ativo"
                                                name="ativo"
                                                checked={formData.ativo}
                                                onChange={handleInputChange}
                                                className="h-4 w-4 rounded border-gray-300 text-colorMidGreen focus:ring-colorMidGreen"
                                            />
                                        </div>
                                        <div className="text-base leading-6">
                                            <label
                                                htmlFor="ativo"
                                                className="font-medium">
                                                Ativo
                                            </label>

                                        </div>
                                    </div>

                                </div>
                            </fieldset>                            
                        </div>
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
                    <button
                        onClick={() => handlePointRegistration()}
                        className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorBackgroundDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorBackgroundDark"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>

    );
}
