
import {ReactSession} from 'react-client-session';
import { useRef, useState } from 'react';
import {Col, Form, Row, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
const BASE_URL = "http://localhost:3000";


/**
 * Composant de la page d'inscription
 * @returns 
 */
function  Singup(){
    const isUserPresent = ReactSession.get('User');
            
    if (isUserPresent) {
      window.location = '/user/';
    }
    const formUsername = useRef("");
    const formEmail = useRef("");
    const formPassword = useRef("");
    const [sucess, setSuccess] = useState();
    const [message, setMessage] = useState('');

/**
 * Function  de creation de compte utilisateurr
 * @param {*} e 
 */

    async function handleSubmit(e){

        if(formEmail=='' || formUsername==''  || formPassword=='' ){
            setSuccess(false);
            setMessage('* Tous les champs sont requis');
        }else{
            try {
                const res = await axios.post(`${BASE_URL}/users/signup`,{
                  username: formUsername.current.value.toString(),
                  email: formEmail.current.value.toString(),
                  password: formPassword.current.value.toString()
                },{
                  headers: {
                  "Content-Type": "application/json",
                  }
                })
    
                const {data} = await res;
                setSuccess(true);
                setMessage('* Enregistement reussir !!!');
                
                // Redirection apres 1 second
                setTimeout(() => {
                  window.location.href = "/auth/singin";
                }, 1000);
    
            } catch (error) {
                setSuccess(false);
                setMessage('* Quelquechose s\'est mal produit Veillez rééssayer !!!');
              console.log('ERROR : ', error);
            }
        }
    }


  return (
    <div className="container p-5">

      <h1 className="mt-5 mb-5">
          ENREGISTREMENT 
      </h1>

      <Link to="/">retour</Link>

      <Card className="bg-dark text-white d-flex justify-content-center row">

        { (sucess==true)? <Alert variant={"success"}>  {message} </Alert>
          :
            (sucess==false)?<Alert variant={"danger"}> {message} </Alert>
          : ""
        }
        <Form className="p-5">

        <Form.Group as={Row} className="mb-5" controlId="Username">
          <Form.Control ref={formUsername} placeholder="Username"/>
        </Form.Group>

        <Form.Group as={Row} className="mb-5" controlId="Email">
          <Form.Control ref={formEmail} placeholder="Email" />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="Password">
          <Form.Control ref={formPassword} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className='d-flex justify-content-center'>
            <Col md="3">
            <Form.Control onClick={handleSubmit} type="button" value={"S'enregister"}/>
            </Col>
        </Form.Group>
        </Form>
    
      {/* </Card.Text> */}
      </Card>

    </div>

  );
}


export default Singup;