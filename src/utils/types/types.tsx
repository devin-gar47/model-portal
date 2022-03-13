import { type } from 'os'

interface DataType {
    ou: string
    g1FavTwoPointFive: string
    g1FavOnePointFiveThreePointFive: string
    g1DogTwoPointFive: string
    g1DogOnePointFiveThreePointFive: string
    favTwoPointFive: string
    favOnePointFiveThreePointFive: string
    dogTwoPointFive: string
    dogOnePointFiveThreePointFive: string
    homeMLTwoPointFive: string
    homeMLThreePointFive: string
}

interface ColumnType {
    ou: string
    g1FavTwoPointFive: string
    g1FavOnePointFiveThreePointFive: string
    g1DogTwoPointFive: string
    g1DogOnePointFiveThreePointFive: string
    favTwoPointFive: string
    favOnePointFiveThreePointFive: string
    dogTwoPointFive: string
    dogOnePointFiveThreePointFive: string
    homeMLTwoPointFive: string
    homeMLThreePointFive: string
}

interface PayloadData {
    rowIndex: number
    columnID: string
    value: string
}

export type { DataType, ColumnType, PayloadData }
