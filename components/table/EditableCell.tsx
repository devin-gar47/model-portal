import React, { useEffect, useState } from 'react'
import EditValue from './EditValue'
import ReadValue from './ReadValue'

interface EditableCellProps {
    value: string
    row: any // React-Table does not have proper typescript types as of February 2022
    column: any // React-Table does not have proper typescript types as of February 2022
}

const EditableCell: React.FC<any> = ({ value: initialValue, row: { index }, column: { id }, row, tableName }) => {
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
            row={row}
            tableName={tableName}
        />
    ) : (
        <ReadValue value={value} setIsEditModeActive={setIsEditModeActive} />
    )
}

export default EditableCell
