import {render, screen} from '../../utils/test-utils';
// import { AppProviders } from '../../providers/AppProviders';
import { MuiMode } from './mui-mode';


describe('MuiMode', () => {

    test('renders text correctly', () => {
        // render(<MuiMode/>, {
        //     wrapper: AppProviders
        // });

        render(<MuiMode/>);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode")
    })
})