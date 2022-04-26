import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
export default function Infos({movies}) {
    const params = useParams();
let identifiant=Number(params.id)
console.log(identifiant)
const movie = movies.find((el)=>el.id ==identifiant)
console.log(movie);
  
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          {movie.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><div width='50%'>
          <Card.Title>Trailer</Card.Title>   
    <iframe
     title="trailer" 
      width='250'
      height="100"
       src={movie.trailer}
       allowFullScreen
       />
</div></ListGroupItem>
         
        </ListGroup>
        <Card.Body>
         
        <Link to="/">Home</Link> 
        </Card.Body>





     









      </Card>
      
    );
}
