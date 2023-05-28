import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { AiOutlineRight } from 'react-icons/ai'
import ConsultIP from "../ConsultIP";
import { MapIP } from "../MapIP/index";

import './style.css';
import '../../style/index.css';


export default function MainContainer() {
    const { infosIP, setInfosIP, inputValue, setInputValue } = useContext(AppContext)
    const [inpVal, setInpVal] = useState()

    function hundleSubmit(e) {
        e.preventDefault()

        if(/[0-9-.]/.test(inpVal)) {
            setInputValue(inpVal)
        } else {
            console.error('Isso nao e um IP')
        }

    }

    return (
         <div className="ContainerAlt">
            <h1>IP Address Tracker</h1>

            <form>
                <input 
                    type="text" 
                    placeholder="Search for any IP address or domain"
                    onChange={(e) => setInpVal(e.target.value)}
                    required
                />

                <button onClick={hundleSubmit}><AiOutlineRight /></button>
            </form>

            {
               infosIP &&  <ConsultIP />
            }

        </div>
    )
}
