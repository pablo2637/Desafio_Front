import { NavLink } from 'react-router-dom';


export const Users = ({ users }) => {

    return (

        <table className=" w-90 mx-auto my-5 text-center">

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody className='text-[0.6rem]'>
                {
                    (users) &&
                    users.map(u =>
                        <tr key={u.user_id} className='border-b'>
                            <td className='text-left'><NavLink to={`/detail/${u.user_id}`} >{u.name}</NavLink></td>
                            <td className='text-left px-5'><NavLink to={`/detail/${u.user_id}`} >{u.last_name}</NavLink></td>
                            <td className='text-left pr-5'><NavLink to={`/detail/${u.user_id}`} >{u.email}</NavLink></td>
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
