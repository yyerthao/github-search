import './App.css';
import React from 'react';
import SearchQuery from '../SearchQuery/SearchQuery';


function App() {
  return (
    <div>
      <h1 className="App-header">GitHub User Search</h1>
      {/* <hr className="hr-style"></hr> */}
      <SearchQuery/>
    </div>
  );
}

export default App;
