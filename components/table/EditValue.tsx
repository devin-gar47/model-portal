import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useRef,
    useState,
} from 'react'

interface Props {
    initialValue: string
    row?: object
    column?: object
    setIsEditModeActive: (
        value: boolean | ((prevVar: boolean) => boolean)
    ) => void
}

const EditValue: React.FC<Props> = ({
    initialValue,
    row,
    column,
    setIsEditModeActive,
}) => {
    const ref = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>(initialValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const onBlur = (e: FormEvent) => {
        e.preventDefault()
        setIsEditModeActive(false)
    }

    useEffect(() => {
        ref?.current?.focus?.()
    }, [ref])

    return (
        <form onSubmit={(e) => onBlur(e)}>
            <input
                value={value}
                ref={ref}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => onBlur(e)}
            />
        </form>
    )
}

export default EditValue
