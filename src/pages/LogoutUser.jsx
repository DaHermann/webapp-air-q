import  {ReactSession} from 'react-client-session';



function LogoutUser(){

    ReactSession.set('User','');

    window.location = '/';
    return <> </>

}



export default LogoutUser;