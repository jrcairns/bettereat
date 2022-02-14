import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { classNames } from '../../utils/classNames'

export default function UserCard({ user }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[100px] w-full rounded-full overflow-hidden">
        {!loaded &&
          <Skeleton className="h-24 w-24" circle />
        }
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name} Avatar`}
          onLoad={() => setLoaded(true)}
          className={classNames('object-cover h-full w-full bg-gray-500', loaded ? 'block' : 'hidden')}
        />
      </div>
      <p className="text-xs mt-3 font-light">{user.first_name} {user.last_name}</p>
    </div>
  )
}
