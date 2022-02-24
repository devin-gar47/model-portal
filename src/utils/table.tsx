const getCellBackgroundColor = (cell: any): string => {
    const percentage = parseInt(cell?.value?.split('/')[1]?.split('%')[0])
    if (percentage <= 44) return '248, 113, 113'
    else if (percentage >= 45 && percentage <= 49) {
        return '253, 224, 71'
    } else return '22, 163, 74'
}

export { getCellBackgroundColor }
