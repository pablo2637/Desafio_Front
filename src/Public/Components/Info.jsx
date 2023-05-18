import { useSelector } from 'react-redux';
import { calcDistance } from '../helpers/calcDistance';


export const Info = ({ place_name, address, coords: pCoords }) => {

    const { coords } = useSelector((state) => state.user);

    return (

        <article className="divInfoPlace">
            <h3>{place_name}</h3>
            <p>Dirección: {address}</p>
            <p>Distancia: {calcDistance(coords.lat, coords.long, pCoords[0], pCoords[1]) + ' kms.'}</p>

        </article>
    )

}
