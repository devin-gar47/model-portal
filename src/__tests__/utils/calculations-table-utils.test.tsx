import { calculateTrueOverProbability } from '../../utils/calculation-table-utils'

describe('Table calculation utils', () => {
    it('should be return the correct TRUE OVER PROBABILITY', () => {
        const baseballNonDivMock = [
            {
                ou: '9',
                year: 2017,
                sport: 'BASEBALL',
                home: true,
                division: false,
                g1_fav_o2point5: '216-228 / 49% ',
                g1_fav_o1point5OR3point5: '152-295 / 34% on  o3.5',
                g1_dog_o2point5: '103-146 / 41% ',
                g1_dog_o1point5OR3point5: '147-102 / 59% on  o1.5',
                fav_o2point5: '674-722 / 48% ',
                fav_o1point5OR3point5: '478-918 / 34% on  o3.5',
                dog_o2point5: '326-460 / 41% on  o2.5',
                dog_o1point5OR3point5: '461-326 / 59% on  o1.5',
                home_mlo2point5: '144-110 / 57% ',
                home_mlo3point5: '111-143 / 44% on  o3.5',
                ifRoadMLOnePointFive: '43-33 / 57% on  o1.5',
            },
        ]

        const baseballDivMock = [
            {
                ou: '9',
                year: 2017,
                sport: 'BASEBALL',
                home: true,
                division: true,
                g1_fav_o2point5: '0-0 / 0%',
                g1_fav_o1point5OR3point5: '75-153 / 33% on  o3.5',
                g1_dog_o2point5: '0-0 / 0%',
                g1_dog_o1point5OR3point5: '147-102 / 59% on o1.5',
                fav_o2point5: '0-0 / 0%',
                fav_o1point5OR3point5: '228-469 / 33% on  o3.5',
                dog_o2point5: '0-0 / 0% on o2.5',
                dog_o1point5OR3point5: '461-326 / 59% on o1.5',
                home_mlo2point5: '0-0 / 0%',
                home_mlo3point5: '0-0 / 0% on o3.5',
                ifRoadMLOnePointFive: '43-33 / 57% on o1.5',
            },
        ]

        const homeCalcObj = {
            game: 'CWS/DET',
            road_ml: '-245',
            home_ml: '175',
            pick: 'DOG',
            ou: '9',
            g1: 'YES',
            division_game: 'YES',
            line: '1.5',
            over_odds: '+100',
            under_odds: '-125',
            implied_over_probability: '50.00',
            implied_under_probability: '55.60',
            true_over_probability: '39.00',
            true_under_probability: '61.00',
            suggestion: '5.40% Under',
        }

        expect(calculateTrueOverProbability(homeCalcObj, baseballNonDivMock, baseballDivMock)).toBe('58.33')
    })
})
