import React, { useState, useEffect, Fragment, useRef } from 'react';
import CardPoint from '../../components/CardPoint'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { TERipple } from 'tw-elements-react';
import '../../styles/leaflet.css'
import pontoImage from '../../assets/ponto.png';

const sortOptions = [
  { name: 'Mais popular', href: '#', current: true },
  { name: 'Avaliação', href: '#', current: false },
  { name: 'Mais recente', href: '#', current: false },
  { name: 'Distância', href: '#', current: false },
]

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
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Point() {
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const mapRef = useRef(null); 

  const [pontos, setPontos] = React.useState([]);
  const [localPonto, setLocalPonto] = React.useState([]);
  const [erro, setErro] = React.useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // pesquisa pelo nome
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


  // Função para realizar a pesquisa
  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetch(searchURL);
      if (!response.ok) {
        throw new Error('Erro na solicitação.');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Erro durante a pesquisa:', error);
    }
  };

  // pesquisa pelo material
  const [selectedMaterialIds, setSelectedMaterialIds] = useState([]);
  const [materials, setMaterials] = React.useState([]);
  const materialQuery = selectedMaterialIds.join(',');
  const searchURL = `http://localhost:8080/api/v1/pontos/pornome?name=${searchQuery}&materials=${materialQuery}`;

  const handleMaterialSelection = (materialId) => {
    if (selectedMaterialIds.includes(materialId)) {
      setSelectedMaterialIds(selectedMaterialIds.filter((id) => id !== materialId));
    } else {
      setSelectedMaterialIds([...selectedMaterialIds, materialId]);
    }
  };

  useEffect(() => {
    const consulta = async () => {
      try {
        let url = "http://localhost:8080/api/v1/pontos";
  
        if (selectedMaterialIds.length > 0) {
          url += `?materiais=${selectedMaterialIds.join(',')}`;
        }
  
        const resposta = await fetch(url);
  
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
  }, [selectedMaterialIds]);

  const pontosExibidos = isSearching ? searchResults : pontos;

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



  React.useEffect(() => {
    if (pontos && pontos.length > 0) {
      const extractedPoints = pontos.map(p => ({
        name: p.name,
        longitude: p.longitude,
        latitude: p.latitude,
      }));


      setLocalPonto(extractedPoints);
    }
  }, [pontos]);

  React.useEffect(() => {
    const consulta = async () => {
      try {
        let url = "http://localhost:8080/api/v1/pontos";

        if (selectedMaterials.length > 0) {

          url += `?pormateriais=${selectedMaterials}`;
        }

        const resposta = await fetch(url);

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
  }, [selectedMaterials]);

  if (erro) {
    return <div>Erro ao acessar o endpoint da Api: {erro}</div>;
  }
  return (
    <div className="bg-white sm:py-12 lg:py-16 ">
      <div>


        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-colorDarkGreen">Buscar Pontos</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-colorAccent hover:text-colorDarkGreen">
                    Ordenar
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-colorAccent group-hover:text-colorDarkGreen"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-colorAccent' : 'text-colorAccent',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


            </div>
          </div>
          {/* Pesquisa */}
          <div className="mt-10 mb-3 max-w-3xl mx-auto">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Pesquisar pelo nome"
                aria-label="Search"
                aria-describedby="button-addon1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {/* <!--Botão de pesquisa--> */}
              <TERipple color="light">
                <button
                  onClick={handleSearch}
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight bg-colorAccent text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </TERipple>

            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">


            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="lg:col-span-4">
                <div className='pb-8'>
                {initialPosition[0] !== 0 && initialPosition[1] !== 0 && (
                  <MapContainer
                  center={initialPosition}
                  zoom={14}
                  style={{ height: '350px', width: '100%' }}
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
                <div className='p-15 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
                  {materials.map((material) => (
                    <label key={material.id}>
                      <input
                        type="checkbox"
                        value={material.id}
                        checked={selectedMaterialIds.includes(material.id)}
                        onChange={() => handleMaterialSelection(material.id)}
                      />

                      {material.name}
                    </label>
                  ))}
                  {isSearching && searchResults.length === 0 ? (
                    <h1>Nenhum ponto encontrado.</h1>
                  ) : (
                    pontosExibidos.map((point, index) => (
                      <CardPoint key={point.id} point={point} />
                    ))
                  )}

                </div >
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Point;
