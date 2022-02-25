import React from 'react'
import { render } from '@testing-library/react'
import ReadValue from '../../components/table/ReadValue'

describe('Read Value component', () => {
    it('should render correctly', () => {
        const setIsEditModeActiveMock = jest.fn()
        render(<ReadValue value="something" setIsEditModeActive={setIsEditModeActiveMock} />)
    })
})
