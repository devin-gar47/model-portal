import { isValidRecordInfo } from '../../utils/table'

describe('Table utility functions', () => {
    it('should return true because string is valid', () => {
        expect(isValidRecordInfo('0-0')).toBe(true)
        expect(isValidRecordInfo('   0-0     ')).toBe(true)
        expect(isValidRecordInfo('   0   -  0     ')).toBe(false)
    })

    it('should return false because string is invalid', () => {
        expect(isValidRecordInfo('00--')).toBe(false)
        expect(isValidRecordInfo('00-')).toBe(false)
        expect(isValidRecordInfo('00')).toBe(false)
        expect(isValidRecordInfo('0-0gb')).toBe(false)
        expect(isValidRecordInfo('00 0%')).toBe(false)
        expect(isValidRecordInfo('something random')).toBe(false)
        expect(isValidRecordInfo('')).toBe(false)
        expect(isValidRecordInfo('     ')).toBe(false)
    })
})
