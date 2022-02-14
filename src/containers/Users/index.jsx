import React, { useEffect, useState } from 'react'

// Components
import UserCard from '../../components/UserCard'

// Api + Store
import { queries } from '../../api'

// Utils
import { classNames } from '../../utils/classNames'

export default function Users() {
  return (
    <section className="py-8 relative w-full bg-cover" style={{ backgroundImage: 'url(/wave.svg)' }}>
      <div className="container relative pt-24 2xl:pt-32 pb-10">
        <div className="flex divide-x">
          <UserSection className="pr-4" heading="Top Reviewers" query={queries.getTopReviewerUsers} />
          <UserSection className="pl-4" heading="Most Check-Ins" query={queries.getMostCheckInUsers} />
        </div>
      </div>
    </section>
  )
}

const UserSection = ({ className, query, heading }) => {
  const [data, setData] = useState([])

  const load = async () => {
    try {
      const res = await query({ size: 4 })
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className={classNames('flex-1', className)}>
      <h2 className="text-center text-lg text-black font-bold mb-5">{heading}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-3">
        {data.map(item => (
          <li key={item.id}><UserCard user={item} /></li>
        ))}
      </ul>
    </div>
  )
}