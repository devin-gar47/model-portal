import { divide } from 'ramda'
import { DataType, FullCalculationTable } from './types/types'

function getImpliedProbability(odds: string): string {
    switch (odds) {
        case '-100':
            return '50.00'
        case '-105':
            return '51.20'
        case '-110':
            return '52.40'
        case '-115':
            return '53.50'
        case '-120':
            return '54.50'
        case '-125':
            return '55.60'
        case '-130':
            return '56.50'
        case '-135':
            return '57.40'
        case '-140':
            return '58.30'
        case '-145':
            return '59.20'
        case '-150':
            return '60.00'
        case '-155':
            return '60.80'
        case '-160':
            return '61.50'
        case '-165':
            return '62.30'
        case '-170':
            return '63.00'
        case '-175':
            return '63.60'
        case '-180':
            return '64.30'
        case '-185':
            return '64.90'
        case '-190':
            return '65.50'
        case '-195':
            return '66.10'
        case '-200':
            return '66.70'
        case '-205':
            return '67.20'
        case '-210':
            return '67.70'
        case '-215':
            return '68.30'
        case '-220':
            return '68.80'
        case '-225':
            return '69.20'
        case '-230':
            return '69.70'
        case '+100':
            return '50.00'
        case '+105':
            return '49.00'
        case '+110':
            return '48.00'
        case '+115':
            return '47.00'
        case '+120':
            return '45.00'
        case '+125':
            return '44.00'
        case '+130':
            return '43.00'
        case '+135':
            return '43.00'
        case '+140':
            return '42.00'
        case '+145':
            return '41.00'
        case '+150':
            return '40.00'
        case '+155':
            return '39.00'
        case '+160':
            return '38.00'
        case '+165':
            return '38.00'
        case '+170':
            return '37.00'
        case '+175':
            return '36.00'
        case '+180':
            return '36.00'
        case '+185':
            return '35.00'
        case '+190':
            return '34.00'
        case '+195':
            return '34.00'
        case '+200':
            return '33.00'
        case '+205':
            return '33.00'
        case '+210':
            return '32.00'
        case '+215':
            return '32.00'
        case '+220':
            return '31.00'
        case '+225':
            return '31.00'
        case '+230':
            return '30.00'
        default:
            return '0.00'
    }
}
function getPercentage(recordInfo: string): string {
    const trimmedRecordInfoStr = recordInfo.trim()
    const splitArr = trimmedRecordInfoStr.split('/')
    const onSplitArr = splitArr[1].split('on')
    const percentage = onSplitArr[0].split('%')[0]

    return percentage
}

