import { useForm } from "../../Hooks/useForm";
import { usePlaceStore } from "../Hooks/usePlaceStore";


export const RegisterPlaceForm = () => {

    const {handleChange, form} = useForm()

    const {errorMessage, regisPlaceStart} = usePlaceStore();

    const onSubmit = (ev) => {

      ev.preventDefault();
      regisPlaceStart(form);
  };

  return (

    <>
        <section className="bg-gray-100">

          <div className="container mx-auto py-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Registrar nuevo afiliado</h1>

              <form 
              onSubmit={onSubmit}
              className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Nombre Establecimiento</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text" 
                  id="place_name"
                  name="place_name" 
                  placeholder="Nombre"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.place_name.msg}</span>
                  }
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text" 
                  id="address"
                  name="address" 
                  placeholder="Dirección"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.address.msg}</span>
                  }
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="phone" 
                  id="phone" 
                  name="phone" 
                  placeholder="xxx-xx-xx-xx"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.phone.msg}</span>
                  }
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="juan@ejemplo.com"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.email.msg}</span>
                  }
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Persona de contacto</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="contact_name" 
                  id="contact_name" 
                  name="contact_name" 
                  placeholder="Nombre de contacto"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.contact_name.msg}</span>
                  }
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Coordenadas</label>
                  <input 
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  type="text" 
                  id="coords" 
                  name="coords" 
                  placeholder="coordenadas del establecimiento"/>
                  {
                    errorMessage && <span className="text-red-600">{errorMessage.coords.msg}</span>
                  }
                </div>

                <button
                  className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  type="submit">Registro</button>
              </form>
              
            </div>

        </section>
    </>
  )
}


