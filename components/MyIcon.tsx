'use client'
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
            <span>
                <Icon fontSize={30} color={iconBackgroundColor} />
                {sport}
            </span>
            <span>{sport}</span>
        </>
    )
}

export default MyIcon
