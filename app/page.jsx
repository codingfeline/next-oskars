'use client'
import OpeningHours from '@components/Hours'
import Prices from '@components/Prices'
// import { Down1, Up1 } from '@components/icons'
// import Navbar from '@components/layout/Navbar'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(true)
  const Navbar = () => {}
  const Down1 = () => {}
  const Up1 = () => {}

  return (
    <div className=" h-screen overflow-y-scroll snap-y snap-mandatory ">
      <main className="flex_center h-screen bg-purple-100 snap-start flex-col bg_barber">
        <div className="flex flex-col    opacity-90  bg-slate-300 w-full sm:w-4/5 sm:rounded-xl p-8 ">
          <a name="home"></a>
          <h2 className="animate__animated animate__bounce">
            Great friendly family barber shop
          </h2>
          <h3>by professional staff for all styles</h3>
          <h4>Hair cuts, Shape-Ups, razo shave & hot towel, beard trim</h4>
          <h5>No appointment needed, just pop in</h5>
          <Navbar />
          <a href="#hours">
            <Down1 />
          </a>
        </div>
      </main>
      <section className="flex_center h-screen bg-slate-100 w-full snap-start bg_clock flex-col">
        <a name="hours"></a>
        <a href="#home">
          <Up1 />
        </a>
        <OpeningHours />
        <Navbar />
        <a href="#price">
          <Down1 />
        </a>
      </section>
      <section className="flex_center h-screen bg-lime-100 w-full snap-start bg_savings flex-col ">
        <a name="price"></a>
        <a href="#hours">
          <Up1 />
        </a>
        <Prices />
        <Navbar />
        <a href="#map">
          <Down1 />
        </a>
      </section>
      <section className="flex_center h-screen bg-lime-100 w-full snap-start bg_photos flex-col ">
        <a name="photos"></a>
        <a href="#price">
          <Up1 />
        </a>

        <Navbar />
        <a href="#map">
          <Down1 />
        </a>
      </section>
      <section className="flex_center h-screen bg-blue-100 w-full snap-start flex-col">
        <a name="map"></a>
        <a href="#photos">
          <Up1 />
        </a>
        <iframe
          className="m-8 rounded-xl w-11/12 md:w-11/12 transition-all border border-blue-400"
          width="90%"
          height="90%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.7263139195184!2d1.128480115764971!3d51.37132787961298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d93562e44b632f%3A0x8e32eeadcda91d61!2s184%20High%20St%2C%20Herne%20Bay%20CT6%205AP!5e0!3m2!1sen!2suk!4v1589709769718!5m2!1sen!2suk"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <Navbar />
      </section>
    </div>
  )
}
