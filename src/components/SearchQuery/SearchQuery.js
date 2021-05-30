import React, {useState} from 'react';
import Results from '../Results/Results';

function SearchQuery(){

 const [input, setInput] = useState('');


const handleSubmit = event => {
    event.preventDefault(); 
    console.log(`User input:`, input); // console logging to ensure user input action is working
    setInput(''); // This resets our string back to empty
    // TO DO: dispatch user search query keyword in here
    };


 return(
     <form 
        onSubmit={handleSubmit}
        className="center">
        <input
            type="text" 
            onChange={  (event) => setInput(event.target.value) }
            value={input}
            placeholder="Enter search query keywords here" 
            className="one-rem-margin input-field">
        </input>
            <button type="submit">Search</button>
            <Results/>
     </form>
 )

}

export default SearchQuery;