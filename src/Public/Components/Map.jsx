import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, Tooltip } from 'leaflet'
import { useEffect, useState } from 'react';
import { UserMarker } from './';

export const Map = () => {

    const position = [52.51, 13.38]
    const disneyWorldLatLng = [28.3852, -81.5639];

    // const customIcon = new Icon({
    //     iconUrl: "/icons8-select-24.png",
    //     iconSize: [33, 33]
    // })


    useEffect(() => {
    

    }, []);



    return (

        <div className="map" id="map"  >
            <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        ???
                    </Popup>
                </Marker>

                <Marker position={disneyWorldLatLng} >
                    <Popup>
                        ???
                    </Popup>
                </Marker>

                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

                <UserMarker />

            </MapContainer>
        </div>
    );
};
