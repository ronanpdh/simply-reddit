import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { getByLabelText, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// import { http, HttpResponse, delay } from 'msw';
// import { setupServer } from 'msw/node';
import Home from '../../pages/Home/Home';


 
// const allPosts = new Map()

// const handlers = [
//     http.get('https://www.reddit.com/r/popular.json', async () => {
//         await delay(150)
//         console.log('Captured a "GET /posts" request')

//         return HttpResponse.json(Array.from(allPosts.values()))
//     }), 
// ];

// // Set up msw server 
// const server = setupServer(...handlers)

// // enable API mock before tests run 
// beforeAll(() => server.listen());

// // Reset request handlers
// afterEach(() => server.resetHandlers());

// // Disable API after tests
// afterAll(() => server.close())

test('renders Home page, Components and fetches and displays API data', async () => {
   render(
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    );
    
    expect(screen.getByRole('heading')).toHaveTextContent(/Simply Reddit/); 
    expect(screen.getByRole('img')).toBeInTheDocument();
    // expect(await screen.findByText(/r/)).toBeInTheDocument();
});