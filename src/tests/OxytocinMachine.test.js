import React from 'react';
import '@testing-library/jest-dom';
import { screen, render, waitFor } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import CardDog from '../components/CardDog';
import userEvent from '@testing-library/user-event';
import Footer from '../components/Footer';

describe('Header tests', () => {
    it('Checks if the component Header renders an image with the alt attribute', () => {
        render(<Header />);
        
        const img = screen.getByRole('img', { name: /logotipo com um cachorro/i });

        expect(img).toBeInTheDocument();
    });

    it('Checks if the component Header renders a paragraph with the right text', () => {
        render(<Header />);

        const paragraph = screen.getByText(/do you want to release that feeling of seeing a puppy\? here you can find thousands of dog pictures\./i);

        expect(paragraph).toBeInTheDocument();
    });
});

describe('App tests', () => {
    it('Checks if fetch with DogAPI renders the component correctly', async () => {
        const returnDog = {
            message: 'https://images.dog.ceo/breeds/labrador/n02099712_6823.jpg',
            status: 'success'
          };
        
        global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(returnDog),
        }));

        render(<App />);

        await waitFor(() => {
            const dogImg = screen.getByRole('img', { name: /labrador/i });
            expect(dogImg).toBeInTheDocument();
        });

        await waitFor(() => {
            const dogName = screen.getByText(/labrador/i);
            expect(dogName).toBeInTheDocument();
        })
        
        expect(global.fetch).toBeCalledTimes(2);
        expect(global.fetch).toBeCalledWith('https://dog.ceo/api/breeds/image/random');
    });
});

describe('Footer tests', () => {
    it('Checks if the component Footer renders an paragraph with correctly text', () => {
        render(<Footer />);

        const footerText = screen.getByText(/Developed by Vitor Moutim ® 2022/i);

        expect(footerText).toBeInTheDocument();
    })
})