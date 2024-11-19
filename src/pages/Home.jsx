import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Result from '../components/Result';
import {ReactSession} from "react-client-session";



const BASE_URL = "http://localhost:3000";


function Home() {

    const session_user = ReactSession.get("username");
    
    ReactSession.set('profile', 'Dev');

    console.log('session_user : ', session_user);

    const [stations, setStations] = useState([])
    const [stationDataByDay, setStationDataByDay] = useState([])
    // const [inputStationValue, setInputStationValue] = useState()
    // const [inputDateValue, setInputDateValue] = useState()
    const inputStationValue = useRef('');
    const inputDateValue = useRef('');

    useEffect(function () {
        fetchStations();
    },[])

    async function fetchStations() {

        console.log('Fetch !!!!');
  
        try {
            const res = await axios({
                // Endpoint to send files
                url:`${BASE_URL}/stations`,
                method: "GET",
                headers: {
                    // Add any auth token here
                    "Content-Type": "application/json",
                },
            })
            const {data} = res
            setStations(data);
            console.log('Fetch data : ',data);

        } catch (error) {
          console.log('ERROR : ', error);
        }
    }


    return(

        <>
            <div className="container pt-5">

                <h1 className="text-start mb-5">ACCUEIL</h1>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-7 bg-success p-5">
                        <h1>Recherche</h1>

                        <div className="form" role="search">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="StationName">Nom de la Station</label>
                                <select ref={inputStationValue} className="form-control" name="stationName" id="StationName">
                                    <option defaultValue>Choisir...</option>
                                    {stations.map((station)=>{
                                        return <option key={station.id} value={station.station_name}>{station.station_name}</option>
                                    })}
                                </select>
                            </div>

                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="Airdate">DATE</label>
                                <input ref={inputDateValue} className="form-control" type="date" name="date" id="Airdate" />
                            </div>

                            <div className="input-group d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={Search}>Button</button>
                            </div>
                        </div>
                    </div>
{/* 

                    <div className="col-md-4 bg-secondary">
                        <h2>Données Actuelles</h2>
                        <div>
                            
                        </div>
                    </div> */}


                    <div className="container-fluid row mt-5 d-flex align-items-center">
                        <h2 className="mb-5 col-md-12">
                            Resultats des recherches
                        </h2>
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">SATION</th>
                                    <th scope="col">JOUR</th>
                                    <th scope="col">HEURE</th>
                                    <th scope="col">DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {
                                        stationDataByDay.map((air, index)=>{
                                            return <Result key={air.id} air={air} ind={++index} />
                                        })
                                    } 
                                </tbody>
                            </table>
                            
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        </>
    )

    async function Search(e){

        const stationName = inputStationValue.current.value.toString();
        const stationDate = inputDateValue.current.value.toString();

        try {
            if(setStations!=='' && stationDate!==''){
                console.log(" stationDate : ",stationDate);
                console.log(" stationName : ",stationName);

                const resData = await axios({
                    // Endpoint to send files
                    url:`${BASE_URL}/stations/air/get/${stationName}/${stationDate}`,
                    method: "GET",
                    headers: {
                        // Add any auth token here
                        "Content-Type": "application/json",
                    },
                })
                const {data} = resData;
                setStationDataByDay(data);
                console.log('Fetch data : ',stationDataByDay);
    
            }else{
                console.log(" Veillez Remplir correctement les champs !!!!");
            }

        } catch (error) {
            console.log('ERROR : ', error);
        }

        console.log('Fetch data stationDataByDay: ',await stationDataByDay); 
    }


}


export default Home;