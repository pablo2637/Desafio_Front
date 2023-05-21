import { NavLink } from 'react-router-dom';


export const Places = ({ places }) => {

    return (

        <table className=" w-90 mx-auto my-5 text-center">

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Contacto</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody className='text-[0.6rem]'>
                {
                    (places) &&
                    places.map(p =>
                        <tr key={p.place_id} className='border-b'>
                            <td className='text-left'><NavLink to={`/placeDetail/${p.place_id}`} >{p.name}</NavLink></td>
                            <td className='text-left px-5'><NavLink to={`/placeDetail/${p.place_id}`} >{p.contact_name}</NavLink></td>
                            <td className='text-left pr-5'><NavLink to={`/placeDetail/${p.place_id}`} >{p.phone}</NavLink></td>
                            <td className='grid grid-cols-2 gap-2'>
                                <button><i className="fa-solid fa-eye"></i></button>
                                <button><i className="fa-regular fa-trash-can"></i></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>


        </table>
    )
}
