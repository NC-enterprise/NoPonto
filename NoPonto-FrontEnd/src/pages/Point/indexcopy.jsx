import React from 'react';
import CardPoint from '../../components/CardPoint'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
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
const filters = [
  // {
  //   id: 'cidade',
  //   name: 'Cidade',
  //   options: [
  //     { value: 'diadema', label: 'Diadema', checked: false },
  //     { value: 'saoBernardo', label: 'São Bernardo do Campo', checked: false },
  //     { value: 'saoPaulo', label: 'São Paulo', checked: true },
  //     { value: 'ipiranga', label: 'Ipiranga', checked: false },
  //     { value: 'santoAndre', label: 'Santo André', checked: false },
  //   ],
  // },
  {
    id: 'Material',
    name: 'Material',
    options: [
      { value: '1', label: 'Baterias', checked: false },
      { value: '2', label: 'Eletronicos', checked: false },
      { value: '3', label: 'Oleo', checked: false },
      { value: '4', label: 'Lampadas', checked: false },
      { value: '5', label: 'Papeis-Papelao', checked: false },
    ],
  },


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
  const [initialPosition, setInitialPosition] = useState([-23.6936355, -46.641581]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const [pontos, setPontos] = React.useState([]);
  const [localPonto, setLocalPonto] = React.useState([]);
  const [erro, setErro] = React.useState(null);

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
        const resposta = await fetch("http://localhost:8080/api/v1/pontos");
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
  }, []);

  if (erro) {
    return <div>Erro ao acessar o endpoint da Api: {erro}</div>;
  }
  return (
    <div className="bg-white sm:py-12 lg:py-16 ">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filtrar</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-colorAccent"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Fechar menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                   

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

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
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-colorAccent hover:text-colorDarkGreen sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-colorAccent hover:text-colorDarkGreen">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-colorAccent focus:ring-colorDarkGreen "
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-colorAccent hover:text-colorDarkGreen "
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

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
