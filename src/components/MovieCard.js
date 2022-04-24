
import { Button,Card } from "react-bootstrap";
import ReactStars from "react-star-rating-component";
const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" 
          src={movie.posterUrl}
          alt={movie.title}  style={{ height: "10rem" }}/>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
              
          <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              value={movie.rate}
              size={24}
              activeColor="#ffd700"
            />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
    );
  };
  
  export default MovieCard;