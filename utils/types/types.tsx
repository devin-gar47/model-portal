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

interface FullCalculationTable {
    game: string
    road_ml: string
    home_ml: string
    pick: string
    ou: string
    g1: string
    division_game: string
    line: string
    over_odds: string
    implied_over_probability: string
    under_odds: string
    implied_under_probability: string
    true_over_probability: string
    true_under_probability: string
    suggestion: string
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

export type { DataType, FullDataType, ColumnType, PayloadData, FullCalculationTable }
