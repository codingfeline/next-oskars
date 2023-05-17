'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

const OpeningHours = () => {
  const [hours, setHours] = useState([])

  useEffect(() => {
    async function getHours() {
      axios
        .get('https://oskarsbarbers4men.co.uk/indexAPI_hours.php')
        .then(res => {
          setHours(res.data)
        })
    }

    getHours()
  }, [])

  return (
    <>
      <div
        className="flex flex-col items-center m-5"
        id="opening-hours"
        itemScope
        itemType="http://schema.org/openingHours"
      >
        {hours.map(hour => (
          <time
            className="flex"
            itemProp="openingHours"
            dateTime={
              hour.day_code +
              ' ' +
              hour.start.slice(0, 2) +
              ':' +
              hour.start.slice(2) +
              '-' +
              hour.end.slice(0, 2) +
              ':' +
              hour.end.slice(2)
            }
            key="hour.hour_id"
          >
            {hour.day} {hour.start} to {hour.end}
          </time>
        ))}
      </div>
    </>
  )
}

export default OpeningHours
