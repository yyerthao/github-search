import './App.css';
import React from 'react';
import SearchQuery from '../SearchQuery/SearchQuery';


function App() {
  return (
    <div>
      <center>
      <h1 className="App-header">GitHub Repo Search</h1>
      {/* <hr className="hr-style"></hr> */}
      <SearchQuery/>
      </center>
    </div>
  );
}

export default App;
