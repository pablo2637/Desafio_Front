import { MapContainer, TileLayer, Marker, Popup, useMapEvents, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, Tooltip } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { Info, UserMarker } from './';
import { useSelector } from 'react-redux';
import { useMap } from '../Hooks/useMap';
import { calcNearest } from '../helpers/calcDistance';

export const Map = () => {

    const {
        getMarkers
    } = useMap();


    const theBridgePosition = [40.421681695200895, -3.6926713030745186];

    const [position, setPosition] = useState(theBridgePosition);
    const [findMe, setFindMe] = useState(false);
    const [nearestPlace, setNearestPlace] = useState(undefined);

    const { places, isLoading } = useSelector((state) => state.places);
    const { coords, isLocating } = useSelector((state) => state.user);

    const mapRef = useRef();



    const placeIcon = new Icon({
        iconUrl: "../assets/iconPlace.png",
        iconSize: [30, 30]
    });

    const nearestPlaceIcon = new Icon({
        iconUrl: "../assets/recycle.png",
        iconSize: [35, 35]
    });

    const theBridgeIcon = new Icon({
        iconUrl: "../assets/theBridge.jpeg",
        iconSize: [25, 25]
    });


    const handleOnFindNearest = () => {

        const current = mapRef.current || {};

        const nearest = {
            distance: 10000,
            latlng: [],
            ind: ''
        };

        places.map((pl, ind) => {
            const dist = calcNearest(coords.lat, coords.long, pl.coords[0], pl.coords[1]);

            if (dist <= nearest.distance) {

                nearest.distance = dist;
                nearest.latlng = [pl.coords[0], pl.coords[1]];
                nearest.ind = pl.place_id;
            }
        });

        setNearestPlace(nearest.ind)
        current.flyTo(nearest.latlng, current.getZoom());
    };


    const handleOnFindMe = () => setFindMe(!findMe);


    useEffect(() => {
        getMarkers();

    }, []);


    return (

        <section className='secMap'>

            <div className="map" id="map" >

                <MapContainer ref={mapRef} center={position} zoom={16} scrollWheelZoom={true} zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        (places) &&
                        places.map(place =>
                            <Marker key={place.place_id} position={place.coords} icon={(place.place_id === nearestPlace) ? nearestPlaceIcon : placeIcon}>
                                <Popup className='popup' >
                                    <Info {...place} isNearest={(place.place_id === nearestPlace) && true} />
                                </Popup>
                            </Marker>
                        )
                    }

                    <Marker position={theBridgePosition} icon={theBridgeIcon}>
                        <Popup>
                            <span>The Bridge</span>
                        </Popup>
                    </Marker>

                    <UserMarker findMe={findMe} />

                    {
                        (isLoading) &&
                        <div className='isLocating'>
                            <span className='loader'></span>
                            <span className='me'>Obteniendo sitios de reciclaje...</span>
                        </div>
                    }

                    {
                        (isLocating) &&
                        <div className='isLocating'>
                            <span className='loaderMe'></span>
                            <span className='me'>Obteniendo tu ubicación...</span>
                        </div>
                    }

                    <div className='z-[1001]  divMapSearch relative'>
                        <form >
                            <input
                                type="text"
                                placeholder='Busca por ubicación'>
                            </input>
                            <img className='glass' src="../assets/glass.png" />
                        </form>
                    </div>


                    <div className='z-[1001] divBtnsMap relative'>

                        <div className='my-1'>
                            {
                                (coords.lat) &&
                                <button onClick={handleOnFindNearest} className='flex items-center py-1'>
                                    <img title=' Lugar más cercano... ' className='w-8 h-7 nearest object-contain' src="../assets/recycle.png" />
                                </button>
                            }

                            <button onClick={handleOnFindMe} className='flex items-center py-1'>
                                <img title=' ¿Dónde estoy? ' className='w-8 h-7 nearest object-contain' src="../assets/person.png" />
                            </button>
                        </div>
                    </div>

                    <ZoomControl position="bottomright" />

                </MapContainer>

            </div>

        </section>
    );
};
