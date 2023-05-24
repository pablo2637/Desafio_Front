import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { CreateQR } from '../../Public/Components'
import { NavLink } from 'react-router-dom'


const navigation = [

  { name: 'Home', href: '/', current: false },
  { name: 'Mis Puntos', href: '/mispuntos', current: false },
  { name: 'Sobre Nosotros', href: '#', current: false },
  { name: 'Cerrar sesión', href: '/logout', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const NavBarUser = ({ qr, setQr, user, prevPoints }) => {

  // const { user } = useSelector(state => state.user);

  console.log('esto es user en nav bar', user)

  const handleQR = () => setQr(!qr);

  return (



    <Disclosure as="nav" className="bg-transparent position3">
      {({ open, close }) => (

      <>

          <div >
            <img src="../assets/Logo.png" alt="logo" className='Logo' />
            </div>
       

          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden w-full">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-950 hover:bg-[#f89a16] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                <div className="flex ml-auto">
                  <span className="mx-2 mr-2">Escanea aquí</span>
                  <button onClick={handleQR}>
                    <img
                      src="\assets\qr.png"
                      alt="scan-logo"
                      className="fill-current text-white h-6 m-auto w-6 hover:text-white"
                    />
                  </button>
                </div>

              </div>

              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">

                {/* <div>
                  <p>Hola, {user.name} {user.last_name}</p>
                </div> */}

                <div className="hidden sm:ml-6 sm:block">
                  
                  <div className="flex space-x-4">

                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-100 text-slate-950 hover:bg-[#f89a16]' : 'text-slate-950 hover:bg-[#f89a16] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}                    
                  </div>
                </div>
              </div>

              <div className="flex ml-auto">
                <span className="mx-2 mr-2">Escanea aquí</span>
                <button onClick={handleQR}>
                  <img
                    src="\assets\qr.png"
                    alt="scan-logo"
                    className="fill-current text-white h-6 m-auto w-6 hover:text-white hover:bg-[#f89a16]"
                  />
                </button>
              </div>

            </div>
          </div>

          {
            (qr) &&
            <CreateQR setQr={setQr} />
          }


          <Disclosure.Panel className="sm:hidden">
          {user && (
              <div className="ml-3 px-2 py-1 border-t border-gray-200">
                <p className="text-gray-700">
                  Hola {user.name}, 
                  tienes <span 
                          className='text-amber-600 font-bold'>{prevPoints}</span>
                          <span className='font-bold'>pts.</span>
                    
                </p>
              </div>
            )}
            <div className="space-y-1 px-2 pb-3 pt-2 z-[1200] absolute bg-[#fafafa] w-full">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={close}
                  className={classNames(
                    item.current ? 'bg-gray-600 text-slate-950' : 'text-slate-950 hover:bg-[#f89a16] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}

                  aria-current={item.current ? 'page' : undefined}

                >
                  {item.name}
                </NavLink>
              ))}
            </div>

          </Disclosure.Panel>

         
        </>
      )}
    </Disclosure>
  )
}