import { divide } from 'ramda'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { updateData } from '../../redux/reducers/baseballHomeNonDivision2017'

interface Props {
    initialValue: string
    rowIndex: number
    columnID: string
    setIsEditModeActive: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const EditValue: React.FC<Props> = ({ initialValue, rowIndex, columnID, setIsEditModeActive }) => {
    const recordRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>(initialValue)
    const recordInfoArr = value.split('/')
    const readOnlyPercentage = recordInfoArr[1] ? recordInfoArr[1].trim() : '0%'
    const recordArr = recordInfoArr[0].split('-')
    const winNum = recordArr[0] ? recordArr[0].trim() : '0'
    const lossNum = recordArr[1] ? recordArr[1].trim() : '0'
    const [record, setRecord] = useState<string>(winNum + '-' + lossNum)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setRecord(e.target.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const recordArr = record.split('-')
        const winNum = parseInt(recordArr[0])
        const lossNum = parseInt(recordArr[1])
        const percentage = divide(winNum, winNum + lossNum) * 100
        console.log(winNum, lossNum)
        const finalString = `${winNum}-${lossNum} / ${percentage.toFixed()}%`
        console.log(`string: ${finalString}`)
        const cellInfo = {
            rowIndex,
            columnID,
            value: finalString,
        }
        dispatch(updateData(cellInfo))
        setIsEditModeActive(false)
    }

    useEffect(() => {
        recordRef?.current?.focus?.()
    }, [recordRef])

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                value={record}
                ref={recordRef}
                onBlur={(e) => onSubmit(e)}
                onChange={(e) => handleChange(e)}
                size={4}
            />{' '}
            <span>/ {readOnlyPercentage}</span>
        </form>
    )
}

export default EditValue
