import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

test('renders Main App and Landing page correctly', () => {
    const { getByText } = render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
    
    expect(getByText(/Simply Reddit/)).toBeInTheDocument(); 
});