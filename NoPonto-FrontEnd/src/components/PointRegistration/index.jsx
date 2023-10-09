import React, { useState } from 'react';

function PointRegistration() {
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
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="border-t border-gray-900/10 pb-12">
            <h2 className="mt-3 text-xl font-semibold leading-7">
                Informações do Ponto de Coleta - Local
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Endereço */}
                <div className="col-span-full">
                    <label
                        htmlFor="endereco"
                        className="block text-base font-medium leading-6"
                    >
                        Endereço:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                        />
                    </div>
                </div>
                {/* Latitude: */}
                <div className="sm:col-span-3 sm:col-start-1">
                    <label
                        htmlFor="latitude"
                        className="block text-base font-medium leading-6"
                    >
                        Latitude:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="latitude"
                            name="latitude"
                            value={formData.latitude}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                        />
                    </div>
                </div>
                {/* Longitude:: */}
                <div className="sm:col-span-3">
                    <label
                        htmlFor="longitude"
                        className="block text-base font-medium leading-6"
                    >
                        Longitude:
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="longitude"
                            name="longitude"
                            value={formData.longitude}
                            onChange={handleInputChange}
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                        />
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="mt-10 text-xl font-semibold leading-7">
                    Sobre o ponto
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    {/* Materiais Aceitos: */}
                    <div className="col-span-full">
                        <label
                            htmlFor="materiaisAceitos"
                            className="block text-base font-medium leading-6"
                        >
                            Materiais Aceitos:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="materiaisAceitos"
                                name="materiaisAceitos"
                                value={formData.materiaisAceitos.join(", ")}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Instruções de Triagem: */}
                    <div className="col-span-full">
                        <label
                            htmlFor="instrucoesTriagem"
                            className="block text-base font-medium leading-6"
                        >
                            Instruções de Triagem:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="instrucoesTriagem"
                                name="instrucoesTriagem"
                                value={formData.instrucoesTriagem}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Responsável: */}
                    <div className="sm:col-span-3 sm:col-start-1">
                        <label
                            htmlFor="responsavel"
                            className="block text-base font-medium leading-6"
                        >
                            Responsável:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="responsavel"
                                name="responsavel"
                                value={formData.responsavel}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Telefone: */}
                    <div className="sm:col-span-3">
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
                    {/* Horário de Funcionamento: */}
                    <div className="sm:col-span-3 sm:col-start-1">
                        <label
                            htmlFor="horarioFuncionamento"
                            className="block text-base font-medium leading-6"
                        >
                            Horário de Funcionamento:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="horarioFuncionamento"
                                name="horarioFuncionamento"
                                value={formData.horarioFuncionamento}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Status: */}
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="status"
                            className="block text-base font-medium leading-6"
                        >
                            Status:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>

                    {/* Licença: */}
                    <div className="col-span-full">
                        <label
                            htmlFor="licenca"
                            className="block text-base font-medium leading-6"
                        >
                            Licença:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="licenca"
                                name="licenca"
                                value={formData.licenca}
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Manutenções: */}
                    <div className="col-span-full">
                        <label
                            htmlFor="manutencoes"
                            className="block text-base font-medium leading-6"
                        >
                            Manutenções:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="manutencoes"
                                name="manutencoes"
                                value={formData.historicoManutencao.join(", ")} // Transforme o array em uma string para exibição
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    {/* Equipamentos: */}
                    {/* Parcerias: */}
                    <div className="col-span-full">
                        <label
                            htmlFor="parcerias"
                            className="block text-base font-medium leading-6"
                        >
                            Parcerias:
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="parcerias"
                                name="parcerias"
                                value={formData.parcerias.join(", ")} // Transforme o array em uma string para exibição
                                onChange={handleInputChange}
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                            />
                        </div>
                    </div>
                    <div className="mt-5 space-y-10">
                        {/* Ativo */}
                        <fieldset>
                            <legend className="text-base font-semibold leading-6">
                                O ponto:
                            </legend>
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
                                        <label htmlFor="ativo" className="font-medium">
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
    );
}

export default PointRegistration;
