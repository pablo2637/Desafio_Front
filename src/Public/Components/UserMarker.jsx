import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useDispatch } from 'react-redux';
import { onLoadCoords, onLocating } from '../../Store/Slices/userSlice'


export const UserMarker = ({ findMe }) => {

    const [position, setPosition] = useState(null);
    const dispatch = useDispatch();


    const customIcon = new Icon({
        iconUrl: "../assets/person.png",
        iconSize: [45, 45]
    });


    const map = useMapEvents({

        locationfound(e) {

            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());

            dispatch(onLoadCoords({ lat: e.latitude, long: e.longitude }));
        },
    });


    useEffect(() => {
        dispatch(onLocating());
        map.locate();

    }, [findMe]);

    return position === null ? null : (

        <Marker position={position} icon={customIcon}>
            <Popup><span>Estas aquí</span></Popup>
        </Marker>
    );
};
