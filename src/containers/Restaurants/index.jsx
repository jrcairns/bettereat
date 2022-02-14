import React, { useEffect, useState } from 'react'

// Components
import RestaurantCard from '../../components/RestaurantCard'

// Api + Store
import { queries } from '../../api'

const filters = [10, 20, 30, 40]

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [itemsShowing, setItemsShowing] = useState(filters[0])

  const load = async () => {
    try {
      const data = await queries.getRestaurants({ size: 40 })
      setRestaurants(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section className="py-8">
      <div className="flex justify-end mb-5 lg:mb-8">
        <div className="flex items-center">
          <label className="mr-2 font-bold text-sm" htmlFor="rows">Show:</label>
          <select className="rounded-lg border px-3 py-2 appearance-none text-sm" onChange={e => setItemsShowing(e.target.value)} name="rows">
            {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
          </select>
        </div>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-5 md:gap-x-6 lg:gap-x-8">
        {restaurants.slice(0, itemsShowing).map(restaurant => (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        ))}
      </ul>
    </section>
  )
}
