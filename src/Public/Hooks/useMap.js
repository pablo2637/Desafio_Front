import { useState } from "react"
import { masterFetch } from "../../Api/fetch";
import { useDispatch } from "react-redux";
import { onError, onIsLoading, onLoad } from '../../Store/Slices/placesSlice';


export const useMap = () => {

    // const [markers, setMarkers] = useState([]);

    const dispatch = useDispatch();

    const getMarkers = async () => {

        dispatch(onIsLoading());

        const response = await masterFetch('api/places', "GET");

        if (!response.ok)
            dispatch(onError(response.error));

        else {

            response.data.map(pl => {
                const arrayCoords = pl.coords.split(',');
                arrayCoords[0] = parseFloat(arrayCoords[0]);
                arrayCoords[1] = parseFloat(arrayCoords[1]);
                pl.coords = [arrayCoords[0], arrayCoords[1]];
            });

            dispatch(onLoad(response.data));
        }

    }

    return {
        getMarkers,
        // markers
    }
}
