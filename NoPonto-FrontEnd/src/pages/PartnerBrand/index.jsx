import React, { useState, useEffect, Fragment, useRef } from 'react';
import { PhotoIcon } from "@heroicons/react/24/solid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { TERipple } from 'tw-elements-react';
import '../../styles/leaflet.css'
import pontoImage from '../../assets/ponto.png';


export default function PartnerBrand() {
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        website: '',
        imagens: [],
        descricao: '',
        // autorizacao: '',
        // documentoLegal: '',
        telefone: '',

        facebook: '',
        instagram: '',
        twitter: '',
        linkedin: '',

        endereco: '',
        estado: '',
        cidade: '',
    });
    const [mensage, setMensagem] = useState(String);

    const [dataFromChild, setDataFromChild] = useState(null);





    console.log(dataFromChild);


    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };


    const handleBrandRegistration = async () => {
        const marca = formData;
        try {
            const resposta = await fetch("http://localhost:8080/api/v1/marcas/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(marca),
            });
            console.log(resposta.status);
            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar a marca.");
            }
            setMensagem("Marca cadastrada com sucesso!");
        } catch (error) {
            setMensagem(
                `${error} Erro ao cadastrar a marca. Verifique os dados informados`
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

    const customIcon = new Icon({
        iconUrl: pontoImage,
        iconSize: [38, 38]
    });
    // custom cluster icon
    const createClusterCustomIcon = function (cluster) {
        return new divIcon({
            html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: point(33, 33, true)
        });
    };

    const [initialPosition, setInitialPosition] = useState([0, 0]);
    const [localPonto, setLocalPonto] = React.useState([]);
    const mapRef = useRef(null);

    //função geo
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setInitialPosition([latitude, longitude]);
            },
            (error) => {
                console.error(error);
                setInitialPosition([0, 0]);
            }
        );
    }, []);

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

    // upload de imagem
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setSelectedFile(base64String);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mx-auto max-w-screen-md sm:py-44 lg:py-46 md:py-46 text-colorMidGreen px-6 md:px-0">
            <form onSubmit={handleBrandRegistration} className=" space-y-12">
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
                                                    onChange={handleImageUpload}
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
                                    {initialPosition[0] !== 0 && initialPosition[1] !== 0 && (
                                        <MapContainer
                                            center={initialPosition}
                                            zoom={14}
                                            style={{ height: '330px', width: '100%' }}
                                            whenCreated={mapInstance => (mapRef.current = mapInstance)}
                                            onLocationfound={e => {
                                                const { lat, lng } = e.latlng;
                                                setInitialPosition([lat, lng]);
                                            }}
                                        >
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <MarkerClusterGroup
                                                chunkedLoading
                                                iconCreateFunction={createClusterCustomIcon}
                                            >
                                                {localPonto.map((local) => (
                                                    <Marker key={local.name} position={[local.latitude, local.longitude]} icon={customIcon}>
                                                        <Popup>{local.name}</Popup>
                                                    </Marker>
                                                ))}
                                            </MarkerClusterGroup>
                                        </MapContainer>
                                    )}
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
                            <h2 className="mt-5 text-xl font-semibold leading-7">
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
                                {/* <div className="col-span-full">
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
                                </div> */}
                                {/* Documento Legal */}
                                {/* <div className="col-span-full">
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
                                </div> */}

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
                                        name="facebook"
                                        value={formData.facebook}
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
                                        name="instagram"
                                        value={formData.instagram}
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
                                        name="twitter"
                                        value={formData.twitter}
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
                                        name="linkedin"
                                        value={formData.linkedin}
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
                            >
                                Cancelar
                            </button>
                            <button className="rounded-md bg-colorMidGreen px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-colorBackgroundDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-colorBackgroundDark"
                            onClick={handleBrandRegistration}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
