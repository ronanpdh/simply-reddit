import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import SearchResults from './pages/Search/SearchResults';
import NotFound from './pages/Home/404/NotFound';


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
