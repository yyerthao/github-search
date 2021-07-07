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

 
// similar to componentDidMount
useEffect(() => {
fetch(`https://api.github.com/users/example`,)
    .then(res => res.json())
    .then(data => { 
        // adding if statement here to catch non-existing user search
            if (data.message){
                setError(data.message)
            } else {
                console.log(data)
                setData(data)
            }
        });
    }, []);
    
// this function sets the state in our app
// essentially it takes the data back from the GH api to set into our setState
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
                setError(data.message);
            } else {
                setData(data);
                setError(null) // resets error 
            }
        });
    }

 return(
    <div>
        <div className='search'>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input onChange={handleSearch} placeholder='Github user' name='github user'/>
                <Form.Button content='Search' />
            </Form.Group>
            </Form>
        </div>
        {/* adding ternary operator here */}
        {/* if there's an error, return h1, otherwise return div card */}
        {error ? (
            <h1>{error}</h1>
            ) : (
                <div className='card'>
                <Card>
                    <Image 
                        src={avatar} 
                        alt="GitHub User Avatar"
                        wrapped 
                        ui={false} 
                        />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Header>{userName}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="/#">
                            <Icon name='user'/>
                            {repos} Repositories
                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="/#">
                            <Icon name='followers' />
                            {followers} Followers
                        </a>
                    </Card.Content>
                    <Card.Content extra>
                        <a href="/#">
                            <Icon name='following' />
                            Following {following}
                        </a>
                    </Card.Content>
                </Card>
            </div>
        )}
    </div>
 )
}

export default SearchQuery;