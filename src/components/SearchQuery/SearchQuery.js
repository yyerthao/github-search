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
    media: {
        height: 140,
    },
    card: {
        maxWidth: 345,
        justify: "center"
    }
}));

// start of our react function component called SearchQuery

function SearchQuery(){

// classes declared with useStyles() for material-ui 
const classes = useStyles();


// List of variables to use in this function component
const [org, setOrg] = useState('');
const [owner, setOwner] = useState('');

// const [avatar, setAvatar] = useState('');
// const [starred, setStarred] = useState('');
// const [language, setLanguage] = useState('');


// useEffect(() => {
// fetch(
//     `https://api.github.com/search`,
//     {
//     method: "GET",
//     headers: new Headers({
//         Accept: "application/vnd.github.v3+json"
//     })
//     }
// )
//     .then(res => res.json()) // will return a promise, calling it res and converting it to json
//     .then(data => ( // another .then, to get the data back and console.logging the data.
//         // console.log(data)
//         setData(data)
//     ));
// }, []);


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Org:', org, 'User:', owner)
    fetch(
        `https://api.github.com/repos/${owner}/${org}`, {
            method: "GET",
            headers: new Headers({
                Accept: "application/vnd.github.v3+json"
            })
        }
    )
    .then(res => res.json()) // will return a promise, calling it res and converting it to json
    .then(data => ( // another .then, to get the data back and console.logging the data.
        console.log(data)
    ));
}


// const handleChange = (event) => {
//     event.preventDefault();
//     setOrg(event.target.value);
// }


 return(
    <div className="center container">
        <p>Instructions: Type in keywords to search for the appropriate matching GitHub repository
            in the input textfield below
        </p>
        <form
            onSubmit={handleSubmit}
            className={classes.root}>
            <input
                type="text" 
                onChange={(event) => setOrg(event.target.value)}
                value={org}
                placeholder="Enter repo name" 
                className="one-rem-margin input-field">
            </input>
            <input
                type="text" 
                onChange={(event) => setOwner(event.target.value)}
                value={owner}
                placeholder="Enter owner name" 
                className="one-rem-margin input-field">
            </input>
            <Button 
                type="submit"
                variant="contained"
                className={classes.background}
                style={{
                    borderRadius: '2.5px',
                    color: "white",
                    backgroundColor: "black",
                    padding: "2px 10px",
                    fontSize: "12px"
                }}>
                Search 
            </Button>
            <Results/>
        </form>
        <section>
            <p>Repo Name: {org}</p>
            <p>Owner Name: {owner}</p>
        </section>
     </div>
 )
}

export default SearchQuery;