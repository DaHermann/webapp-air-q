import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';


/**
 * Composant resultat Pour afficher les diffrents resultats
 */
function Result(props){

    return(<>
        <tr>
            <th scope="row">{props.ind}</th>
            <td>{props.air.station_name}</td>
            <td>{props.air.day}</td>
            <td>{props.air.hour}</td>
            <td>
                <AirModal air={props.air} />
            </td>
            
        </tr>      
    </>)

}

/**
 * Composant modal pour afficher les données
 * @param {*} props 
 * @returns 
 */
function AirModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
         voir
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> 
            {props.air.station_name} -- {props.air.day } -- {props.air.hour}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>COMPOSANTS</th>
          <th>VALEUR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> CO </td>
          <td> {props.air.co} </td>
        </tr>

        <tr>
          <td> T ext </td>
          <td> {props.air.t_ext} </td>
        </tr>

        <tr>
          <td> T int</td>
          <td> {props.air.t_int} </td>
        </tr>

        <tr>
          <td> O2 </td>
          <td> {props.air.no2} </td>
        </tr>

        <tr>
          <td> O3 </td>
          <td> {props.air.o3} </td>
        </tr>

        <tr>
          <td> PM10 </td>
          <td> {props.air.pm10} </td> 
        </tr>

        <tr>
          <td> PM2.5 </td> 
          <td> {props.air.pm2_5} </td> 
        </tr>

        <tr>
          <td> RH </td> 
          <td> {props.air.rh} </td> 
        </tr>


      </tbody>
    </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default Result;