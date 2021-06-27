import React, {useEffect, useState} from 'react';
import Results from '../Results/Results';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
            width: '25ch'
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
    },
    rootCard: {
        maxWidth: 345,
        },
}));

// start of our react function component called SearchQuery

function SearchQuery(){

const classes = useStyles();
// STATES
const [name, setName] = useState('');
const [userName, setUsername] = useState('');
const [followers, setFollowers] = useState('');
const [following, setFollowing] = useState('');
const [repos, setRepos] = useState('');
const [avatar, setAvatar] = useState('');
const [userInput, setUserInput] = useState('');
const [error, setError] = useState(null);

 

useEffect(() => {
fetch(
    `https://api.github.com/users/yyerthao`,)
    .then(res => res.json()) // will return a promise, calling it res and converting it to json
    .then(data => ( 
        // console.log(data)
        setData(data)
    ));
}, []);


const handleSearch = (e) => {
    setUserInput(e.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', repos)
    fetch(
        `https://api.github.com/users/${setUsername}`, 
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/vnd.github.v3+json"
            })
        }
        )
        .then(res => res.json()) // will return a promise, calling it res and converting it to json
        .then(data => {// another .then, to get the data back and console.logging the data.
            console.log('RETURNED OBJECT', data) // this returns a successful object back
            setData(data)
        });
    }




// function to set state inside app
// the data we get back, we will grab the properties to set in here    
const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
    setName(name)
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);    
}

 return(
    <div>
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className={classes.root}>
                <TextField
                    id="standard-basic" label="Username"
                    type="text" 
                    onChange={handleSearch}
                    placeholder="Enter username" 
                    className="one-rem-margin input-field">
                </TextField>
                <br></br>
                <Button 
                    type="submit"
                    variant="contained"
                    className="background"
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
        </div>
        <section>
        <center>
            <h2>Your Results:</h2>
            {/* Might want to put a card here later */}
            <Card className={classes.rootCard}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={avatar}
                    title="GitHub Repository Information"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Repo owner: {name}
                        Repo owner: {userName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {followers} Followers
                        {repos} Repos
                        {following} Friends
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* Will put an onClick handler here later */}
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </CardActions>
            </Card>
        </center>
        </section>
     </div>
 )
}

export default SearchQuery;