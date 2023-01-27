import {render, screen} from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {

    test('rendrs correctly', () => {
        render(<Greet/>)
        const textElement = screen.getByText(/Hello/i)
        expect(textElement).toBeInTheDocument()
    })


})

// describe('Nested', () => {

//     test('renders with a name', () => {
//         render(<Greet name="Vishwas"/>)
//         const textElement = screen.getByText('Hello Vishwas')
//         expect(textElement).toBeInTheDocument()
//     })

// })