import React, { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import './leaflet.css'
import './style.css'

export default function PartnerBrand() {
    const [items, setItems] = useState([]);
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedPosition, setSelectedPosition] = useState([-23.6867, -46.6223]);
    const [initialPosition, setInitialPosition] = useState([-23.6936355, -46.641581]);
    const [selectedFile, setSelectedFile] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        endereco: '',
        horarioFuncionamento: '',
        instrucoesTriagem: '',
    });

    const [mensage, setMensagem] = useState(String);
    const [erro, setErro] = React.useState(null);

    //itens 
    useEffect(() => {
        const consulta = async () => {
          try {
            const resposta = await fetch("http://localhost:8080/api/v1/itens");
            if (!resposta.ok) {
              throw new Error();
            }
    
            const dados = await resposta.json();
            setItems(dados);
          } catch (error) {
            setErro(error.message);
            console.log(erro)
          }
        };
        consulta();
      }, []);

    //selecionar itens
    function handleSelectedItem(id) {
        const alreadySelected = selectedItems.includes(id);
        if (alreadySelected) {
          const filteredItems = selectedItems.filter(item => item !== id);
          setSelectedItems(filteredItems);
          console.log(selectedItems)
        } else {
          setSelectedItems([...selectedItems, id]);
          console.log(selectedItems)
        }
      }

    // Função para buscar as UFs do IBGE
    useEffect(() => {

        const fetchUfsFromIBGE = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                if (!response.ok) {
                    throw new Error('Erro ao buscar as UFs do IBGE');
                }
                const data = await response.json();
                // Extrair apenas a sigla das UFs
                const ufsList = data.map(uf => uf.sigla);
                setUfs(ufsList);
            } catch (error) {
                console.error(error);
            }
        };

        // Chamar a função para buscar as UFs ao montar o componente
        fetchUfsFromIBGE();
    }, []);

    // Função para buscar as cidades da UF selecionada
    useEffect(() => {

        const fetchCitiesFromIBGE = async () => {
            if (selectedUf) {
                try {
                    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`);
                    if (!response.ok) {
                        throw new Error('Erro ao buscar as cidades da UF selecionada');
                    }
                    const data = await response.json();
                    const citiesList = data.map(city => city.nome);
                    setCities(citiesList);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        // Chamar a função para buscar as cidades quando a UF selecionada mudar
        fetchCitiesFromIBGE();
    }, [selectedUf]);

    //função geo
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setInitialPosition([latitude, longitude]);
        })
    }, []);

    // Função para enviar para api
    const handlePointRegistration = async () => {


        try {
            const data = {
                name: formData.name,
                email: formData.email,
                whatsapp: formData.whatsapp,
                uf: selectedUf,
                city: selectedCity,
                latitude: selectedPosition[0],
                longitude: selectedPosition[1],
                endereco: formData.endereco,
                horarioFuncionamento: formData.horarioFuncionamento,
                instrucoesTriagem: formData.instrucoesTriagem,
                image: selectedFile,
                items: selectedItems,
            };

            const resposta = await fetch("http://localhost:8080/api/v1/pontos/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
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

    return (
        <div className="mx-auto max-w-screen-md sm:py-44 lg:py-46 md:py-46 text-colorMidGreen px-6 md:px-0">
            <div>
                <div className="border-borderColor-900/10 pb-12">
                    <h1 className="text-colorDarkGreen text-3xl md:text-5xl font-bold leading-7 mt-6">
                        Cadastro de Ponto de Coleta
                    </h1>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Nome */}
                        <div className="col-span-full">
                            <label
                                htmlFor="name"
                                className="block text-base font-medium leading-6"
                            >
                                Nome:
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
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

                        {/* celular */}
                        <div className="col-span-full">
                            <label
                                htmlFor="whatsapp"
                                className="block text-base font-medium leading-6"
                            >
                                Celular | telefone
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-borderColor sm:text-base sm:leading-6 pl-2"
                                />
                            </div>
                        </div>

                        {/* Imagem:*/}
                        <div className="col-span-full">
                            <label
                                htmlFor="image"
                                className="block text-base font-medium leading-6"
                            >
                                Imagem:
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        className="mx-auto h-12 w-12 text-gray-300"
                                        aria-hidden="true"
                                    />
                                    <div className="mt-4 flex text-base leading-6 text-gray-600">
                                        <label
                                            htmlFor="selectedFile"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-colorMidGreen focus-within:outline-none focus-within:ring-2 focus-within:ring-colorMidGreen focus-within:ring-offset-2 hover:text-colorMidGreen"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="selectedFile"
                                                name="selectedFile"
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
                                    center={initialPosition}
                                    zoom={13}
                                    style={{ height: '300px', width: '100%' }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={initialPosition}
                                        draggable={true}
                                        onDragEnd={(e) => {
                                            const latlng = e.target.getLatLng();
                                            setSelectedPosition([latlng.lat, latlng.lng]);
                                        }}
                                    />
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 border-t border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* Endereço */}
                            <div className="col-span-full">
                                <label
                                    htmlFor="endereco"
                                    className="block text-base font-medium leading-6"
                                >
                                    Estado:
                                </label>
                                <div className="mt-2">
                                    <select
                                        value={selectedUf}
                                        onChange={(e) => setSelectedUf(e.target.value)}
                                    >
                                        <option value="">Selecione uma UF</option>
                                        {ufs.map(uf => (
                                            <option key={uf} value={uf}>{uf}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-2">
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                    >
                                        <option value="">Selecione uma cidade</option>
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
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
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="mt-10 text-xl font-semibold leading-7">
                                Sobre o ponto
                            </h2>

                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {/* Materiais Aceitos: */}
                                <div className="col-span-full">
                                    <ul className="grid grid-cols-3 gap-4 items-grid">
                                        {items.map(item => (
                                            <li  
                                                key={item.id}
                                                onClick={() => handleSelectedItem(item.id)}
                                                className={`${
                                                    selectedItems.includes(item.id) ? "selected" : ""
                                                  } bg-colorGreen p-4 flex flex-col justify-between items-center cursor-pointer`}
                                            >
                                                <img src={`data:image/svg+xml;base64,${item.imagem}`} alt={item.title} />
                                                <span>{item.nome}</span>
                                            </li>
                                        ))}
                                    </ul>


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
                            </div>
                        </div>
                    </div>

                    {/* Botão */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6">
                            Cancelar
                        </button>
                        <button 
                        className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorBackgroundDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorBackgroundDark"                         
                        onClick={handlePointRegistration}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
