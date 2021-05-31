import React, {useState, useEffect} from 'react';
import Results from '../Results/Results';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
        maxWidth: 345
    }
}));

function SearchQuery(){

const classes = useStyles();
    
// List of variables
const [input, setInput] = useState('');
const [name, setName] = useState('');
const [avatar, setAvatar] = useState('');
const [starred, setStarred] = useState('');
const [language, setLanguage] = useState('');


// similar to componentDidMount
useEffect(() => {
    // fetching the rest api for GitHub api/repositories
    fetch('https://api.github.com/repositories')
    .then(res => res.json()) // will return a promise, calling it res and converting it to json
    .then(data => ( // another .then, to get the data back and console.logging the data.
        // console.log(data)
        setData(data)
    ));
}, []);

// creating a function called setData to set the state in our app 
const setData = ({
    full_name, 
    avatar_url, 
    starred_url, 
    language_url
}) => { // grabbing specific properties from the api repositories
    setName(full_name)
    setAvatar(avatar_url)
    setStarred(starred_url)
    setLanguage(language_url)
}



// this function handles the search
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User name:`, input); // console logging to ensure user input action is working
    setName(''); // This resets our string back to empty
    // TO DO: dispatch user search query keyword in here
    fetch(`https://api.github.com/repositories${setInput}`)
    .then(res => res.json())
    .then(data => {
        setData(data)
    });
};

const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
}

const viewSearchDetails = () => {
    console.log('Heading to Results Page');
    // push to new page 
}



 return(
    <div className="center container">
    <p>Instructions: Type in keywords to search for the appropriate matching GitHub repository
        in the input textfield below
    </p>
    <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className={classes.root}>
        <input
            type="text" 
            onChange={(event) => setInput(event.target.value)}
            value={input}
            placeholder="Enter search query keywords here" 
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
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={avatar}
                    title="GitHub repo photo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        GitHub Repo Name: {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Stars: {starred}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Language: {language}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={viewSearchDetails} size="small" color="primary">
                Click for Details
                </Button>
            </CardActions>
        </Card>
     </div>
 )
}

export default SearchQuery;