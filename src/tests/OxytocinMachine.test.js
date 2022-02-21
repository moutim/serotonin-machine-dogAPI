import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import userEvent from '@testing-library/user-event';

describe('Header tests', () => {
    it('Checks if the component header renders an image with the alt attribute', () => {
        render(<Header />);
        
        const img = screen.getByRole('img', { name: /logotipo com um cachorro/i });

        expect(img).toBeInTheDocument();
    });
});