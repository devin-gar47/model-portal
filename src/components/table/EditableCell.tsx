import React, { useEffect, useState } from 'react'
import EditValue from './EditValue'
import ReadValue from './ReadValue'

interface MyProps {
    value: string
    row: any // React-Table does not have proper typescript types as of February 2022
    column: any // React-Table does not have proper typescript types as of February 2022
    tableName: string
}

const EditableCell: React.FC<MyProps> = ({ value: initialValue, row: { index }, column: { id }, tableName }) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isEditModeActive, setIsEditModeActive] = useState<boolean>(false)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return isEditModeActive ? (
        <EditValue
            initialValue={initialValue}
            setIsEditModeActive={setIsEditModeActive}
            rowIndex={index}
            columnID={id}
            tableName={tableName}
        />
    ) : (
        <ReadValue value={value} setIsEditModeActive={setIsEditModeActive} />
    )
}

export default EditableCell
