import React, { useEffect, useState } from 'react'
import EditValue from './EditValue'
import ReadValue from './ReadValue'

interface Props {
    value: string
}

const EditableCell: React.FC<Props> = ({ value: initialValue }) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isEditModeActive, setIsEditModeActive] = useState<boolean>(false)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return isEditModeActive ? (
        <EditValue
            initialValue={initialValue}
            setIsEditModeActive={setIsEditModeActive}
        />
    ) : (
        <ReadValue value={value} setIsEditModeActive={setIsEditModeActive} />
    )
}

export default EditableCell
