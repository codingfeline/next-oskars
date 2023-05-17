'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Prices = () => {
  const [prices, setPrices] = useState([])
  useEffect(() => {
    async function getPrices() {
      axios.get('https://oskarsbarbers4men.co.uk/indexAPI.php').then(res => {
        setPrices(res.data)
      })
    }
    getPrices()
  }, [])

  return (
    <ul className="flex flex-col items-center">
      {prices.map(price => (
        <li>
          {price.item} <span>&pound; {price.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default Prices
