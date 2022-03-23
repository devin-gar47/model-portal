function getImpliedProbability(odds: string): string {
    switch (odds) {
        case '-100':
            return '50.00%'
        case '-105':
            return '51.20%'
        case '100':
            return '50.00%'
        case '105':
            return '51.20%'
        default:
            return ''
    }
}

export { getImpliedProbability }
