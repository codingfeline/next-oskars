import OpeningHours from '@components/Hours'
import Prices from '@components/Prices'

export default function Home() {
  return (
    <div className="flex flex-col flex_center overflow-auto  scroll_parent  ">
      <main className="flex_center h-screen bg-lime-100 snap-start">
        <div className="flex flex-col justify-between items-center h-50  bg-slate-300 w-full sm:w-4/5 sm:rounded-xl p-8 ">
          <h2>Great friendly family barber shop</h2>
          <h3>by professional staff for all styles</h3>
          <h4>Hair cuts, Shape-Ups, razo shave & hot towel, beard trim</h4>
          <h5>No appointment needed, just pop in</h5>
        </div>
      </main>
      <section className="flex_center h-screen bg-slate-100 w-full border snap-start ">
        <OpeningHours />
      </section>
      <section className="flex_center h-screen bg-lime-100 w-full snap-start ">
        <Prices />
      </section>
    </div>
  )
}
