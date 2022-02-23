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
    const ref = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>(initialValue)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const cellInfo = {
            rowIndex,
            columnID,
            value,
        }
        dispatch(updateData(cellInfo))
        setIsEditModeActive(false)
    }

    useEffect(() => {
        ref?.current?.focus?.()
    }, [ref])

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input value={value} ref={ref} onChange={(e) => handleChange(e)} onBlur={(e) => onSubmit(e)} />
        </form>
    )
}

export default EditValue
