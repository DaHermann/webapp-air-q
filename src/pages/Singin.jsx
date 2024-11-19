import { useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {ReactSession} from 'react-client-session';

const BASE_URL = "http://localhost:3000";

/**
 * Composant de la page de connexion
 * @returns 
 */
function Singin() {

    const isUserPresent = ReactSession.get('User');
            
    if (isUserPresent) {
      window.location = '/user/';
    }
    const formEmail = useRef("");
    const formPassword = useRef("");
    const [sucess, setSuccess] = useState();
    const profile = ReactSession.get('profile');
    console.log('session_user Profile: ', profile);


/**
 * Fontion de connection d'un utilisateur
 * @param {*} e 
 */
    async function handleSubmit(e){

       try {
            const res = await axios.post(`${BASE_URL}/users/signin`,{
              email: formEmail.current.value.toString(),
              password: formPassword.current.value.toString()
            },{
              headers: {
              "Content-Type": "application/json",
              }
            })

            const {data} = await res; //recuperation des données

            setSuccess(true);

            const {password, ...filteredData} = data; //filtrage de donnéés

            //Initiation de la session utilsateur
            ReactSession.set('User', filteredData);

             // Redirection apres 1 second
            setTimeout(() => {
              window.location.href = "/user/";
            }, 1000);

        } catch (error) {
            setSuccess(false);
          console.log('ERROR : ', error);
        }
    }


  return (
    <div className="container p-5">

      <h1 className="mt-5 mb-5">
          CONNEXION
      </h1>

      <Link to="/">retour</Link>

      <Card className="bg-dark text-white d-flex justify-content-center row">
        {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
        {/* <Card.Text className="d-flex justify-content-center"> */}

        { (sucess==true)? <Alert variant={"success"}> Connexion reussir !!! </Alert>
          :
          (sucess==false)?<Alert variant={"danger"}> Email / Mot de passe incorrect !!! </Alert>
          : ""
        }
        <Form className="p-5">
        <Form.Group as={Row} className="mb-5" controlId="Email">
          <Form.Control ref={formEmail} placeholder="Email" />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="Password">
          <Form.Control ref={formPassword} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className='d-flex justify-content-center'>
            <Col md="3">
            <Form.Control onClick={handleSubmit} type="button" value={"Se connecter"}/>
            </Col>
        </Form.Group>
        </Form>
    
      {/* </Card.Text> */}
      </Card>

    </div>

  );
}

export default Singin;