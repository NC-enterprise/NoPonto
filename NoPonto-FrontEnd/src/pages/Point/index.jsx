import React from 'react';
import CardPoint from '../../components/CardPoint'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon} from '@heroicons/react/20/solid'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import './leaflet.css'
import pontoImage from '../../assets/ponto.png';

const sortOptions = [
  { name: 'Mais popular', href: '#', current: true },
  { name: 'Avaliação', href: '#', current: false },
  { name: 'Mais recente', href: '#', current: false },
  { name: 'Distância', href: '#', current: false },
]
// const subCategories = [
//   { name: 'Plástico', href: '#' },
//   { name: 'Papel', href: '#' },
//   { name: 'Vidro', href: '#' },
//   { name: 'Metal', href: '#' },
//   { name: 'Orgânicos', href: '#' },
// ]




  // {
  //   id: 'campanha',
  //   name: 'Campanhas Especiais',
  //   options: [
  //     { value: 'agasalho', label: 'Agasalho', checked: false },
  //     { value: 'alimento', label: 'Alimentos não perecíveis', checked: false },
  //     { value: 'brinquedo', label: 'Brinquedos', checked: true },
  //     { value: 'eletronicos', label: 'Eletrônicos', checked: false },
  //     { value: 'livros', label: 'Livros', checked: false },
  //     { value: 'moveis', label: 'Móveis', checked: false },

  //   ],
  // },


  const options = [
    { value: '1', label: 'Baterias', checked: false },
    { value: '2', label: 'Eletronicos', checked: false },
    { value: '3', label: 'Oleo', checked: false },
    { value: '4', label: 'Lampadas', checked: false },
    { value: '5', label: 'Papeis-Papelao', checked: false },
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
  const [initialPosition, setInitialPosition] = useState([0,0]);


  const [pontos, setPontos] = React.useState([]);
  const [localPonto, setLocalPonto] = React.useState([]);
  const [erro, setErro] = React.useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const handleMaterialChange = (value) => {
    if (selectedMaterials.includes(value)) {
      setSelectedMaterials(selectedMaterials.filter((material) => material !== value));
    } else {
      setSelectedMaterials([...selectedMaterials, value]);
    }
  };

      //função geo
      React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;
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
          
          url += `?materiais=${selectedMaterials}`;
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

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <div>
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="checkbox"
                value={option.value}
                checked={selectedMaterials.includes(option.value)}
                onChange={() => handleMaterialChange(option.value)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
              {/* Product grid */}

              <div className="lg:col-span-3">
                <div className='pb-8'>

                  <MapContainer
                    center={initialPosition}
                    zoom={13}
                    style={{ height: '300px', width: '100%' }}
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
                </div>
                <div className='p-15 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>

                  {pontos.map((point, index) => (
                    <CardPoint key={index} point={point} />
                  ))}

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
