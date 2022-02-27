import { divide } from 'ramda'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { updateData } from '../../redux/reducers/baseballHomeNonDivision2017'
import { isValidRecordInfo } from '../../utils/table'

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
    const [isInvalid, setIsInvalid] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        isInvalid ? setIsInvalid(false) : null
        setRecord(e.target.value)
    }

    const onSubmit = (e: FormEvent): void => {
        e.preventDefault()
        if (!isValidRecordInfo(record)) {
            setIsInvalid(true)
            return
        }
        const recordArr = record.split('-')
        const winNum = parseInt(recordArr[0])
        const lossNum = parseInt(recordArr[1])
        const percentage = divide(winNum, winNum + lossNum) * 100
        const finalString = `${winNum}-${lossNum} / ${percentage.toFixed()}%`
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
        <>
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
            <small hidden={!isInvalid} className="text-xs">
                Valid input must be in the form: 0-0
            </small>
        </>
    )
}

export default EditValue
