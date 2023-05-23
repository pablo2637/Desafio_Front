
import { useEffect, useState } from "react";
import { getReycles } from "../../Public/helpers/getReycles";
import { useDispatch, useSelector } from "react-redux";
import { onLoadRecycles } from "../../Store/Slices/userSlice";

export const HomePage = () => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [users, setUsers] = useState([]);

    const getUserRecycles = async () => {

        const response = await getReycles(user.place_id, user.role);

        console.log('response', response);
        if (response.ok) {

            dispatch(onLoadRecycles(response.recycles));
            setUsers(response.recycles);

        }

    };

    useEffect(() => {
        if (Object.entries(user).length > 0) getUserRecycles();
        // checkToken();

    }, [user])


    return (

        <section>

            <div className='absolute top-0 left-0 z-[-1] w-full'>
                <img className='w-full max-h-48 object-fill' src="../assets/rectangle.png" />
            </div>

            <h1 className="text-center text-3xl mt-5">{user.name}</h1>
            <p className="w-4/5 mx-auto text-center text-sm italic mt-1">{user.address}</p>

            <table className="my-12 mx-auto table-auto w-full border-collapse">
                <thead>
                    <tr className="font-bold text-center border-b-4 ">
                        <td>Fecha</td>
                        <td>Nombre</td>
                        <td>Litros</td>
                        <td>Puntos</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        (users) &&
                        users.map(u =>
                            <tr className="font-ligth text-center border-dotted border-b-2">
                                <td className="p-2" >{new Date(u.register_date).toLocaleDateString()}</td>
                                <td className="p-2 text-left">{u.name}</td>
                                <td className="p-2">{u.qty} l.</td>
                                <td className="p-2">{u.reward}</td>
                            </tr>
                        )
                    }


                </tbody>



            </table>




        </section>
    )
}