function calculateTrueOverProbability(
    obj: any,
    nonDivisionTableInfo: DataType[],
    divisionTableInfo: DataType[]
): string {
    let recordInfo = ''
    let g1RecordInfo = ''
    let homeMLRecordInfo = ''
    let roadMLRecordInfo = ''

    let division_recordInfo = ''
    let division_g1RecordInfo = ''
    let division_homeMLRecordInfo = ''
    let division_roadMLRecordInfo = ''

    const ou = obj.ou
    const pick = obj.pick
    const line = obj.line
    const g1 = obj.g1
    const divisionGame = obj.division_game
    const roadML = obj.road_ml
    const homeML = obj.home_ml

    const nonDivRowIndex = nonDivisionTableInfo.findIndex((row: any) => row.ou === ou)
    const nonDivRowObj = nonDivisionTableInfo[nonDivRowIndex]

    const divRowIndex = divisionTableInfo.findIndex((row: any) => row.ou === ou)
    const divRowObj = divisionTableInfo[divRowIndex]

    console.log(pick, line)

    if (pick === 'FAV') {
        if (line === '1.5') {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_fav_o1point5OR3point5
            recordInfo = nonDivRowObj.fav_o1point5OR3point5
        } else if (line === '2.5') {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_fav_o2point5
            recordInfo = nonDivRowObj.fav_o2point5
        } else {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_fav_o1point5OR3point5
            recordInfo = nonDivRowObj.fav_o1point5OR3point5
        }

        if (homeML < -200) {
            if (line === '2.5') homeMLRecordInfo = nonDivRowObj.home_mlo2point5
            else if (line === '3.5') homeMLRecordInfo = nonDivRowObj.home_mlo3point5
        }
    } else {
        if (line === '1.5') {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_dog_o1point5OR3point5
            recordInfo = nonDivRowObj.dog_o1point5OR3point5
        } else if (line === '2.5') {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_dog_o2point5
            recordInfo = nonDivRowObj.dog_o2point5
        } else {
            if (g1 === 'YES') g1RecordInfo = nonDivRowObj.g1_dog_o1point5OR3point5
            recordInfo = nonDivRowObj.dog_o1point5OR3point5
        }

        if (roadML < -200) {
            if (line === '1.5') roadMLRecordInfo = nonDivRowObj.ifRoadMLOnePointFive
        }
    }

    if (divisionGame === 'YES') {
        if (pick === 'FAV') {
            if (line === '1.5') {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_fav_o1point5OR3point5
                division_recordInfo = divRowObj.fav_o1point5OR3point5
            } else if (line === '2.5') {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_fav_o2point5
                division_recordInfo = divRowObj.fav_o2point5
            } else {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_fav_o1point5OR3point5
                division_recordInfo = divRowObj.fav_o1point5OR3point5
            }

            if (homeML < -200) {
                if (line === '2.5') division_homeMLRecordInfo = divRowObj.home_mlo2point5
                else if (line === '3.5') division_homeMLRecordInfo = divRowObj.home_mlo3point5
            }
        } else {
            if (line === '1.5') {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_dog_o1point5OR3point5
                division_recordInfo = divRowObj.dog_o1point5OR3point5
            } else if (line === '2.5') {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_dog_o2point5
                division_recordInfo = divRowObj.dog_o2point5
            } else {
                if (g1 === 'YES') division_g1RecordInfo = divRowObj.g1_dog_o1point5OR3point5
                division_recordInfo = divRowObj.dog_o1point5OR3point5
            }

            if (roadML < -200) {
                if (line === '1.5') division_roadMLRecordInfo = divRowObj.ifRoadMLOnePointFive
            }
        }
    }

    let totalPercentage = 0

    const qualifiersArr = [
        recordInfo,
        g1RecordInfo,
        homeMLRecordInfo,
        roadMLRecordInfo,
        division_recordInfo,
        division_g1RecordInfo,
        division_homeMLRecordInfo,
        division_roadMLRecordInfo,
    ].filter((qualifier) => qualifier.trim() !== '')

    qualifiersArr.forEach((qualifier) => {
        const percentage = getPercentage(qualifier)
        totalPercentage = totalPercentage + parseInt(percentage)
    })

    console.log(`
    recordInfo: ${recordInfo}\n
    g1RecordInfo: ${g1RecordInfo}\n
    homeMLRecordInfo: ${homeMLRecordInfo}\n
    roadMLRecordInfo: ${roadMLRecordInfo}\n
    division_recordInfo: ${division_recordInfo}\n
    division_g1RecordInfo: ${division_g1RecordInfo}\n
    division_homeMLRecordInfo: ${division_homeMLRecordInfo}\n
    division_roadMLRecordInfo: ${division_roadMLRecordInfo}\n  
    `)

    const trueOverProbability = divide(totalPercentage, qualifiersArr.length)

    return trueOverProbability.toFixed(2).toString()
}

function calculateTrueUnderProbability(trueUnderProbability: string): string {
    const finalNum = parseFloat('100') - parseFloat(trueUnderProbability)
    return finalNum.toFixed(2)
}

function calculateSuggestion(
    trueOverProbability: string,
    trueUnderProbability: string,
    impliedOverProbability: string,
    impliedUnderProbability: string
): string {
    if (trueOverProbability > impliedOverProbability)
        return `${(parseFloat(trueOverProbability) - parseFloat(impliedOverProbability)).toFixed(2)}% Over`
    return `${(parseFloat(trueUnderProbability) - parseFloat(impliedUnderProbability)).toFixed(2)}% Under`
}

function getCalculationTableCellBackgroundColor(cell: any): string {
    const { id } = cell.column
    const { suggestion } = cell.row.values

    switch (id) {
        case 'implied_over_probability':
        case 'true_over_probability':
            return '59,130,246'
        case 'implied_under_probability':
        case 'true_under_probability':
            return '125,211,252'
        case 'suggestion':
            return suggestion.split('%')[0] >= 4 ? '101,163,13' : ''
        default:
            return ''
    }
}

export {
    getImpliedProbability,
    calculateTrueOverProbability,
    calculateTrueUnderProbability,
    calculateSuggestion,
    getCalculationTableCellBackgroundColor,
}
