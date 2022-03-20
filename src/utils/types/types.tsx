import { type } from 'os'

interface DataType {
    ou: string
    year: number
    sport: String
    home: Boolean
    division: Boolean
    g1_fav_o2point5: string
    g1_fav_o1point5OR3point5: string
    g1_dog_o2point5: string
    g1_dog_o1point5OR3point5: string
    fav_o2point5: string
    fav_o1point5OR3point5: string
    dog_o2point5: string
    dog_o1point5OR3point5: string
    home_mlo2point5: string
    home_mlo3point5: string
    ifRoadMLOnePointFive: string
}

interface FullDataType extends DataType {
    year: number
    sport: String
    home: Boolean
    division: Boolean
}

interface ColumnType {
    ou: string
    g1_fav_o2point5: string
    g1_fav_o1point5OR3point5: string
    g1_dog_o2point5: string
    g1_dog_o1point5OR3point5: string
    fav_o2point5: string
    fav_o1point5OR3point5: string
    dog_o2point5: string
    dog_o1point5OR3point5: string
    home_mlo2point5: string
    home_mlo3point5: string
    ifRoadMLOnePointFive: string
}

interface PayloadData {
    rowIndex: number
    columnID: string
    value: string
}

export type { DataType, FullDataType, ColumnType, PayloadData }
