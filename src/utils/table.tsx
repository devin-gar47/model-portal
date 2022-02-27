const getCellBackgroundColor = (cell: any): string => {
    const percentage = parseInt(cell?.value?.split('/')[1]?.split('%')[0])
    if (percentage <= 44) return '248, 113, 113'
    else if (percentage >= 45 && percentage <= 49) {
        return '253, 224, 71'
    } else return '22, 163, 74'
}

function filterInt(value: string) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
        return Number(value)
    } else {
        return NaN
    }
}

const isValidRecordInfo = (str: string): boolean => {
    if (!str?.trim()) return false

    const hyphenCount = (str.match(/-/g) || []).length
    if (hyphenCount !== 1) return false

    const recordInfoArr = str
        .trim()
        .split('-')
        .filter((element) => element)
    if (recordInfoArr.length !== 2) return false

    const winNum = recordInfoArr[0].trim()
    const lossNum = recordInfoArr[1].trim()
    console.log(winNum, lossNum)

    if (isNaN(filterInt(winNum)) || isNaN(filterInt(lossNum))) return false

    return true
}

export { getCellBackgroundColor, isValidRecordInfo }
