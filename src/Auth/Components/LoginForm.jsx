import { useForm } from "../../Hooks/useForm"
import { useUserStore } from "../Hooks/useUserStore";

export const LoginForm = () => {

    const {handleChange, form} = useForm();

    const {errorMessage, loginStart} = useUserStore();
    
    const onSubmit = (ev) => {

      ev.preventDefault();
      loginStart(form);
  };

  return (

    <>
        <section className="bg-gray-100">

          <div className="container mx-auto py-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Inicia sesión</h1>

              <form 
              onSubmit={onSubmit}
              className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="juan@ejemplo.com"/>

                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="********"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage}</span>
                  }
                </div>

                <button
                  className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  type="submit">Log in</button>

                <div className="text-sm mt-2">
                    <a href="/register" className="text-cyan-500 hover:text-cyan-800">
                        ¿No tienes cuenta? Regístrate aquí
                    </a>
                </div>

              </form>
            </div>

        </section>
    </>
  )
}
