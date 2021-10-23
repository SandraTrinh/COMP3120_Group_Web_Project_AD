/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import fs from 'fs'
import Feedback from './components/Feedback'

/**
 * Read sample data for testing
 * 
 * @param {String} fileName JSON data filename
 * @returns {Array} an array of like records
 */
const sampleData =  (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

    return data.userfeedback
}

describe('Feedback component', () => {

    test( 'Get feedback function work', () => {
        const contents = sampleData('server/feedback.json')
        const feedback = jest.fn()

        const component = render(
            <Feedback contents={contents} Feedback={feedback}/>
        )

        contents.map(c => expect(component.container).toHaveTextContent(c.content))
    })

    test('snapshot test', () => {
        const contents = sampleData('server/feedback.json')
        const feedback = jest.fn()
    
        const component = render(
            <Feedback contents={contents} Feedback={feedback}/>
        )
        
        expect(component).toMatchSnapshot()
    })
})