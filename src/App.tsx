import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function App() {
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
                  <option value="foo">foo</option>
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

export default App;
