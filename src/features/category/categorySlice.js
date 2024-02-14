import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPostByCategory = createAsyncThunk (
    'category/fetchPostByCategory',
    async (category) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/${category}.json`);
            if(!response.ok) {
                throw new Error("Network response failed")
            }
            const data = await response.json();
            return data.data.children;
        } catch (error) {
            return console.log('Unable to fetch Reddit Data', error); 
        }
    }
);

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        selectedCategory: 'popular',
        posts: [],
        loading: false, 
        hasError: false
    }, 
    reducers: {
        setSelectedCategory(state, action) {
            state.selectedCategory = action.payload; 
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostByCategory.pending, (state) => {
            state.loading = true;
            state.hasError = false;
        })
        .addCase(fetchPostByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.hasError = false
            state.posts = action.payload;
        })
        .addCase(fetchPostByCategory.rejected, (state) => {
            state.loading = false;
            state.hasError = true;
        })
    }   
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer; 
