import React, {Component} from 'react';
import { Col } from 'reactstrap';
import './header.css';

class Header extends Component {
  render() {
    return (
        <header className={'row header'}>
          <Col>
            <h1 className={'text-center'}>Teacher Caller 0.1</h1>
          </Col>
        </header>
    );
  }
}

export default Header;
