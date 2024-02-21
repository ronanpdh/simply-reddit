import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { getByLabelText, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Search from '../../components/Search/Search';
// import mockFetch from '../../Mocks/mockFetch'; 

// beforeEach(() => {
//     jest.spyOn(window, "fetch").mockImplementation(mockFetch);
// })

// afterEach(() => {
//     jest.resetAllMocks()
// });

test('renders Home page and components correctly', () => {
   render(
        <BrowserRouter>
            <Provider store={store}>
                <Search />
            </Provider>
        </BrowserRouter>
    );
    
    expect(screen.getByPlaceholderText('Search...')).toBeVisible(); 

   
});