import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
    <div className="wrapper col-md-12">
      <Form>
        <FormGroup>
          <Label for="booksearch">Search</Label>
          <Input type="text" name="email" id="booksearch" placeholder="Find a sweet book" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    );
    
  }
}