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
    <div className="w-[400px] bg-blue-900 opacity-90 p-3 rounded-md">
      <ul className="flex flex-col items-center text-white">
        {prices.map(price => (
          <li key={price.price_id}>
            {price.item} <span>&pound; {price.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Prices
