import React,{useEffect, useContext, useState, memo} from "react";
import { AppContext } from "../../context/AppContext";
import axios from 'axios';
import { RiMapPin2Fill } from 'react-icons/ri'

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

import './style.css';

function Map() {
    const { infosIP, setInfosIP, infoMap, setInfoMap, geoInfos, setGeoInfos } = useContext(AppContext)

    const icon = <RiMapPin2Fill/>

    const customItem = new Icon({
        iconUrl: "https://img.icons8.com/glyph-neue/256/marker--v1.png",
        iconSize: [48, 48]
    })
  

    const markers = [{
        geoCode: [infosIP.lat, infosIP.lng],
        popUp: "Hello, I am pop up"
    }]

    function Map() {
       return (
        <MapContainer center={{ lat: infosIP.lat, lng: infosIP.lng}} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[infosIP.lat, infosIP.lng]} icon={customItem} />
         

      </MapContainer>
       )
    }



    useEffect(() => {
        console.log('renderizou la')
       Map.reload
    }, [infosIP])

    console.log(infosIP.lat)


    return (
        <div className="mapContainer">
            {/* <MapContainer center={{ lat: infosIP.lat, lng: infosIP.lng}} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer> */}
          <Map />
        </div>
    )
}


export const MapIP = Map



// 192.212.174.101


// var CartoDB_VoyagerNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
// 	subdomains: 'abcd',
// 	maxZoom: 20
// });