import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import axios from "axios"

class Home extends React.Component{

  state ={
    users:[]
    
  }
 
  
  componentDidMount() {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
      console.log(res)
      console.log(this.state)
    });
  }
  

  renderUsers = () => {
    return this.state.users.map(user =>(
      <Card>
        <Card.Content>
          <Card.Meta>
            {user.email}
            <Button>
             <Link to ={{ pathname:`/users/${user.id}`}}>View User</Link>
            </Button>
          </Card.Meta>
          <Card.Meta>
            {user.name}
          </Card.Meta>
        </Card.Content>
      </Card>
      
    ))

  

  }



  render(){
  
  return (

  <div>

  <Header as="h3" textAlign="center">MySpace App</Header>

  <>{this.renderUsers()}</>
  
  </div>
  )
  }

}




export default Home;