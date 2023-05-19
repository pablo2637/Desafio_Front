import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, Tooltip } from 'leaflet';
import { useEffect, useState } from 'react';
import { Info, UserMarker } from './';
import { useSelector } from 'react-redux';
import { useMap } from '../Hooks/useMap';

export const Map = () => {

    const {
        getMarkers
    } = useMap();

    const position = [40.421681695200895, -3.6926713030745186]

    const { places, isLoading } = useSelector((state) => state.places);


    const placeIcon = new Icon({
        iconUrl: "../assets/iconPlace.png",
        iconSize: [30, 30]
    });

    const theBridgeIcon = new Icon({
        iconUrl: "../assets/theBridge.jpeg",
        iconSize: [25, 25]
    });


    useEffect(() => {
        getMarkers();

    }, []);



    return (

        <section className='secMap'>

            <div className="map" id="map" >

                <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        (places) &&
                        places.map(place =>
                            <Marker key={place.place_id} position={place.coords} icon={placeIcon}>
                                <Popup className='popup' >
                                    <Info {...place} />
                                </Popup>
                            </Marker>

                        )
                    }

                    <Marker position={position} icon={theBridgeIcon}>
                        <Popup>

                            <span>The Bridge</span>
                        </Popup>
                    </Marker>

                    <UserMarker />

                    {
                        (isLoading) &&
                        <div className="mapSpinner animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-pink-600 rounded-full" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }


                    <div className='divMapSearch'>
                        <form >
                            <input
                                type="text"
                                placeholder='Busca un lugar para reciclar...'
                            />

                        </form>
                    </div>


                </MapContainer>


            </div>

        </section>
    );
};
