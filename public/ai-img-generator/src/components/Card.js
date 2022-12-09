import "./styles/cards.css"
const Card = ({ url, showImg = "hidden" }) => {
  return (
    <div className='card'>
      <img className={`${showImg}`} src={`${url}`} alt='img-generated' />
    </div>
  )
}
export default Card
