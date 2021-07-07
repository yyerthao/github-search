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
        console.log(data)
        setData(data)
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
                setError(data.message)
            } else {
                setData(data)
            }
        });
        
    }

 return(
    <div>
        <div className='navbar'>GitHub Search</div>
        <div className='search'>
            <Form>
            <Form.Group>
                <Form.Input placeholder='Github user' name='github user'/>
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
                    <Card.Header>{name}</Card.Header>
                    <Card.Header>{userName}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {repos} Repositories
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='followers' />
                        {followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='following' />
                        Following {following}
                    </a>
                </Card.Content>
            </Card>
        </div>
    </div>
 )
}

export default SearchQuery;