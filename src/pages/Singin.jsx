import { useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import { Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import {ReactSession} from 'react-client-session';

const BASE_URL = "http://localhost:3000";


function Singin() {

    const email = useRef("");
    const password = useRef("");
    const [sucess, setSuccess] = useState();
    ReactSession.setStoreType("localStorage");


    async function handleSubmit(e){

        // e.target.PreventDefault();
        
        console.log('Submitted !!!');
        console.log('email !!!:',email.current.value.toString());
        console.log('password !!!:',password.current.value.toString());
        

       try {
            const res = await axios.post(`${BASE_URL}/users/signin`,{
              email: email.current.value.toString(),
              password: password.current.value.toString()
            },{
              headers: {
              // Add any auth token here
              "Content-Type": "application/json",
              }
            })

            const {data} = await res;
            // (data != []) ? setSuccess(true) : setSuccess(false);
            setSuccess(true);
            ReactSession.set("username", "Bob");

            setTimeout(() => {

              window.location.href = "/user/"
              
            }, 1000);

            console.log('Fetch data : ',data);
            console.log('Fetch data : ',data);

        } catch (error) {
            setSuccess(false);
          console.log('ERROR : ', error);
        }
    }


function startSession(){
  ReactSession.setStoreType("localStorage");
  ReactSession.set("username", "Bob");
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
  <Form.Control ref={email} placeholder="Email" />
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="Password">
  <Form.Control ref={password} type="password" placeholder="Password" />
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