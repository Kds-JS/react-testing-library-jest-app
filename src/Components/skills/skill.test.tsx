import {render, screen, logRoles} from '@testing-library/react'
import Skills from './skills';


describe('Skills', () => {
    const skills = ["HTML", "CSS", "JavaScript"];

    test("renders correctly", () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills}/>)
        const listItemsElements = screen.getAllByRole('listitem');
        expect(listItemsElements).toHaveLength(skills.length );
    })

    test('renders Login button', () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    })

    test('Start Learning button is not rendered', () => {
        render(<Skills skills={skills}/>)
        const StartLearningButton = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(StartLearningButton).not.toBeInTheDocument();
    })

    test('Start Learning button is eventually displayed', async () => {
        const view = render(<Skills skills={skills}/>)
        logRoles(view.container);
        // screen.debug();
        const StartLearningButton = await screen.findByRole('button', {
            name: 'Start learning'
        },
        {
            timeout: 2000
        });
        // screen.debug();
        expect(StartLearningButton).toBeInTheDocument();
    })
})
