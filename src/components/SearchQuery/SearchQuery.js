import React, {useEffect, useState} from 'react';
// import Results from '../Results/Results';
import {Form, Card, Image, Icon} from 'semantic-ui-react';


function SearchQuery(){

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
fetch(`https://api.github.com/users/yyerthao`,)
    .then(res => res.json())
    .then(data => { 
        setData(data)
        });
    }, []);
    

const setData = ({
    name, 
    login, 
    followers, 
    following, 
    public_repos, 
    avatar_url
}) => {
    setName(name)
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);    
}


const handleSearch = e => {
    e.preventDefault();
    setUserInput(e.target.value)
}

const handleSubmit = () => {
console.log('HANDLING SUBMIT')
 fetch(
        `https://api.github.com/users/${userInput}`)
    // {
    //     method: "GET",
    //     headers: new Headers({
    //         Accept: "application/vnd.github.v3+json"
    //     })
    // })
        .then(res => res.json()) 
        .then(data => {
            if(data.message) {
                setError(data.message)
            } else {
                setData(data)
            }
        });
        
    }

 return(
    // <div>
    //     <div className="container">
    //         <FormLabel
    //             onSubmit={handleSubmit}
    //             className={classes.root}>
    //             <TextField
    //                 onChange={handleSearch}
    //                 id="standard-basic" label="Username"
    //                 type="text" 
    //                 placeholder="Enter username" 
    //                 className="one-rem-margin input-field">
    //             </TextField>
    //             <br></br>
    //             <Button 
    //                 type="submit"
    //                 variant="contained"
    //                 className="background"
    //                 style={{
    //                     borderRadius: '2.5px',
    //                     color: "white",
    //                     backgroundColor: "black",
    //                     padding: "2px 10px",
    //                     fontSize: "12px"
    //                 }}>
    //                 Search 
    //             </Button>
    //             {/* <Results/> */}
    //         </FormLabel>
    //     </div>

    //     { error ? (
    //         <h1>{error} </h1>
    //     ) : (
    //         <div>
    //             <center>
    //                 <h2>Your Results:</h2>
    //                 <Card className={classes.rootCard}>
    //                     <CardActionArea>
    //                         <CardMedia
    //                         className={classes.media}
    //                         image={avatar}
    //                         title="GitHub Repository Information"
    //                         />
    //                         <CardContent>
    //                             <Typography gutterBottom variant="h6" component="h2">
    //                                 Owner Name: {name}
    //                                 <br/>
    //                                 Repo Username: {userName}
    //                                 <br/>
    //                                 {followers} Followers
    //                                 <br/>
    //                                 {repos} Repositories
    //                                 <br/>
    //                                 {following} Friends
    //                             </Typography>
    //                         </CardContent>
    //                     </CardActionArea>
    //                     <CardActions>
    //                         {/* Will put an onClick handler here later */}
    //                         {/* <Button size="small" color="primary">
    //                             Details
    //                         </Button> */}
    //                     </CardActions>
    //                 </Card>
    //             </center>
    //         </div>
    //     )}
    //  </div>

    <div>
        <div className='navbar'>GitHub Search</div>
        <div className='search'>
            <Form>
            <Form.Group>
                <Form.Input placeholder='Github user' name='namegithub user'/>
                <Form.Button content='Search' />
            </Form.Group>
            </Form>
        </div>
        <div className='card'>
              <Card>
                <Image 
                    src={avatar} 
                    wrapped 
                    ui={false} 
                />
                <Card.Content>
                <Card.Header>{userName}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {followers} Followers
                    <br></br>
                    Following {following}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
            </Card>
        </div>
    </div>
 )
}

export default SearchQuery;