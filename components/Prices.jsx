async function getPrices() {
  const res = await fetch('https://oskarsbarbers4men.co.uk/indexAPI.php')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const Prices = async () => {
  const prices = await getPrices()

  return (
    <ul className="flex flex-col items-center">
      {prices.map(price => (
        <li key={price.price_id}>
          {price.item} <span>&pound; {price.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default Prices
