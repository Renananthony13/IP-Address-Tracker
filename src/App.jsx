import { useState } from 'react'
import './style/App.css'
import MainContainer from './components/SearchIP/index.jsx'
import { MapIP } from './components/MapIP/index'
import { AppContext } from "./context/AppContext";


function App() {
  const [infosIP, setInfosIP] = useState({
    lat: 37.38605,
    lng: -122.08385,
  })
  const [infoMap, setInfoMap] = useState()
  const [inputValue, setInputValue] = useState('8.8.8.8')
  const [geoInfos, setGeoInfos] = useState({
    lat: 37.38605,
    lng: -122.08385,
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ infosIP, setInfosIP, infoMap, setInfoMap, inputValue, setInputValue, geoInfos, setGeoInfos }}>

        <header className='imageTop'></header>
        <MainContainer />
        <MapIP />

       </AppContext.Provider>
    </div>
  )
}

export default App

