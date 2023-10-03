import React, { useState } from "react";

export default function PointRegistration() {
    const [formData, setFormData] = useState({
        nome: "",
        endereco: "",
        latitude: "",
        longitude: "",
        horarioFuncionamento: "",
        materiaisAceitos: [],
        instrucoesTriagem: "",
        responsavel: "",
        telefone: "",
        email: "",
        website: "",
        ativo: false,
        equipamentos: [],
        parcerias: [],
        imagens: [],
        status: "",
        licenca: "",
        manutencoes: [],
    });


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
            setMensagem(
                "Erro ao cadastrar o ponto. Verifique os dados informados."
            );
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Cadastro de Ponto de Coleta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="latitude">Latitude:</label>
                    <input
                        type="text"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="longitude">Longitude:</label>
                    <input
                        type="text"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="horarioFuncionamento">Horário de Funcionamento:</label>
                    <input
                        type="text"
                        id="horarioFuncionamento"
                        name="horarioFuncionamento"
                        value={formData.horarioFuncionamento}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="materiaisAceitos">Materiais Aceitos:</label>
                    <input
                        type="text"
                        id="materiaisAceitos"
                        name="materiaisAceitos"
                        value={formData.materiaisAceitos.join(', ')} // Transforme o array em uma string para exibição
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="instrucoesTriagem">Instruções de Triagem:</label>
                    <input
                        type="text"
                        id="instrucoesTriagem"
                        name="instrucoesTriagem"
                        value={formData.instrucoesTriagem}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="responsavel">Responsável:</label>
                    <input
                        type="text"
                        id="responsavel"
                        name="responsavel"
                        value={formData.responsavel}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="website">Website:</label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="ativo">Ativo:</label>
                    <input
                        type="checkbox"
                        id="ativo"
                        name="ativo"
                        checked={formData.ativo}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="equipamentos">Equipamentos:</label>
                    <input
                        type="text"
                        id="equipamentos"
                        name="equipamentos"
                        value={formData.equipamentos.join(', ')} // Transforme o array em uma string para exibição
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="parcerias">Parcerias:</label>
                    <input
                        type="text"
                        id="parcerias"
                        name="parcerias"
                        value={formData.parcerias.join(', ')} // Transforme o array em uma string para exibição
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="imagens">Imagens:</label>
                    <input
                        type="text"
                        id="imagens"
                        name="imagens"
                        value={formData.imagens.join(', ')} // Transforme o array em uma string para exibição
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="licenca">Licença:</label>
                    <input
                        type="text"
                        id="licenca"
                        name="licenca"
                        value={formData.licenca}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="manutencoes">Manutenções:</label>
                    <input
                        type="text"
                        id="manutencoes"
                        name="manutencoes"
                        value={formData.manutencoes.join(', ')} // Transforme o array em uma string para exibição
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <button onClick={() => console.log(formData)}>Salvar</button>
                </div>
            </form>
        </div>

    );
}
