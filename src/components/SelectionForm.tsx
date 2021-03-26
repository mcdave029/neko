import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Breed } from "../interfaces";

interface Props {
  wasChanged: (event: React.ChangeEvent<any>) => void;
  selectedBreed: string;
  breeds: Array<Breed>;
}

export default class SelectionForm extends Component<Props> {
  render() {
    return (
      <Form>
        <Form.Group controlId="breedSelection">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={this.props.wasChanged}
            value={this.props.selectedBreed}
            disabled={this.props.breeds.length === 0}
          >
            <option value="DEFAULT" disabled>
              Select breed
            </option>
            {this.props.breeds.map((breed: Breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}
