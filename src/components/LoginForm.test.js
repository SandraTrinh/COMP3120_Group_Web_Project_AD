/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LoginForm from './LoginForm'

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
})