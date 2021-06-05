import React, {useState, useEffect} from 'react';
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

// classes declared with useStyles() for material-ui 
const classes = useStyles();
// List of variables to use in this function component
const [input, setInput] = useState('');
const [repo, setRepo] = useState('');
const [repoOwner, setRepoOwner] = useState('');
const [owner, setOwner] = useState('');
const [name, setName] = useState('');
const [avatar, setAvatar] = useState('');



useEffect(() => {
fetch(
    `https://api.github.com/users/example`,)
    .then(res => res.json()) // will return a promise, calling it res and converting it to json
    .then(data => ( 
        // console.log(data);
        setData(data)
    ));
}, []);



const handleSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.value)
    console.log('Name:', repo, 'User:', repoOwner)
    fetch(
        `https://api.github.com/repos/${repoOwner}/${repo}`, 
        {
            method: "GET",
            headers: new Headers({
                Accept: "application/vnd.github.v3+json"
            })
        }
        )
        .then(res => res.json()) // will return a promise, calling it res and converting it to json
        .then(data => {// another .then, to get the data back and console.logging the data.
            console.log(data)
            setData(data)
        });
    }
    
// function to set state inside app
// the data we get back, we will grab the properties to set in here    
const setData= ({owner, name, avatar_url}) => {
    setOwner(owner);
    setName(name);
    setAvatar(avatar_url);
}

 return(
    <div>
        <div className="container">
            <form
                onSubmit={handleSubmit}
                className={classes.root}>
                <TextField
                    id="standard-basic" label="Owner Name"
                    type="text" 
                    onChange={(event) => setRepoOwner(event.target.value)}
                    value={repoOwner}
                    placeholder="Enter owner name" 
                    className="one-rem-margin input-field">
                </TextField>
                <TextField
                    id="standard-basic" label="Repo Name"
                    type="text" 
                    onChange={(event) => setRepo(event.target.value)}
                    value={repo}
                    placeholder="Enter repo name" 
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
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={avatar}
                    title="GitHub Repository Information"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Repo name: {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Repo owner: {owner}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description of repo will go here
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