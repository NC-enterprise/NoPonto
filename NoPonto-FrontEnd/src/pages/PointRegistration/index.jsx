import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function PointRegistration() {
    const [formData, setFormData] = useState({
        nome: "aaa",
        endereco: "aaa",
        latitude: "123",
        longitude: "123",
        horarioFuncionamento: "12344",
        materiaisAceitos: ['papel', 'baterias'],
        instrucoesTriagem: "aaa",
        responsavel: "aaa",
        telefone: "aaa",
        email: "aaa@gmail.com",
        website: "aa",
        ativo: false,
        equipamentos: ['todos', 'os', 'possiveis'],
        parcerias: ['mercadinho', 'da', 'esquina'],
        imagens: ['sem','imagem'],
        status: "a",
        licenca: "a",
        manutencoes: ['foram','feitas'],
    });
    const [mensage, setMensagem] = useState(String)


    const handlePointRegistration = async () => {
        try {
            const resposta = await fetch("http://localhost:8080/api/v1/pontos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
                
            });
            console.log('ponto')
            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar o ponto.");
            }
            setMensagem("Ponto cadastrado com sucesso!");
        } catch (error) {
            setMensagem(`${error} Erro ao cadastrar o ponto. Verifique os dados informados`);
        }
    };

    console.log(mensage)

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
                                        value={formData.materiaisAceitos}
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
                                        value={formData.manutencoes}
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
                                        value={formData.equipamentos}
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
                                        value={formData.parcerias}
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
                    <button type="button" className="text-sm font-semibold leading-6">
                        Cancelar
                    </button>
                    <button
                        onClick={() => handlePointRegistration(formData)}
                        className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorBackgroundDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorBackgroundDark"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>

    );
}
