import React from 'react';
import Results from '../Results/Results';

function SearchQuery(){
 return(
     <>
     <section className="center">
        <input placeholder="Enter search query keywords here" className="one-rem-margin input-field"></input>
        <button>Search</button>
        <Results/>
     </section>
     </>
 )

}

export default SearchQuery;