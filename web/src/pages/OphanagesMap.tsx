import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/Ophanages-map.css';

import MapMarkerImg from '../images/Local.svg';
import mapIcon from '../utils/mapicon';
import api from '../services/api';

interface Orphanate {
    id: number;
    name: string;
    longitude: number;
    latitude: number;
}

function OphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanate[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Juiz de Fora</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-21.7621076,-43.34368]}
                zoom={ 15 }
                style={{
                    width: '100%', height: '100%'
                }}
            >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
               
               
               
                {orphanages.map(orphanage => {
                    return (
                    <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxwidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`/orphanage/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="fff" />
                                </Link>
                            </Popup>
                       </Marker>
                       )
                })}

          
            </Map>
            <Link to="/orphanage/create" className="create-ophanage">
                <FiPlus size={22} color="#fff"/>
            </Link>
        </div>
    );
}

export default OphanagesMap;