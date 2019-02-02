import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Google Book Search</h1>
        <p className="lead">Search for and save good books</p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
  );
};

export default Jumbo;