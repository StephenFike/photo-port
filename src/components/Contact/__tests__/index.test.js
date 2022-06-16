import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)

        expect(asFragment).toMatchSnapshot();
    });

    it('validates Contact me text content', () => {
        const { getByTestId } = render(<ContactForm />)

        expect(getByTestId('text')).toHaveTextContent('Contact me')
    });

    it('validates submit button text content', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
    });
})