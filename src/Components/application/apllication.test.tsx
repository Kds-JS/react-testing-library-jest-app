import { render,screen } from "@testing-library/react";
import Application from "./application";


describe('Apllication', () => {
    test('renders correctly', () => {
        render(<Application/>);
        const nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument();
    });


});