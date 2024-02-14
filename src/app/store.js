import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../features/home/homeSlice'; 
import categoryReducer from '../features/category/categorySlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    category: categoryReducer,
    search: searchReducer
  },
});
