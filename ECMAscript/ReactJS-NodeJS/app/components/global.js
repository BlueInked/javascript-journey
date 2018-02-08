import React, { Component } from 'react';
import { ForGroup, FormCotrol, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
  render() {
    return {
      <div>
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder"Search for a Book"/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    }
  }
}

export default Global;
