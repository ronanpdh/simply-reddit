import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'home/fetchData',
    async () => {
        try {
        const response = await fetch("https://www.reddit.com/r/popular.json");
        if(!response.ok) {
            throw new Error("Network response not ok")
        }
        const data = await response.json();
        return data.data.children;
        } catch (error) {
            return console.log('Unable to fetch Reddit Data', error); 
        }
    }
);

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: [],
        loading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.hasError = false;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.hasError = false
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state) => {
            state.loading = false;
            state.hasError = true;
        })
    }   
});

export default homeSlice.reducer; 
