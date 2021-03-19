import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface Breed {
  id: string;
  name: string;
}

interface Props {}

interface State {
  breeds: Array<Breed>
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      breeds: []
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col><h1>Cat Browser</h1></Col>
          </Row>
          <Row>
            <Col md={{ span: 3 }} sm={{ span: 6 }}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Breed</Form.Label>
                  <Form.Control as="select" custom defaultValue={ 'DEFAULT' }>
                    <option value="DEFAULT" disabled>Select breed</option>
                    {this.state.breeds.map((breed: Breed) => (
                      <option key={breed.id} value={breed.id}>{breed.name}</option>
                    ))} 
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>No cats available</Col>
          </Row>
          <Row>
            <Col><Button variant="success">Load more</Button>{' '}</Col>
          </Row>
        </Container>
      </div>
    );
  }

  componentDidMount() {
    const options = {
      headers: {'x-api-key': process.env.REACT_APP_CAT_API_KEY}
    };
    axios.get('https://api.thecatapi.com/v1/breeds', options)
      .then((response) => {
        this.setState({ breeds: response.data });
      });
  }
}

export default App;
