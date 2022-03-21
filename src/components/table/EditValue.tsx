import divide from 'ramda/src/divide'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { saveCellData } from '../../redux/thunk/thunk-actions'
import { isValidRecordInfo } from '../../utils/table'
import { updateBaseballTable } from '../../utils/table-functions'

interface Props {
    initialValue: string
    rowIndex: number
    columnID: string
    setIsEditModeActive: (value: boolean | ((prevVar: boolean) => boolean)) => void
    row: any
}

const EditValue: React.FC<Props> = ({ initialValue, rowIndex, columnID, setIsEditModeActive, row }) => {
    const recordInfoArr = initialValue.split('/')
    const readOnlyPercentage = recordInfoArr[1] ? recordInfoArr[1].trim() : '0%'
    const recordArr = recordInfoArr[0].split('-')
    const winNum = recordArr[0] ? recordArr[0].trim() : '0'
    const lossNum = recordArr[1] ? recordArr[1].trim() : '0'
    const [record, setRecord] = useState<string>(winNum + '-' + lossNum)
    const [isInvalid, setIsInvalid] = useState<boolean>(false)
    const [width, setWidth] = useState(recordInfoArr[0]?.trim().length)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        isInvalid ? setIsInvalid(false) : null
        setWidth(e.target.value.length)
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
        const onSpread = initialValue.split('on')
        const percentage = divide(winNum, winNum + lossNum) * 100
        const finalString = `${winNum}-${lossNum} / ${!isNaN(percentage) ? percentage.toFixed() : '0'}% ${
            onSpread.length == 2 ? `on ${onSpread[1]}` : ''
        }`
        const cellInfo = {
            rowIndex,
            columnID,
            value: finalString,
        }
        const { ou, year, sport, home, division } = row.original
        dispatch<any>(saveCellData(ou, year, sport, home, division, cellInfo))
        setIsEditModeActive(false)
    }

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    autoFocus
                    value={record}
                    onBlur={(e) => onSubmit(e)}
                    onChange={(e) => handleChange(e)}
                    size={4}
                    style={{ width: width + 0.5 + 'ch' }}
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
