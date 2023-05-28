import React,{ useEffect, memo, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

import './style.css';
import '../../style/index.css'

function ConsultIP() {
    const { infosIP, setInfosIP, inputValue, setInputValue, geoInfos, setGeoInfos } = useContext(AppContext)
    const [location, setLocation] = useState({})

    // console.log(inputValue)
    // https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_YXR69pxgV2Y4cRoNJJhpmlW9QoBdr&ipAddress=8.8.8.8
    useEffect(() => {
      axios.get(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_YXR69pxgV2Y4cRoNJJhpmlW9QoBdr&ipAddress=${inputValue}`)
          .then((response) => {
              setInfosIP({
                ip: response.data.ip,
                isp: response.data.isp,
                country: response.data.location.city,
                region: response.data.location.region,
                timeZone: response.data.location.timezone,
                lat: response.data.location.lat,
                lng: response.data.location.lng,
              })
                setGeoInfos({
                  lat: response.data.location.lat,
                  lng: response.data.location.lng,
                })

              // console.log(response)
          })
    }, [inputValue])

    // console.log(infosIP.location)

  

    // infosIP.location.forEach(element => {
    //     console.log(element)
    // });

    return (
        <div className="consultContainer">
          <ul className="ulConsult">
            <li>
             <span>IP ADDRESS</span>
              <span>{infosIP.ip}</span>
            </li>
            <li>
              <span>LOCATION</span>
              <span>{infosIP.country}, {infosIP.region}</span>
            </li>
            <li>
              <span>TIMEZONE</span>
              <span>{infosIP.timeZone}</span>
            </li>
            <li>
            <span>ISP</span>
              <span>{infosIP.isp}</span>
            </li>
          </ul>
        </div>
    )
}


export default memo(ConsultIP)
