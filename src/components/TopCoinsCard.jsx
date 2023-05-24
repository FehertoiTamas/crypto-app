import '../styles/TopCoinsCard.css'

export default function TopCoinsCard( {coin} ) {
  return (
    <div className='card'>
      <h3>{coin.item.name}</h3>
      <img src={coin.item.small} alt="coin" />
    </div>
  )
}