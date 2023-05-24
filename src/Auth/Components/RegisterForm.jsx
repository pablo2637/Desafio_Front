import { useState } from "react";
import { useForm } from "../../Hooks/useForm"
import { useUserStore } from "../Hooks/useUserStore";



export const RegisterForm = () => {

  const { handleChange, form } = useForm();

  const [terms, setTerms] = useState(false)

  const { errorMessage, registerStart, isLoading } = useUserStore();


  const onSubmit = (ev) => {

    ev.preventDefault();

    if (!ev.target.terms.checked) {

      setTerms(true);

      setTimeout(() => {
        setTerms(false);

      }, 4000);

      return;
    }

    registerStart(form);
  };



  return (

    <>
      <section className="bg-[#fafafa]">

        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Regístrate aquí</h1>

          <form
            onSubmit={onSubmit}
            noValidate
            className="w-full max-w-sm mx-auto p-8 rounded-md">

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                id="name"
                name="name"
                placeholder="Nombre" />
              {
                errorMessage?.name && <span className="text-red-600 text-sm">{errorMessage.name.msg}</span>
              }
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Apellidos</label>
              <input
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Apellidos" />
              {
                errorMessage?.last_name && <span className="text-red-600 text-sm">{errorMessage.last_name.msg}</span>
              }
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                placeholder="juan@ejemplo.com" />
              {
                errorMessage?.email && <span className="text-red-600 text-sm">{errorMessage.email.msg}</span>
              }
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                onChange={handleChange}
                autoComplete="off"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="********" />
              {
                errorMessage?.password && <span className="text-red-600 text-sm">{errorMessage.password.msg}</span>
              }
            </div>


            <div className=" mb-4 mt-16">
              {
                (terms) && <span className="text-red-600 text-sm">Debes aceptar las condiciones para continuar</span>
              }
              <div className=" flex items-start flex-row w-4/5 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mt-1 mr-2 w-6 h-6"
                />
                <label
                  className="text-xs font-bold ">
                  <span>Acepto la</span> <span className="text-amber-500">Política de Privacidad</span> <span>y las</span> <span className="text-amber-500">condiciones de uso.</span>
                </label>
              </div>
            </div>

            <button
              className="w-full bg-[#f67f00] text-white text-base font-medium py-2 px-4 rounded-[4px] hover:bg-[#C95C03] transition duration-300"
              type="submit">Registrarse
            </button>


            {
              (isLoading) &&
              <div className="grid mt-3 w-full">
                <span className="loader"></span>
              </div>
            }

          </form>



        </div>

      </section>
    </>
  )
}
