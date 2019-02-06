import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class Search extends React.Component {
  // method to handle on change
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  // handle form submit
  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.query) {
      return false;
    }

    console.log(this.state.query);
  };

  render() {
    return (
      <div className="wrapper col-md-12">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="booksearch">Search</Label>
            <Input
              type="text"
              name="query"
              id="booksearch"
              placeholder="Find a sweet book"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
  // submit
}
