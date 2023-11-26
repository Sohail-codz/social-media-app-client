import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/Navbarcomponet'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const dummyUser = {
    first_name: 'Dummy',
    last_name: 'User',
    email: 'dummy@gmail.com',
    avatar: 'https://cdn4.sharechat.com/img_980076_25d28a85_1668927976828_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=828_sc.jpg'
}

  useEffect(()=>{
    fetchUser()
  },[])

  const fetchUser = () =>{
    axios.get('http://localhost:4000/users')
      .then((response)=>setUsers(response.data.data))
      .catch((error)=> console.log(error.message))
  }
  const createNewUser=()=>{
    axios.post('http://localhost:4000/users', dummyUser)
      .then(()=> fetchUser())
      .catch((error)=> console.log(error.message))
  }

  return (
    <div className="App">
      <NavbarComponent/>
        <div className='cardContainer' style={{marginTop:'100px'}}>
          <Container>
            <Row >
            {users.map((user, index)=>( //loop_rendering
                            //when ever we are using loop rendering we should use a key value, here key={user.id}
              <Col md = {4} key={index}>
                <Card style={{ width: '18rem', margin: '20px auto' }}>
                <Card.Img variant="top" src={user.avatar} style={{height:'400px'}}/>
                <Card.Body>
                  <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                  <Card.Text>
                    {user.email}
                  </Card.Text>
                  <Button variant="info">Connect</Button>
                </Card.Body>
                </Card>
              </Col> 
            ))}
            </Row>
            <div className='btn-container' style={{width:'100%', textAlign:'center'}}>
              <Button variant="info" onClick={createNewUser}>Create</Button>
            </div>
          </Container>
        </div>
    </div>
  );
}

export default App;
