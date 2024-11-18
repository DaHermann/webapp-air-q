import Alert from 'react-bootstrap/Alert';
import { useSearchParams } from 'react-router-dom';
import {ReactSession} from "react-client-session";




function HomeUser(){


    // const user_id = location.pathname;
    // const user_id = Request.;
    const [searchParams, setSearchParams] = useSearchParams();

    const user_id  = searchParams.get('user_id');

    const session_user = ReactSession.get("username");

    console.log('session_user : ', session_user);


    console.log(searchParams);






    return ( 
        <>
            <div className="container">
                <h3 className='mb-5 text-start'>Home API</h3>
                <Alert className="text-center" key="success1" variant="success">
                        <h4> <span className="m-5 text-primary">API KEY:</span> /api/v1/air/get/« station_name »</h4> 
                    </Alert>

                <div className="row d-flex justify-content-center bg-secondary p-5">
                    <h3 className='mb-5 text-white'>Obtenir les données toutes les données d'une stationn avec son nom</h3>
                    
                    <Alert className="col-md-9" key="light" variant="light">
                        <h4> <span className="m-5 text-primary">GET:</span> /api/v1/air/get/« station_name »</h4> 
                    </Alert>

                    <h3 className='mb-5 mt-5 text-white'>Obtenir les données  d'une station par jour</h3>

                    <Alert className="col-md-9" key="light1" variant="light">
                        <h4> <span className="m-5 text-primary">GET:</span> /api/v1/air/get/« station_name »/« day » </h4> 
                    </Alert>
                </div>


            </div>
   
    
        </>
    )
}



export default  HomeUser;