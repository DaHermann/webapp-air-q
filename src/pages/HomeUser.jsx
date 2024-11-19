import Alert from 'react-bootstrap/Alert';
import { useSearchParams } from 'react-router-dom';
import {ReactSession} from "react-client-session";


/**
 * Composant page d'acceuil Utilisateur
 * @returns 
 */

function HomeUser(){

    const [searchParams, setSearchParams] = useSearchParams();

    const user_id  = searchParams.get('user_id');
    const session_user = ReactSession.get("User"); //obtenir l'user en session

    return ( 
        <>
            <div className="container">
                <h3 className='mb-5 text-start'>ESPACE UTILISATEUR : <span className="m-5">{session_user.username} </span></h3>
                <Alert className="text-center" key="success1" variant="success">
                        <h4> <span className="m-5 text-primary">API KEY:</span></h4> 
                       
                        <pre className='p-3'>
                            <code>
                                {session_user.api_key}
                            </code>
                        </pre>
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


                <p className='mt-4'>
                    le champ suivant figurer dans les headers pour authentifier le user 
                </p>
                <pre className='p-3 text-danger'>
                            <code> 
                                {
                                    '{ api_key : «clé API» }'
                                }
                            </code>
                        </pre>

            </div>
   
    
        </>
    )
}



export default  HomeUser;