import { useForm } from "../../Hooks/useForm"
import { useUserStore } from "../Hooks/useUserStore";
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {

  const {
    handleChange,
    form,
    handlePlace,
    place
  } = useForm();


  const { errorMessage, loginStart } = useUserStore();

  const onSubmit = (ev) => {

    ev.preventDefault();
    loginStart(form, place);
  };



  return (

    <>
      <section className="bg-[#fafafa]">

        <div className="container mx-auto py-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Inicia sesión o regístrate para conseguir puntos</h3>

          <form
            onSubmit={onSubmit}
            noValidate
            className="w-full max-w-sm mx-auto p-8 rounded-md shadow-md">

            <div className="mb-5">
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handlePlace}
              />
              <label
                className="inline-block pl-[0.15rem] text-[#f67f00]  hover:cursor-pointer"
                htmlFor="flexSwitchCheckDefault"
              >{(place == 'place') ? 'Establecimientos' : 'Usuarios particulares'}</label>
            </div>

            <div className="mb-4">
              {
                (place === 'place') ?
                  <>
                    <label className="block text-gray-700 text-sm font-bold mb-2">{"Teléfono"}</label>
                    <input
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      type="text"
                      autoFocus
                      autoComplete="off"
                      id={"phone"}
                      name={"phone"}
                      placeholder={"xxx xxx xxx"} />
                  </>

                  :

                  <>
                    <label className="block text-gray-700 text-sm font-bold mb-2">{"Email"}</label>
                    <input
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                      type="email"
                      autoFocus
                      autoComplete="off"
                      id={"email"}
                      name={"email"}
                      placeholder={"juan@ejemplo.com"} />
                  </>
              }
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
              <input
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="********" />
              {
                errorMessage && <span className="text-red-600">{errorMessage}</span>
              }
            </div>

            <button
              className="w-full bg-[#f67f00] text-white text-base font-medium py-2 px-4 rounded-md hover:bg-[#C95C03] transition duration-300"
              type="submit">Inicia sesión</button>

          
              <h2 className="text-center mt-6 text-lg">
                O inicia sesión con
              </h2>
              <div className="mt-6 cursor-pointer">
                <img src="\assets\Apple.png" alt="Apple" />
              </div>
              <div className="mt-4 cursor-pointer">
                <img src="\assets\google.png" alt="Apple" />
              </div>
              <div className="mt-4 cursor-pointer">
                <img src="\assets\facebook.png" alt="Apple" />
              </div>

            <div className="text-sm mt-6 text-center ">
              <p>  ¿No tienes cuenta? </p>
              <NavLink to={"/register"} className="text-[#f67f00] hover:text-cyan-800 ">
              Regístrate aquí
              </NavLink>
            </div>

          </form>

        </div >

      </section >
    </>
  )
}
