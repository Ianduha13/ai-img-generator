import "./styles/cards.css"
const Card = ({ url }) => {
  return (
    <div className='card'>
      <img src={`${url}`} alt='img-generated' />
    </div>
  )
}
export default Card
