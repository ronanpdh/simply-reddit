import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchData = createAsyncThunk(
    'search/fetchSearchData',
    async (searchInput) => {
        try {
            const response = await fetch(`https://www.reddit.com/search.json?q=${searchInput}`);
            if (!response.ok) {
                throw new Error("Network response failed")
            }
            const data = await response.json();
            return data.data.children;
        } catch (error) {
            return console.log('Unable to fetch search data', error);
        }
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: [],
        loading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSearchData.pending, (state) => {
            state.loading = true;
            state.hasError = false;
        })
        .addCase(fetchSearchData.fulfilled, (state, action) => {
            state.loading = false;
            state.hasError = false
            state.results = action.payload;
        })
        .addCase(fetchSearchData.rejected, (state) => {
            state.loading = false;
            state.hasError = true;
        })
    }   
});

export default searchSlice.reducer; 