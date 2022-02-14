import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function RestaurantCard({ restaurant }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="bg-gray-100/50 border h-full rounded-2xl p-3 flex">
      <div className="w-20 rounded-lg overflow-hidden">
        {!loaded &&
          <Skeleton height="100%" />
        }
        <img
          src={`${restaurant.logo}?random=${restaurant.id}`}
          alt={`${restaurant.name} Thumbnail`}
          onLoad={() => setLoaded(true)}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="ml-3 flex-1">
        <h2 className="text-black font-bold text-lg">{restaurant.name}</h2>
        <p className="line-clamp-5">{restaurant.description}</p>
      </div>
    </div>
  )
}
