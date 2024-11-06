import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p className='precio'>${price}</p>
          <p className='ingredientes'>🍕Ingredientes: {ingredients}</p>
        </Card.Text>
        <div className='botones d-flex justify-content-between'>
          <Button variant='light'>Ver más 👀</Button>
          <Button variant='dark'>Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
