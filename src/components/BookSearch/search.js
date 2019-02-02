import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
    <div className="wrapper col-md-12">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Search</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Find a sweet book" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    );
    
  }
}