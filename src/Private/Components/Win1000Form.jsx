import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { masterFetch } from "../../Api/fetch";
import { onLoadPoints } from "../../Store/Slices/userSlice";
import { ThanksForVoting } from "./ThanksForVoting";
import { onRecommended } from "../../Store/Slices/placesSlice";


export const Win1000Form = () => {

    const { places } = useSelector(state => state.places);
    const { user } = useSelector(state => state.user);

    const [screenOne, setScreenOne] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [filterRest, setFilterRest] = useState([]);


    const getID = (place_id) => {

        const id = places.find(pl => pl.place_id == place_id)?.id;

        return id;
    }


    const handleFilter = ({ target }) => {

        if (target.value == '')
            setFilterRest(places);

        else {

            const newFilter = places.filter(rest => rest.name.toLowerCase().includes(target.value.toLowerCase()))

            setFilterRest(newFilter);
        }
    }


    const onSubmit = async (ev) => {

        ev.preventDefault();

        setIsLoading(true);

        const recycleData = {
            user_id: user.user_id,
            place_id: ev.target.restaurant.value,
            qty: 0,
            reward: 1000,
            rest_id: getID(ev.target.restaurant.value)
        };

        const response = await masterFetch('api/recycle', 'POST', recycleData);

        if (response.ok) {

            dispatch(onLoadPoints(true));

            setScreenOne(true);

            if (response.recommended != '' && response.recommended) {
                const tmp = response.recommended
                    .replaceAll("'", '').replaceAll('"', '')
                    .replaceAll('[', '').replaceAll(']', '')
                    .trim().split(',');

                const array = [...tmp];

                dispatch(onRecommended(array));
            }
        }

        setIsLoading(false);

    };


    const handleClose = () => {
        navigate(-1);

    }


    return (

        <section className="w-full mt-10">



            <form
                onSubmit={onSubmit}>

                <div className="text-right mr-8 mb-8">
                    <button onClick={handleClose} className="">
                        <img
                            src="\assets\close.png"
                            alt="botón salir"
                            className=" cursor-pointer" />
                    </button>
                </div>

                <div className="flex items-center justify-center mt-3 ">
                    <div className="w-10/12 ">
                        <div className="text-[22px] leading-6 font-bold">
                            <p>
                                Gana <span className="orangeColor">1000 puntos</span> respondiéndonos esta simple pregunta.
                            </p>
                        </div>

                        <p
                            className="text-sm font-bold text-slate-900 mt-8 mb-1">
                            ¿Cuál es tu <span className="orangeColor">restaurante favorito</span>?
                        </p>

                        <div className="">
                            <input
                                onChange={handleFilter}
                                type="text"
                                placeholder="Escribe el restaurante aquí"
                                className="block w-full m-auto rounded-lg border bg-white px-5 py-2.5 text-black focus:border-amber-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:text-slate-900 dark:focus:border-amber-300" />

                            <select
                                className="block mt-2 mb-8 w-[100%] text-sm placeholder-gray-600/70 dark:placeholder-gray-600 rounded-lg border bg-gray-200 px-2 py-2.5 text-black focus:border-amber-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:text-gray-600 dark:focus:border-amber-300"
                                name="restaurant"
                                id="restaurant">
                                Selecciona un comercio
                                {
                                    (filterRest) ?

                                        filterRest.map(rest =>
                                            <option className=""
                                                key={`rest${rest.place_id}`}
                                                value={rest.place_id}>{`${rest.name}: ${rest.address}`}
                                            </option>
                                        )

                                        :
                                        <option defaultValue="">No hay coincidencias...</option>
                                }
                            </select>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="group flex items-center justify-center rounded-md h-12 w-10/12 bg-[#F67F00] font-bold text-lg text-white relative overflow-hidden">

                        <p
                            className=" text-slate-100 text-center whiteColor">
                            Enviar
                        </p>
                        <div>
                            <img
                                className="mx-2"
                                src="\assets\share_white.png"
                                alt="gana1000" />
                        </div>
                    </button>
                </div>

                {
                    (isLoading) &&
                    <div className="grid mt-3 w-full">
                        <span className="loader"></span>
                    </div>
                }

            </form>

            {
                (screenOne) &&
                <ThanksForVoting />
            }


        </section>
    )
}
