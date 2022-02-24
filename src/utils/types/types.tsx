import { type } from 'os'

interface DataType {
    ou: string
    record: string
    winPercentage: string
    favRecord: string
    overFavs: string
    dogRecord: string
    notes: string
}

interface ColumnType {
    ou: string
    record: string
    winPercentage: string
    favRecord: string
    overFavs: string
    dogRecord: string
    notes: string
}

export type { DataType, ColumnType }
