//import './assets/css/fonts.css';
import './App.css';
import './styles/tailwind.output.css';
import './elements/search/SearchBar.js'
import React from 'react';
import SearchBar from './elements/search/SearchBar.js';

function App() {
  return (
    <div>
      <p>Stock Analysis</p>
      <SearchBar/>
    </div>
  );
}

export default App;
