import * as React from 'react'

interface IReadOnlyProps {
    value: string
    setIsEditModeActive: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const ReadOnly: React.FC<IReadOnlyProps> = ({ value, setIsEditModeActive }) => {
    return (
        <p data-testid="read-only-cell-value" className="w-fit">
            {value}
        </p>
    )
}

export default ReadOnly
