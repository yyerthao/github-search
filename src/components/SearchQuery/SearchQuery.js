import React, {useState} from 'react';
import Results from '../Results/Results';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    background: {
        color: 'black'
    }
    },
}));

function SearchQuery(){

const [input, setInput] = useState('');
const classes = useStyles();

const handleSubmit = event => {
    event.preventDefault(); 
    console.log(`User input:`, input); // console logging to ensure user input action is working
    setInput(''); // This resets our string back to empty
    // TO DO: dispatch user search query keyword in here
    };

 return(
     <div className="center">
     <form
        onSubmit={handleSubmit}
        className={classes.root}>
        <input
            type="text" 
            onChange={  (event) => setInput(event.target.value) }
            value={input}
            placeholder="Enter search query keywords here" 
            className="one-rem-margin input-field">
        </input>
            <Button 
                type="submit"
                variant="contained"
                className={classes.background}
                style={{
                    borderRadius: 1,
                    color: "white",
                    backgroundColor: "black",
                    padding: "2px 10px",
                    fontSize: "12px"
                }}
                >
                Search
            </Button>
            <Results/>
     </form>
     </div>
 )
}

export default SearchQuery;