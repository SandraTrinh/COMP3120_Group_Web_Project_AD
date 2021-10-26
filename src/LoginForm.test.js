/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import LoginForm from './LoginForm'
import vaccinationService from './services/Vaccinations.js'

jest.mock('./services/vaccinations.js')

describe('LoginForm component', () => {

    test( 'renders form with no user', () => {

        const setUser = jest.fn()

        const component = render(<LoginForm user={null} setUser={setUser}/>)

        const form = component.container.querySelector('form')
        expect(form).toHaveTextContent('UserName Password')
    })


    test( 'renders no form with user', () => {

        const setUser = jest.fn()
        const user = {name: "Sam Smith"}
        const component = render(<LoginForm user={user} setUser={setUser}/>)

        expect(component.container).toHaveTextContent('Logged in Sam Smith')
    })

    test('calls callback function on submission', done => {

        const setUser = jest.fn(() => done())
        vaccinationService.login.mockResolvedValue({user: 'Sam Smith'})

        const component = render(<LoginForm user={null} setUser={setUser}/>)

        const form = component.container.querySelector('form')
        const nameInput = component.getByLabelText('username')
        const passwordInput = component.getByLabelText('Password')
        fireEvent.change(nameInput, {target: {value: 'SamSmith'}})
        fireEvent.change(passwordInput, {target: {value: 'sam123'}})
        fireEvent.submit(form)
    })
})