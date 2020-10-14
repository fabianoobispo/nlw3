import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/Ophanages-map.css';

import MapMarkerImg from '../images/Local.svg';

function OphanagesMap(){
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
            
            </Map>
            <Link to="" className="create-ophanage">
                <FiPlus size={22} color="#fff"/>
            </Link>
        </div>
    );
}

export default OphanagesMap;