import React from 'react'
import { IconType } from 'react-icons'

interface Props {
    Icon: IconType
    sport: string
    iconBackgroundColor: string
}

const MyIcon: React.FC<Props> = ({ Icon, sport, iconBackgroundColor }) => {
    return (
        <>
            <div
                className={`flex flex-col items-center justify-center p-3 h-24 w-24 border-b-2
         hover:scale-110 hover:cursor-pointer transition delay-100 ease-out duration-500`}
            >
                <Icon fontSize={30} color={iconBackgroundColor} />
                <p className="text-slate-600">{sport}</p>
            </div>
        </>
    )
}

export default MyIcon
