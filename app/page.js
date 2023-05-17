import OpeningHours from '@components/Hours'
import Prices from '@components/Prices'

export default function Home() {
  return (
    <div className="flex-screen justify-center items-center bg-lime-100">
      <main className="flex justify-center">
        <div className="flex flex-col  items-center h-50  bg-slate-300 w-full sm:w-4/5 sm:rounded-xl p-8">
          <h2>Great friendly family barber shop</h2>
          <h3>by professional staff for all styles</h3>
          <h4>Hair cuts, Shape-Ups, razo shave & hot towel, beard trim</h4>
          <h5>No appointment needed, just pop in</h5>
        </div>
      </main>
      <section>
        <OpeningHours />
        <Prices />
      </section>
    </div>
  )
}
