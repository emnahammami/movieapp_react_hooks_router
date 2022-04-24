import {React,useState} from 'react'

import { Modal,Button,Navbar,Form,FormControl} from "react-bootstrap";
import ReactStars from "react-star-rating-component";
import StarsRating from 'react-rating-stars-component';
export default function Filter({ChangeTitle,titlee ,ChangeRate,AddMovie}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);
  return (
    <Navbar bg="light" expand="lg">
   <Button variant="primary" onClick={handleShow}>
        add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <label htmlFor="">movie title</label>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="">movie description</label>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <label htmlFor="">movie url</label>
        <input
          type="text"
          onChange={(event) => setUrl(event.target.value)}
          value={url}
        />
        <label htmlFor="">movie rate</label>
        <input
          type="number"
          onChange={(event) => setRate(event.target.value)}
          value={rate}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary" type="submit"
            onClick={() => {const movie={title,posterUrl:url,description,rate,id:Math.random()};AddMovie(movie);console.log(movie)}}
          >Add movie</Button>
        </Modal.Footer>
      </Modal>
    
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
        
          onChange={ChangeTitle}
          value={titlee}
        />
      </Form>
      
      <StarsRating
    
     
        count={5}
        onChange={ChangeRate}
        size={30}
        activeColor="#ffd701"
        isHalf={false}
      />
   </Navbar>
    
  )
}
