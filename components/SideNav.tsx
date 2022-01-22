import React from 'react'
import { FaBaseballBall, FaFootballBall } from 'react-icons/fa'
import MyIcon from './MyIcon'

export default function SideNav() {
  return (
    <div className="flex flex-col h-screen bg-neutral-50 w-28 items-center shadow-md border-r-2">
      <MyIcon
        Icon={FaFootballBall}
        sport="Football"
        iconBackgroundColor="#78350f"
      />
      <MyIcon
        Icon={FaBaseballBall}
        sport="Baseball"
        iconBackgroundColor="#a8a29e"
      />
    </div>
  )
}
