import { useEffect, useState } from "react";
import { getPlaces, getUsers } from '../helpers/getData';
import { Places, Users } from "../Components";


export const Home = () => {

    const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);


    const fetchData = async () => {

        const newUsers = await getUsers();
        if (newUsers)
            setUsers(newUsers);

        const newPlaces = await getPlaces();
        if (newPlaces)
            setPlaces(newPlaces);
    };


    useEffect(() => {
        fetchData();

    }, []);


    return (

        <section>
            <Users users={users} />

            <Places places={places} />
        </section>
    )
}
