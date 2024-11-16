import { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import { Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Singin() {

    const email = useRef("");
    const password = useRef("");

    async function handleClick(){
        try {
            const res = await axios({
                // Endpoint to send files
                url:`${BASE_URL}/stations`,
                method: "POST",
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











  return (
    <div className="container p-5">

        <h1 className="mt-5 mb-5">
            CONNEXION
        </h1>

        <Link to="/">retour</Link>


    <Card className="bg-dark text-white d-flex justify-content-center row">
      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      {/* <Card.Text className="d-flex justify-content-center"> */}

<Form className="p-5">
<Form.Group as={Row} className="mb-5" controlId="Email">
  <Form.Control ref={email} placeholder="Email" />
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="Password">
  <Form.Control ref={password} type="password" placeholder="Password" />
</Form.Group>

<Form.Group className='d-flex justify-content-center'>
    <Col md="3">
    <Form.Control type="button" value={"Se connecter"}/>
    </Col>
</Form.Group>
</Form>
  
{/* </Card.Text> */}
    </Card>

    </div>

  );
}

export default Singin;