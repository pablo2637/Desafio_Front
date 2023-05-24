import { masterFetch } from "../../Api/fetch";
import { useDispatch, useSelector } from "react-redux";
import { onError, onIsLoading, onLoad, onLoadRestaurants } from '../../Store/Slices/placesSlice';


export const useMap = () => {

    const dispatch = useDispatch();
    const { places, isLoading } = useSelector(state => state.places)

    const getMarkers = async () => {

        if (places.length > 0) return
        if (isLoading) return

        dispatch(onIsLoading());

        const response = await masterFetch('api/places', "GET");

        if (!response.ok)
            dispatch(onError(response.error));

        else {

            response.data.map(pl => {
                pl.coords = [pl.latitude, pl.longitude];
            });

            dispatch(onLoad(response.data));
        }
    };


    const getRestaurants = async () => {

        dispatch(onIsLoading());

        const response = await masterFetch('api/places/restaurants', "GET");

        if (!response.ok)
            dispatch(onError(response.error));

        else
            dispatch(onLoadRestaurants(response.data));

    };

    return {
        getMarkers,
        getRestaurants
    };
};
